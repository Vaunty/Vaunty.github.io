import { BUBBLE_INDEX as INDEX } from "./content.js";
import { answerQuestion, makeFallbackCard } from "./chat-engine.js";
export { answerQuestion, makeFallbackCard };
export const BUBBLE_INDEX = INDEX;

// Live answers come from a small Cloudflare Worker (chat-worker/) that holds the API key server-side.
// The page only knows the Worker URL: <section data-chat-proxy="https://...workers.dev">. No keys in the browser, ever.
const chatHistory = [];

function chatProxyUrl() {
  if (typeof document === "undefined") return null;
  const cfg = (typeof window !== "undefined" && window.__MASCOT_CHAT_CONFIG) || {};
  return cfg.proxyUrl || document.querySelector("[data-chat-proxy]")?.dataset.chatProxy || null;
}

export function liveChatEnabled() {
  return !!chatProxyUrl();
}

export async function askLiveLLM(rawQuery) {
  const q = (rawQuery || "").trim().slice(0, 300);
  const url = chatProxyUrl();
  if (!q || !url) return null;
  try {
    const r = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: q, history: chatHistory.slice(-3) }),
    });
    if (!r.ok) return null;
    const data = await r.json();
    if (data.isOutOfScope) return makeFallbackCard(q);
    if (!data.body) return null;
    chatHistory.push({ q, a: `${data.title}. ${data.body}`.replace(/\*\*/g, "") });
    return {
      tag: data.tag || "💬 matthew",
      title: data.title || "",
      body: data.body,
      footer: data.footer ? `💬 ${data.footer}` : "💬 ask me something else below",
    };
  } catch {
    return null;
  }
}

// -----------------------------------------------------------------------------

// Humanized High-DPI 2D Canvas Renderer for ChatBubbleFace (1536 x 900)
// -----------------------------------------------------------------------------
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function parseRichTokens(text) {
  const rawWords = (text || "").trim().split(/\s+/).filter(Boolean);
  const words = [];
  let inBold = false;
  for (const rw of rawWords) {
    const markerCount = (rw.match(/\*\*/g) || []).length;
    const clean = rw.replace(/\*\*/g, "");
    if (markerCount >= 2) {
      words.push({ text: clean, bold: true });
    } else if (markerCount === 1) {
      if (!inBold) {
        inBold = true;
        words.push({ text: clean, bold: true });
      } else {
        words.push({ text: clean, bold: true });
        inBold = false;
      }
    } else {
      words.push({ text: clean, bold: inBold });
    }
  }
  return words;
}

const FONT = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif';

function wrapRich(ctx, tokens, maxW, size) {
  const lines = [];
  let line = [], w = 0;
  for (const t of tokens) {
    ctx.font = `${t.bold ? 750 : 450} ${size}px ${FONT}`;
    const ww = ctx.measureText(t.text + " ").width;
    if (line.length && w + ww > maxW) { lines.push(line); line = [t]; w = ww; }
    else { line.push(t); w += ww; }
  }
  if (line.length) lines.push(line);
  return lines;
}

function wrapPlain(ctx, text, maxW) {
  const words = text.split(/\s+/), lines = [];
  let cur = "";
  for (const wd of words) {
    const next = cur ? cur + " " + wd : wd;
    if (cur && ctx.measureText(next).width > maxW) { lines.push(cur); cur = wd; } else cur = next;
  }
  if (cur) lines.push(cur);
  return lines;
}

/** Seconds a visitor needs to read a card (~200 wpm, plus a beat to notice it popped up). */
export function readingTime(card) {
  const text = [card.title, card.body, card.footer].filter(Boolean).join(" ").replace(/\*\*/g, "");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.min(26, Math.max(11, 3.5 + words * 0.30));
}

export function drawBubbleCanvas(canvas, card) {
  const ctx = canvas.getContext("2d");
  const W = canvas.width, H = canvas.height;
  const isFallback = card.step === "OUT OF SCOPE";

  ctx.fillStyle = "#fffdf8";
  ctx.fillRect(0, 0, W, H);
  ctx.save();
  ctx.font = '900 210px Georgia, "Times New Roman", serif';
  ctx.fillStyle = "rgba(63, 156, 56, 0.07)";
  ctx.textBaseline = "top";
  ctx.fillText("\u201D", W - 190, 20);
  ctx.restore();

  const padX = 76;
  const maxW = W - padX * 2;

  // tag pill
  const tagText = card.tag || "\u{1F44B} hey there";
  ctx.font = `700 28px ${FONT}`;
  const tagW = Math.min(maxW, Math.ceil(ctx.measureText(tagText).width) + 48);
  const pillY = 28, pillH = 46;
  ctx.fillStyle = isFallback ? "#fff1f2" : "#edf8eb";
  roundRect(ctx, padX, pillY, tagW, pillH, 23);
  ctx.fill();
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = isFallback ? "#e11d48" : "#2e7d32";
  ctx.stroke();
  ctx.fillStyle = isFallback ? "#be123c" : "#1b5e20";
  ctx.textBaseline = "middle";
  ctx.fillText(tagText, padX + 24, pillY + pillH / 2 + 1, tagW - 48);

  const footerH = card.footer ? 54 : 16;
  const top = pillY + pillH + 16;
  const bottom = H - footerH;

  if (card.thinking) {
    ctx.font = `800 56px ${FONT}`;
    ctx.fillStyle = "#111827";
    ctx.textBaseline = "top";
    ctx.fillText(card.title || "Hmm, let me think", padX, top + 16, maxW);
    const n = card.dots ?? 3;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.fillStyle = i < n ? "#3f9c38" : "rgba(63,156,56,0.22)";
      ctx.arc(padX + 30 + i * 60, top + 120, 16, 0, Math.PI * 2);
      ctx.fill();
    }
  } else {
    // Largest type that fits: title (up to 2 lines) + body shrink together until everything fits.
    const tokens = parseRichTokens(card.body || "");
    let size = 46, titleSize, titleLines, bodyLines, need;
    for (; size >= 32; size -= 2) {
      titleSize = Math.round(size * 1.18);
      ctx.font = `800 ${titleSize}px ${FONT}`;
      titleLines = card.title ? wrapPlain(ctx, card.title, maxW).slice(0, 2) : [];
      bodyLines = wrapRich(ctx, tokens, maxW, size);
      need = titleLines.length * titleSize * 1.15 + (titleLines.length ? 14 : 0) + bodyLines.length * size * 1.40;
      if (need <= bottom - top) break;
    }
    let y = top + Math.max(0, (bottom - top - need) * 0.48);
    ctx.textBaseline = "top";
    ctx.font = `800 ${titleSize}px ${FONT}`;
    ctx.fillStyle = "#111827";
    for (const tl of titleLines) { ctx.fillText(tl, padX, y, maxW); y += titleSize * 1.15; }
    if (titleLines.length) y += 14;
    const maxLines = Math.floor((bottom - y) / (size * 1.40));
    for (const line of bodyLines.slice(0, Math.max(1, maxLines))) {
      let x = padX;
      for (const t of line) {
        ctx.font = `${t.bold ? 750 : 450} ${size}px ${FONT}`;
        ctx.fillStyle = t.bold ? (isFallback ? "#be123c" : "#166534") : "#1f2937";
        ctx.fillText(t.text, x, y);
        x += ctx.measureText(t.text + " ").width;
      }
      y += size * 1.40;
    }
  }

  if (card.footer) {
    ctx.strokeStyle = "rgba(17,24,39,0.10)";
    ctx.lineWidth = 2.0;
    ctx.beginPath(); ctx.moveTo(padX, H - footerH + 4); ctx.lineTo(W - padX, H - footerH + 4); ctx.stroke();
    ctx.font = `600 24px ${FONT}`;
    ctx.fillStyle = "#57606a";
    ctx.textBaseline = "middle";
    ctx.fillText(card.footer, padX, H - footerH / 2 + 3, maxW);
  }
}

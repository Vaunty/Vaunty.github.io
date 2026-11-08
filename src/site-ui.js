import { TIMELINE, TIMELINE_GROUPS, TABS, CHIPS } from './content.js';
import { answerQuestion } from './chat-engine.js';
import { renderActivity } from './activity.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rich=s=>esc(s).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>');
const external=c=>c.link?`<a class="source-link" href="${esc(c.link)}" target="_blank" rel="noopener noreferrer">${esc(c.linkLabel||'Learn more')} ↗<span class="sr-only"> (opens in a new tab)</span></a>`:'';
const form=document.getElementById('mascotAskForm'),input=document.getElementById('mascotAskInput');
const answerDialog=document.getElementById('answerDialog'),answerText=document.getElementById('answerText'),readAnswer=document.getElementById('readAnswer');
const motion=()=>matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth';
function ask(q){
  if(!q.trim())return;
  const card=answerQuestion(q);window.__mascot?.showAnswer?.(card);
  answerText.innerHTML=`<h2 id="answerTitle">${esc(card.title)}</h2><p>${rich(card.body)}</p><div class="guide-actions">${(card.actions||[]).map(a=>a.tab?`<button type="button" data-open-tab="${esc(a.tab)}">${esc(a.label)}</button>`:`<a href="${esc(a.href)}">${esc(a.label)}</a>`).join('')}</div>`;
  readAnswer.disabled=false;
  document.getElementById('guideStatus').textContent=`${card.title}. ${card.body.replace(/\*\*/g,'')}`;
  if(!window.__mascot?.showAnswer && !answerDialog.open)answerDialog.showModal();
}
form.addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim();if(q){ask(q);input.value='';}});
document.querySelector('.ask-chips').innerHTML=CHIPS.map(c=>`<button type="button" class="ask-chip" data-question="${esc(c.q)}">${esc(c.label)}</button>`).join('');
document.addEventListener('click',e=>{const q=e.target.closest('[data-question]');if(q)ask(q.dataset.question);const tab=e.target.closest('[data-open-tab]');if(tab){answerDialog.close();openTab(tab.dataset.openTab,true);}});
readAnswer.addEventListener('click',()=>answerDialog.showModal());
document.getElementById('closeAnswer').addEventListener('click',()=>answerDialog.close());
answerDialog.addEventListener('click',e=>{if(e.target===answerDialog)answerDialog.close();});
const drawer=document.getElementById('tabDrawer'),body=document.getElementById('drawerBody'),title=document.getElementById('drawerTitle');
const tabs=[...document.querySelectorAll('.tab-btn')];let active=null;
tabs.forEach((btn,i)=>{
  btn.id=`tab-${btn.dataset.tab}`;btn.setAttribute('role','tab');btn.setAttribute('aria-selected','false');btn.setAttribute('aria-controls','tabDrawer');btn.tabIndex=i===0?0:-1;
  btn.addEventListener('click',()=>openTab(btn.dataset.tab));
  btn.addEventListener('keydown',e=>{const next=e.key==='ArrowRight'?(i+1)%tabs.length:e.key==='ArrowLeft'?(i+tabs.length-1)%tabs.length:e.key==='Home'?0:e.key==='End'?tabs.length-1:null;if(next!==null){e.preventDefault();tabs.forEach(t=>t.tabIndex=-1);tabs[next].tabIndex=0;tabs[next].focus();}});
});
function renderTimeline(filter='all'){
  const list=filter==='all'?TIMELINE:TIMELINE.filter(e=>e.group===filter);
  const options=[['all','All'],...Object.entries(TIMELINE_GROUPS).map(([k,g])=>[k,g.label])];
  body.innerHTML=`<div class="tl-filters" aria-label="Filter timeline">${options.map(([k,label])=>`<button type="button" class="tl-filter-btn ${filter===k?'active':''}" aria-pressed="${filter===k}" data-filter="${k}">${esc(label)} (${k==='all'?TIMELINE.length:TIMELINE.filter(e=>e.group===k).length})</button>`).join('')}</div><div class="timeline-list">${list.map(e=>`<article class="tl-item" style="--tl-c:${TIMELINE_GROUPS[e.group].color}"><span class="tl-dot"></span><div class="tl-top"><span class="tl-date">${esc(e.date)}</span><span class="tl-cat">${esc(TIMELINE_GROUPS[e.group].label)}</span></div><h3 class="tl-title">${esc(e.title)}</h3><p class="tl-org">${esc(e.org)}</p><p class="tl-desc">${esc(e.desc)}</p>${external(e)}</article>`).join('')}</div>`;
  body.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{renderTimeline(b.dataset.filter);body.querySelector(`[data-filter="${b.dataset.filter}"]`).focus();}));
}
function renderCards(cards){body.innerHTML=`<div class="card-grid">${cards.map(c=>`<article class="info-card"><div><h3>${esc(c.title)}</h3><p class="info-meta">${esc(c.meta)}</p><p class="info-desc">${esc(c.desc)}</p>${external(c)}</div><div class="tag-row">${c.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div></article>`).join('')}</div>`;}
function renderResume(resume){
  body.innerHTML=`<section class="resume-viewer" aria-label="${esc(title.textContent)} viewer"><div class="resume-toolbar"><span>${resume.pages.length} ${resume.pages.length===1?'page':'pages'} · ${esc(resume.edition)}</span><label>Zoom <select id="resumeZoom"><option value="100">Fit width</option><option value="125">125%</option><option value="150">150%</option><option value="200">200%</option></select></label><a class="download-btn" href="${esc(resume.pdf)}" download>Download PDF ↓</a></div><p class="viewer-help">Scroll to read. Zoom for a closer look, or read the accessible text below.</p><div class="resume-scroll" tabindex="0" aria-label="Resume pages; scroll horizontally when zoomed"><div class="resume-pages">${resume.pages.map((p,i)=>`<figure><img src="${esc(p.image)}" alt="${esc(title.textContent)}, page ${i+1}. Full text is available below." width="${p.width}" height="${p.height}" decoding="async"/><figcaption>Page ${i+1} of ${resume.pages.length}</figcaption></figure>`).join('')}</div></div><details class="resume-text"><summary>Read as accessible text</summary>${resume.pages.map((p,i)=>`<h3>Page ${i+1}</h3><div class="resume-transcript">${esc(p.text)}</div>`).join('')}</details><p class="viewer-error" hidden>Preview images could not load. Read the text above or download the PDF.</p></section>`;
  body.querySelector('#resumeZoom').addEventListener('change',e=>{body.querySelector('.resume-pages').style.width=e.target.value+'%';});
  body.querySelectorAll('.resume-pages img').forEach(img=>img.addEventListener('error',()=>body.querySelector('.viewer-error').hidden=false));
}
function openTab(key,focusPanel=false){
  const data=key==='activity'?{title:'Off duty'}:TABS[key];if(!data)return;active=key;
  tabs.forEach(b=>{const selected=b.dataset.tab===key;b.classList.toggle('active',selected);b.setAttribute('aria-selected',String(selected));b.tabIndex=selected?0:-1;});
  title.textContent=data.title;drawer.setAttribute('aria-labelledby',`tab-${key}`);
  if(key==='activity')void renderActivity(body);else if(data.resume)renderResume(data.resume);else if(data.isTimeline)renderTimeline();else renderCards(data.cards);
  drawer.hidden=false;drawer.classList.add('open');window.__mascot?.showTabTopic?.(key);
  if(focusPanel)drawer.focus({preventScroll:true});drawer.scrollIntoView({behavior:motion(),block:'start'});
}
function closeDrawer(){const previous=active;active=null;drawer.hidden=true;drawer.classList.remove('open');tabs.forEach(b=>{b.classList.remove('active');b.setAttribute('aria-selected','false');});window.__mascot?.clearTabTopic?.();document.getElementById(`tab-${previous}`)?.focus();}
document.getElementById('drawerClose').addEventListener('click',closeDrawer);
drawer.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();closeDrawer();}});

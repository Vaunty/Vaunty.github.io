# Matthew Ngoy — Personal Portfolio & 3D Interactive Mascot

Production: **[https://vaunty.github.io/](https://vaunty.github.io/)**

Current feature demo (Off duty, Steam/THE FINALS, cleaner guide):
**[Open the 3D mascot demo](https://matthew-portfolio-preview.matthew-portfolio.workers.dev/)**.
You can also open `Live Demo.url` or use T3's **Open 3D mascot live demo** action.

The canonical local checkout and T3 Portfolio project root is
`C:/Users/matth/OneDrive/Desktop/Portfolio`, on `feature/personal-activity-clean-guide`.
`Desktop/personalwebsite` is an obsolete, separate React/Vite project. Its old
`localhost:5173` server is not this portfolio. Do not select a demo merely because
a port is listening; use the explicit feature-demo URL above.

A high-performance personal portfolio website featuring a real-time 3D vinyl-toy mascot rendered with Three.js, WebGL, and Blender 5.2.

---

## Features

- **Real-Time 3D Vinyl Toy Hero:** 60 FPS WebGL canvas with responsive cursor tracking, natural dual-tier head & body posture, and click-to-sip Yoo-hoo chocolate drink animation.
- **True 3D Wrapped Visor:** Cat-eye sunglasses with curved temple wrap ($R = 1.30$), glossy white acetate frame, and vibrant red reflective lenses.
- **GitHub Universe Visual Identity:** Sleek dark-mode aesthetic with an off-white floating hero card, vibrant mosaic pixel grid, and interactive audio toggle.
- **On-Demand Portfolio Drawer:** Clean, uncluttered layout where projects, research papers, security audits, and experience only expand when tabs are selected.
- **Inline Resume Viewers:** Separate Industry and Research tabs display the November 5, 2026 resumes on the page, with zoom, accessible text and explicit PDF download controls.
- **Portfolio Guide:** Local, note-grounded answers in the mascot bubble, with an optional latest-answer dialog and links into relevant tabs. No expanding transcript or live AI service is required.
- **Responsive and Keyboard Accessible:** Wrapping navigation, mobile cards, keyboard tab controls and a working guide even without WebGL.
- **Automated CI/CD Pipeline:** GitHub Actions workflow automatically verifies asset integrity, runs smoke checks, and deploys directly to GitHub Pages on every push to `main`.

---

## Custom Domain Setup

To point a custom domain (e.g. `matthewngoy.com`) to this site:
1. Add a `CNAME` record in your DNS provider (Cloudflare, Name.com, etc.):
   - Name: `@` (or `www`)
   - Target: `vaunty.github.io`
2. Add a `CNAME` file containing `matthewngoy.com` to the root of this repository (or enter it in **Settings > Pages > Custom domain**).
3. GitHub automatically provisions free SSL/TLS encryption.

---

## Tech Stack

- **3D Modeling & Animation:** Blender 5.2 LTS, Cycles, Python SDF geometry engine
- **Frontend / Graphics:** Three.js r187, WebGL, PBR `MeshPhysicalMaterial`, glTF Transform + Meshopt compression
- **Deployment:** GitHub Pages, GitHub Actions CI/CD

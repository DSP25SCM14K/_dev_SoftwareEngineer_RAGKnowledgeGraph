# Dev Kumar — Portfolio

Dark-minimal portfolio site tailored to the **Software Engineer — RAG + Knowledge Graph + .NET/Azure** role. Highlights production RAG experience, Neo4j knowledge-graph platform ownership, .NET/C# engineering, and Azure infrastructure work.

**Live site (after deployment):** `https://DSP25SCM14K.github.io/_dev_SoftwareEngineer_RAGKnowledgeGraph/`

---

## Stack

Pure HTML / CSS / vanilla JS. No build step. Works as a static site on GitHub Pages.

- **Typography** — Instrument Serif (display), Satoshi (body), JetBrains Mono (code/labels)
- **Style** — Dark background (`#0a0a0a`) with a single electric cyan accent (`#00e5ff`)
- **Diagram** — Inline SVG RAG + Knowledge Graph architecture

---

## Local preview

```bash
# Any static server works. Two easy options:

# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then open [http://localhost:8000](http://localhost:8000).

---

## Deploy to GitHub Pages

### 1. Create a new repo under your GitHub account

Create a repo named exactly `_dev_SoftwareEngineer_RAGKnowledgeGraph` on `https://github.com/DSP25SCM14K`.

### 2. Push this folder to the repo

From this folder:

```bash
git init
git branch -M main
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/DSP25SCM14K/_dev_SoftwareEngineer_RAGKnowledgeGraph.git
git push -u origin main
```

### 3. Enable GitHub Pages

- Go to **Settings → Pages** on the repo
- Under **Source**, choose **Deploy from a branch**
- Branch: `main` · Folder: `/ (root)` · Save
- Wait ~1 minute; site will be live at:
  ```
  https://DSP25SCM14K.github.io/_dev_SoftwareEngineer_RAGKnowledgeGraph/
  ```

---

## Add your résumé PDF

The hero section has a **Download résumé** button pointing to `resume.pdf`. Drop your file into this folder as `resume.pdf` before pushing:

```bash
cp /path/to/_dev_SoftwareEngineer_RAGKnowledgeGraph.pdf ./resume.pdf
```

---

## File map

```
.
├── index.html      # Structure + content
├── styles.css      # All styling (dark minimal + cyan accent)
├── script.js       # Scroll-reveal + smooth-scroll
├── resume.pdf      # (add this yourself)
└── README.md
```

---

## Customize

- **Accent color** → change `--accent` in `styles.css` (line ~13)
- **Content** → edit `index.html` directly; sections are commented
- **Diagram** → SVG lives inline in `index.html` under `.architecture__diagram`

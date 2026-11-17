# siekny.github.io

Personal portfolio of Siekny Hor, AI engineer (computer vision, LLM and AI agents).
Live at **https://siekny.github.io**.

## Pages

| File | Page |
|------|------|
| `index.html` | Home: about, resume, portfolio, contact |
| `ai-voice-coaching-agent.html` | AI Voice Coaching Agent project |
| `ct-reconstruction-from-xray.html` | CT Reconstruction from X-Ray Images project ([paper on DBpia](https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12132465)) |
| `3d-hand-pose-estimation.html` | 3D Hand Pose Estimation project ([thesis on RISS](https://www.riss.kr/search/detail/DetailView.do?p_mat_type=be54d9b8bc7cdb09&control_no=f9070b700c68fdf2ffe0bdc3ef48d419&outLink=K)) |
| `404.html` | Page shown for addresses that don't exist |

GitHub Pages serves pages without `.html`, so links use `ai-voice-coaching-agent`, not `ai-voice-coaching-agent.html`.

## How the site works

- **Languages:** English, 한국어 and ខ្មែរ. Every visible text has a `data-i18n` key; the texts for each
  language are in `assets/js/translations.js` (`en`, `ko` and `km` must have the same keys).
  Images that change with the language use `data-i18n-src`.
- **Light / dark mode:** `assets/js/theme.js`. Images marked `data-dark` have a dark version next to them
  (`name.svg` → `name.dark.svg`, `name.png` → `name.dark.webp`).
- **Chat panel:** `assets/js/chat.js`. It answers from a list of topics in the file and runs in the
  browser; nothing is sent to a server.
- **Link previews:** each page's `<head>` has `og:` tags (title, description, image) used by LinkedIn,
  KakaoTalk and messengers; the 1200×630 preview images are in `assets/img/og/`.
- **Styles:** the EasyFolio template (`assets/css/main.css`) plus the site's own rules in
  `assets/css/style.css`.

## Preview on your computer

```
python _serve.py
```

Then open http://localhost:8000. Addresses without `.html` work as on GitHub Pages, and missing pages
show `404.html`. Press Ctrl+C to stop.

## Publish

Push to `main`; GitHub Pages publishes the site within a minute or two.

## Credits

Template: [EasyFolio](https://bootstrapmade.com/easyfolio-bootstrap-portfolio-template/) by BootstrapMade
([license](https://bootstrapmade.com/license/)).

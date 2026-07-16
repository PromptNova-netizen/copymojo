# My Portfolio Website

A simple, dependency-free personal portfolio website built with plain HTML, CSS,
and JavaScript — no build tools, no `npm install` needed.

## File Structure

```
index.html      All page content and structure
css/style.css   All styling (colors, layout, responsiveness)
js/main.js      Mobile menu, active-link highlight, scroll animations, back-to-top
```

## How To Run Locally

Just open `index.html` in your browser — double-click the file, or drag it
into a browser tab. That's it, no server or build step required.

## What You Need To Edit

Search `index.html` for the word `TODO` — every placeholder that needs your
real information is marked with a `<!-- TODO: ... -->` comment. In short:

- **Page title & hero** — your name, university, course, and a short intro
- **About section** — your bio, avatar initials, CGPA, year of study, location
- **Skills section** — add/remove skills so the list matches what you actually know
- **Projects section** — replace the 3 example project cards with your real
  projects (copy a `<article class="project-card">` block to add more)
- **Education section** — your real school/university history
- **Contact section & social links** — replace every `href="#"` with your real
  GitHub/LinkedIn URLs, and replace `your.email@example.com` with your real email
  (it appears in 3 places: hero, contact form, footer)

## Changing Colors

Open `css/style.css` and edit the `--accent` and `--accent-dark` values near
the top of the file (under `:root`). The whole site's accent color updates
from that one place.

## Deploying (GitHub Pages)

This repo already has a `CNAME` file pointing to `copymojo.my` — that domain
was set up for a different, unrelated project. If you want this portfolio to
live at that domain, keep the `CNAME` as is. Otherwise, either replace its
contents with your own domain, or delete the file to use the free
`your-username.github.io/copymojo` address instead.

To enable GitHub Pages:
1. Push your changes to GitHub.
2. Go to the repo's **Settings → Pages**.
3. Under "Build and deployment", set the source branch (e.g. `main`) and
   folder to `/ (root)`.
4. Save — your site will be live at the URL GitHub shows you within a minute
   or two.

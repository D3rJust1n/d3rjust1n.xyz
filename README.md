[![Netlify Status](https://api.netlify.com/api/v1/badges/5a7f54ca-6d7d-4a59-a469-7c01ffffc0e8/deploy-status)](https://app.netlify.com/projects/d3rjust1n/deploys)

# [d3rjust1n.xyz](https://d3rjust1n.xyz/)

My blog website built with Astro 7.

## Tech Stack

- **Framework**: Astro
- **Icons**: simple-icons, astro-icon (lucide)
- **Collections**: Astro content collections
- **Integrations**: sitemap, mdx, keystatic

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
|:-----------------------|:-------------------------------------------------|
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `127.0.0.1:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Project Structure

```text
src/
├── components/         # UI components
│   └──filter/          # Custom filter for some blog posts
├── content/            # Content Collections
├── data/               # data for recommendations
├── images/             # images for blog posts
├── layouts/            # Base layouts
├── pages/              # File-based routing
├── styles/             # Global styles
└── utils/              # Some utils for posts
```

## Credits

Thanks to larry-xue for his [Astro Zen Blog Template](https://github.com/larry-xue/astro-zen-blog)  
This blog is based on the Astro Zen Blog Template, with a few customizations and additional features for my use case.

Also thanks to Jojodicus for his portfolio [dittrich.pro](https://github.com/Jojodicus/dittrich.pro/)  
The “Admonition” component in `src/components` and the ToC feature come from his repo.

## 🤖 AI-Assisted Development

This project builds on the base template (see Credits above).
The custom filter components in `src/components/filter/` were created using AI tools (Claude),
while I implemented other customizations and features myself.  
A few adjustments were made to the Table of Content feature using AI as well.
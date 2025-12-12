# Modern Portfolio Template

A modern, responsive portfolio website built with Astro, React, and TailwindCSS.

## 🚀 Features

- ⚡️ Lightning fast performance with Astro
- 🎨 Beautiful UI with TailwindCSS
- 🌙 Dark mode support
- 📱 Fully responsive design
- 🔍 SEO optimized
- 📊 Portfolio showcase
- 💼 Services section
- 📝 Skills & Experience
- 📬 Contact form

## 🛠️ Tech Stack

- [Astro](https://astro.build)
- [React](https://reactjs.org)
- [TailwindCSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [PhotoSwipe](https://photoswipe.com)

## 📁 Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── components/  # UI components
│   ├── content/     # Portfolio content (MD files)
│   ├── data/        # JSON data files
│   ├── layouts/     # Page layouts
│   ├── pages/       # Route pages
│   ├── styles/      # Global styles
│   ├── types/       # TypeScript types
│   └── utils/       # Utility functions
└── package.json
```

## 🎯 Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 📝 Content Management

All content is managed through:

- `src/data/portfolio.json` - Main data file
- `src/content/portfolio/` - Portfolio case studies (Markdown)

## 🎨 Customization

1. Colors: Edit `tailwind.config.mjs`
2. Typography: Update fonts in `Layout.astro`
3. Content: Modify `portfolio.json`

## 📄 Page Structure

- `/` - Homepage
- `/portfolio` - Work showcase
- `/skills` - Skills & expertise
- `/services` - Services offered
- `/about` - About information
- `/contact` - Contact form
- `/styleguide` - Component library (hidden)

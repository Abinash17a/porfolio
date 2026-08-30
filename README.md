# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

```
portfolio
├─ 📁public
│  ├─ 📁icons
│  │  ├─ 📄pixel-character-1.svg
│  │  ├─ 📄pixel-character-2.svg
│  │  ├─ 📄pixel-character-3.svg
│  │  ├─ 📄pixel-database.svg
│  │  ├─ 📄pixel-figma.svg
│  │  ├─ 📄pixel-github.svg
│  │  ├─ 📄pixel-javascript.svg
│  │  ├─ 📄pixel-next.svg
│  │  ├─ 📄pixel-node.svg
│  │  ├─ 📄pixel-react.svg
│  │  ├─ 📄pixel-tailwind.svg
│  │  ├─ 📄pixel-typescript.svg
│  │  └─ 📄pixel-vercel.svg
│  ├─ 📁images
│  │  ├─ 📄japanbg.gif
│  │  ├─ 📄pcbackground.png
│  │  ├─ 📄pixel-coder.png
│  │  ├─ 📄pixel-coderm.png
│  │  └─ 📄pixel-coders.png
│  ├─ 📁sounds
│  │  ├─ 📄click.wav
│  │  ├─ 📄japanese-ambient.mp3
│  │  └─ 📄README.md
│  └─ 📄vite.svg
├─ 📁src
│  ├─ 📁assets
│  │  ├─ 📄dev.png
│  │  └─ 📄react.svg
│  ├─ 📁components
│  │  ├─ 📁ui
│  │  │  ├─ 📄button.tsx
│  │  │  ├─ 📄card-stack.tsx
│  │  │  ├─ 📄input.tsx
│  │  │  ├─ 📄label.tsx
│  │  │  ├─ 📄projectcard.tsx
│  │  │  └─ 📄textarea.tsx
│  │  ├─ 📄AboutSection.tsx
│  │  ├─ 📄BackgroundMusic.tsx
│  │  ├─ 📄ContactSection.tsx
│  │  ├─ 📄HeroSection.tsx
│  │  ├─ 📄Navbar.tsx
│  │  ├─ 📄PixelLoader.tsx
│  │  └─ 📄ProjectSection.tsx
│  ├─ 📁data
│  │  └─ 📄projects.ts
│  ├─ 📁hooks
│  │  └─ 📄useScrollProgress.ts
│  ├─ 📁lib
│  │  └─ 📄utils.ts
│  ├─ 📁utils
│  │  └─ 📄contact.ts
│  ├─ 📄App.css
│  ├─ 📄App.tsx
│  ├─ 📄index.css
│  ├─ 📄main.tsx
│  └─ 📄vite-env.d.ts
├─ 📄.env
├─ 📄.gitignore
├─ 📄components.json
├─ 📄eslint.config.js
├─ 📄index.html
├─ 📄package-lock.json
├─ 📄package.json
├─ 📄postcss.config.js
├─ 📄README.md
├─ 📄tailwind.config.js
├─ 📄tsconfig.app.json
├─ 📄tsconfig.json
├─ 📄tsconfig.node.json
└─ 📄vite.config.ts
```
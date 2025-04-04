import Link from 'next/link';

# Next.js 15 Internationalization with next-intl 🌍

This is a **Next.js 15** project implementing internationalization using [`next-intl`](https://next-intl.vercel.app/).

## Getting Started

First, install dependencies:

```bash
npm install next-intl
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the localized content.

## Features

- **Dynamic locale routing** with Next.js 15 App Router
- **Server-side and client-side translations**
- **Optimized performance for multilingual applications**
- **Easy translation management**

## Project Structure

```plaintext
📂 src
 ┣ 📂 app
 ┃ ┣ 📂 [locale] (Dynamic locale folder)
 ┃ ┃ ┣ 📂 about
 ┃ ┃ ┣ 📂 other
 ┃ ┃ ┣ 📂 support
 ┃ ┃ ┣ 📜 page.js (Localized home page)
 ┃ ┃ ┗ 📜 layout.js (Locale-aware layout)
 ┃ ┃ ┗ 📜 globals.css (Global styles)
 ┃ ┗ 📜 favicon.ico
 ┣ 📂 components
 ┃ ┣ 📜 Button.jsx
 ┃ ┣ 📜 Footer.jsx
 ┃ ┣ 📜 Header.jsx
 ┃ ┣ 📜 LangSwitcher.jsx (Language switcher)
 ┃ ┣ 📜 ThemeProvider.jsx
 ┃ ┗ 📜 ThemeSwitch.jsx
 ┣ 📂 i18n
 ┃ ┣ 📜 navigation.js
 ┃ ┣ 📜 request.js
 ┃ ┗ 📜 routing.js
 ┣ 📂 icons
 ┃ ┣ 📜 github.jsx
 ┃ ┗ 📜 logo.jsx
 ┣ 📂 lib
 ┃ ┗ 📜 utils.js
 ┣ 📂 messages (Translation files)
 ┃ ┣ 📜 ar.json
 ┃ ┣ 📜 de.json
 ┃ ┣ 📜 en.json
 ┃ ┣ 📜 es.json
 ┃ ┣ 📜 fa.json
 ┃ ┣ 📜 fr.json
 ┃ ┣ 📜 ja.json
 ┃ ┗ 📜 ru.json
 ┣ 📜 middleware.js (Handles locale detection)
```

## Learn More

To learn more about internationalization in Next.js 15, check out these resources:

- [next-intl Documentation](https://next-intl.vercel.app/) - Official documentation.
- [Next.js Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization) - Next.js i18n routing.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

🚀 Happy coding with **next-intl** and **Next.js 15**!
# Confetti-App

A React-based interactive app showcasing confetti effects, background animations, and scroll-triggered events.

## Setup

1. Clone the repository.
2. Install dependencies and start the development server:

```bash
git clone git@github.com:YOUR_USERNAME/confetti-app.git
cd confetti-app
nvm use
npm install
npm run dev
```

## Features

- Confetti Launcher: Launch confetti with adjustable quantity.
- Background Animation: Interactive confetti effects following mouse movements and clicks.
- Scroll Animation: Trigger confetti on scrolling and hovering.
- Confetti Gallery: Explore different confetti styles by interacting with the gallery.

## Tech Stack

- Vite (Development environment and build tool)
- React (Functional Components)
- TypeScript (Type-safe development)
- CSS Modules (Modular CSS for styling)
- React Router (Client-side routing for navigation)
- ESLint (Code linting)
- Prettier (Code formatting)
- Ant Design (UI components and theming)

## Project Structure

```bash
ConfettiApp/
│
├── src/
│   ├── theme.ts
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.css
│   │   ├── ConfettiLauncher/
│   │   │   ├── ConfettiLauncher.tsx
│   │   │   └── ConfettiLauncher.module.css
│   │   ├── BackgroundAnimation/
│   │   │   ├── BackgroundAnimation.tsx
│   │   │   └── BackgroundAnimation.module.css
│   │   ├── ScrollAnimation/
│   │   │   ├── ScrollAnimation.tsx
│   │   │   └── ScrollAnimation.module.css
│   │   └── ConfettiGallery/
│   │       ├── ConfettiGallery.tsx
│   │       └── ConfettiGallery.module.css
│   │   ├── ConfettiEffects/
│   │   │   ├── SnowConfetti.tsx
│   │   │   ├── CherryBlossomConfetti.tsx
│   │   │   ├── FreshLeavesConfetti.tsx
│   │   │   ├── FireworksConfetti.tsx
│   │   │   ├── FallConfetti.tsx
│   │   │   └── ChristmasStarsConfetti.tsx
│   │
│   ├── pages/
│   │   ├── ConfettiLauncherPage.tsx
│   │   ├── BackgroundAnimationPage.tsx
│   │   ├── ScrollAnimationPage.tsx
│   │   └── ConfettiGalleryPage.tsx
│   │
│   ├── data/
│   │   ├── confettiOptions.ts
│   │   ├── galleryImages.ts
│   │   ├── backgroundColors.ts
│   │
│   ├── utils/
│   │   └── confettiOptions.ts
│   │
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── package.json
└── tsconfig.json
```

## Development History

- Initial Setup
- Page & Routing Implementation
  - Confetti Launcher
  - Background Animation
  - Scroll Animation
  - Confetti Gallery
- UI and Theme Customization
- GitHub Pages Deployment

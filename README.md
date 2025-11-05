# Modern Portfolio Website

A stunning, interactive portfolio website built with cutting-edge web technologies including Next.js, Three.js, and GSAP animations.

## Features

- **3D Interactive Background**: Scroll-based particle field and animated wireframe sphere using Three.js
- **Smooth Scrolling**: Butter-smooth scroll experience powered by Lenis
- **Advanced Animations**: GSAP ScrollTrigger animations throughout all sections
- **Dark Mode Design**: Modern dark-themed UI with neon gradient accents
- **Fully Responsive**: Optimized for all device sizes
- **Performance Optimized**: Code splitting, dynamic imports, and optimized rendering

## Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
- **Animations**: [GSAP](https://greensock.com/gsap/) with ScrollTrigger
- **Smooth Scroll**: [Lenis](https://github.com/studio-freight/lenis)
- **Additional**: [Framer Motion](https://www.framer.com/motion/)

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with global providers
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles and CSS variables
├── components/
│   ├── 3d/
│   │   └── Scene.tsx    # Three.js 3D scene with particles
│   ├── sections/
│   │   ├── Hero.tsx     # Hero section with gradient text
│   │   ├── About.tsx    # About section with skills
│   │   ├── Projects.tsx # Project gallery with cards
│   │   └── Contact.tsx  # Contact form section
│   └── ui/
│       ├── Navbar.tsx   # Sticky navigation bar
│       ├── Footer.tsx   # Footer component
│       └── SmoothScroll.tsx # Lenis scroll integration
├── lib/                 # Utility functions
└── types/               # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
# From GitHub (recommended)
git clone git@github.com:babaoflamp/company_website.git
cd company_website

# Or from GitLab
git clone git@gitlab.com:babaoflamp/company_website.git
cd company_website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run Playwright E2E tests
- `npm run test:headed` - Run tests with browser UI
- `npm run test:ui` - Run tests in interactive UI mode
- `npm run test:report` - View test report

## Customization

### Colors

Edit CSS variables in `app/globals.css`:
```css
:root {
  --accent-primary: #00ffff;    /* Cyan */
  --accent-secondary: #ff00ff;  /* Magenta */
  --accent-tertiary: #00ff88;   /* Emerald */
}
```

### Content

- **Hero Section**: Edit `components/sections/Hero.tsx`
- **About Section**: Update skills and description in `components/sections/About.tsx`
- **Projects**: Modify project data in `components/sections/Projects.tsx`
- **Contact**: Update contact info in `components/sections/Contact.tsx`

### 3D Scene

Customize the 3D background in `components/3d/Scene.tsx`:
- Adjust particle count, colors, and behavior
- Modify sphere geometry and materials
- Change scroll-based animation timing

## Performance Optimization

- Dynamic imports for Three.js components (client-side only)
- GSAP ScrollTrigger for efficient scroll animations
- Optimized particle count for smooth 60fps rendering
- Next.js automatic code splitting
- Image optimization with next/image

## Testing

This project uses **Playwright** for E2E testing.

### Running Tests

```bash
# Run all tests in headless mode
npm test

# Run tests with visible browser
npm run test:headed

# Run tests in interactive UI mode
npm run test:ui

# View test report
npm run test:report
```

### Test Coverage

- Homepage rendering and navigation
- Section scrolling functionality
- Mobile responsive menu
- Contact form interaction
- Project gallery display

### Playwright MCP Setup

For advanced browser automation with Claude, see [Playwright MCP Setup Guide](./.claude/playwright-mcp-setup.md).

## Git Workflow

This project uses **dual remotes** (GitHub and GitLab) for redundancy.

### Current Remotes
- **github**: `git@github.com:babaoflamp/company_website.git` (primary)
- **origin**: `git@gitlab.com:babaoflamp/company_website.git` (backup)

### Pushing Changes

```bash
# Push to both remotes
git push github main  # Push to GitHub
git push origin main  # Push to GitLab

# Or push to both at once
git push github main && git push origin main
```

### Setting Default Remote

To make GitHub the default for `git push`:
```bash
git push -u github main
```

## Deployment

### Vercel (Recommended)

1. Push to your Git repository
2. Import project on [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## License

MIT License - Feel free to use this for your own portfolio!

## Credits

Built with passion using modern web technologies.

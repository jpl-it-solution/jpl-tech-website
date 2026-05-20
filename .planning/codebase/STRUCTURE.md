# Project Structure

The codebase directory is organized as follows:

```
jpl-tech-website/
├── .planning/                  # Project planning and memory folder
│   └── codebase/               # Codebase mapping documents
├── public/                     # Public assets
│   ├── favicon.ico             # Page favicon
│   └── images/                 # Logo, backgrounds, icons, robot graphics
├── src/
│   ├── app/                    # Next.js App Router folders
│   │   ├── about-us/           # About Us page
│   │   ├── blog/               # Blogs / News
│   │   ├── careers/            # Careers page
│   │   ├── contact-us/         # Contact Us page
│   │   ├── portfolio/          # Portfolio showcase
│   │   ├── products/           # Featured products/solutions
│   │   ├── services/           # Services catalog
│   │   ├── technology/         # Technology Stack page
│   │   ├── globals.css         # TailwindCSS styles and custom transitions
│   │   ├── layout.tsx          # Main layout wrapper
│   │   └── page.tsx            # Main Home page
│   ├── components/
│   │   ├── AOSInitializer.tsx  # AOS (Animate on Scroll) wrapper
│   │   ├── layout/             # Shared layout parts (Header.tsx, Footer.tsx)
│   │   ├── sections/           # Focus sections (home/, about/)
│   │   └── ui/                 # Reusable UI controls (Button.tsx, Card.tsx)
│   ├── lib/                    # Helper scripts/utilities
│   └── types/                  # TypeScript interface definitions
├── package.json                # Project dependencies
├── next.config.ts              # Next.js build-time configurations
├── tailwind.config.js          # Tailwind CSS customizations
└── tsconfig.json               # TypeScript configurations
```

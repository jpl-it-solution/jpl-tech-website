# Architecture

The application follows the standard Next.js App Router design pattern, using server pre-rendering for all pages during static export.

## Key Architectural Patterns

1. **Static HTML Export (SSG)**: 
   - Every page is a folder with a `page.tsx` file inside `src/app/`.
   - Built statically (`output: 'export'`) to produce clean `.html` structures, optimizing the site for cPanel file serving and SEO.

2. **Component Separation**:
   - **Pages**: Houses the routing logic under `src/app`. Most pages contain wrappers or imports to section-based components.
   - **Components**: Separated into `ui/` (atomic UI elements like buttons and page transitions), `layout/` (structural parts like header/footer), and `sections/` (modular sections making up individual pages, e.g., HeroSection, AboutSection).

3. **Page Transition Mechanism**:
   - Custom transitions defined in `src/components/ui/PageTransition.tsx`.
   - Content is initially hidden under `<div id="content-wrapper">` with styling, then faded in once loading and animations complete.

4. **Styling & Assets**:
   - Styled primarily with Tailwind CSS v4 using imports.
   - Public assets such as images and icons are placed in the `/public` directory or under `/public/images/`.

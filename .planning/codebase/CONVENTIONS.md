# Coding Conventions

To maintain codebase cleanlines and readability, the following coding guidelines are enforced:

## TypeScript & React

- **Strict Type Checking**: Enabled in `tsconfig.json`. Explicit types are preferred over `any`.
- **Component Style**: Functional components with arrow function syntax are standard.
- **Client Components**: Mark interactive client-side components with `'use client';` at the top of the file.
- **Imports**: Clean absolute imports using alias paths (e.g. `@/components/layout/Header` instead of `../../components/layout/Header`).

## Styling (TailwindCSS v4)

- **Utility Classes**: Use tailwind v4 utility classes.
- **Custom Themes**: Custom colors, custom fonts, animations are defined inside `@theme` in `src/app/globals.css`.
- **Animations**: AOS is used for page scroll entrance effects. Native CSS keyframes in `globals.css` are used for key animations like loading bars, fade-downs, and float.

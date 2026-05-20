# Testing Practices

Currently, the project does not have automated unit or integration tests configured. 

## Linting & Validation

- **ESLint**: Standard Next.js ESLint configuration. Runs via `npm run lint`.
- **TypeScript Compiler**: Build-time compilation checks are executed via standard Next.js building rules. Currently, typescript check is bypassed in builds (`ignoreBuildErrors: true` in `next.config.ts`), which must be resolved to ensure code-level safety before static exports.

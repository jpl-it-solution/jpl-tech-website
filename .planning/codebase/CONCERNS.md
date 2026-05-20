# Architectural Concerns & Technical Debt

Several critical concerns must be addressed in this milestone:

## 1. cPanel Deployment Issue (Critical)

- **Problem**: Next.js applications traditionally require a Node.js server. Shared hosting cPanel systems do not support persistent Node.js servers well (often hitting memory, CPU, or passenger limits).
- **Current Setup**: The Next.js configuration is set to `output: 'export'`, which is the correct solution because it creates a standard static web site (`out/` folder) containing static HTML/CSS/JS.
- **Immediate Debt**: `basePath` and `assetPrefix` are set to `/jpl-tech-website`. While this works for subpath deployments (like GitHub Pages), it **breaks completely** when uploaded to the root of a cPanel domain (e.g. `domain.com`), leading to 404 resource-loading errors. We must disable or parameterize these prefixes so that they can be exported relative to the root (`/`) for cPanel.

## 2. Placeholder Content

- **Problem**: Current pages are populated with dummy text (e.g., "Leo scelerisque dolor non ut dignissim...") and placeholder sections.
- **Resolution**: Replace all template copy with the official information and corporate structures provided in `Jaitrrm private limited website content.md`.

## 3. UI Design Quality

- **Problem**: The styling is somewhat basic in some folders, using standard color palettes.
- **Resolution**: Inject a premium, rich design system using modern aesthetics (harmonious dark themes, vivid CSS gradients, glassmorphism, responsive tables for our technology matrix, sleek interactive cards, and high-fidelity project listings).

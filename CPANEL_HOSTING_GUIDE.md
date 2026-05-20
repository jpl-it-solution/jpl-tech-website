# cPanel Hosting Guide for JPL Tech Next.js Site

## Overview
This guide walks you through deploying the **JPL Tech** Next.js website to a **cPanel** shared‑hosting environment as a completely **static site** (no Node.js server required). The steps cover:
1. Preparing a static export of the Next.js app.
2. Configuring the project for root‑relative paths.
3. Packaging the build output.
4. Uploading to cPanel via **File Manager** or **FTP**.
5. Setting up rewrite rules for client‑side routing.
6. Verifying the deployment.

---

## Prerequisites
- Access to the cPanel dashboard for your hosting account.
- Ability to upload files (via **File Manager** or an **FTP client** like FileZilla).
- Domain (or sub‑domain) pointed to the `public_html` directory.
- Local development environment with **Node.js** (v18+ recommended) and the project cloned.

---

## 1️⃣ Prepare the Next.js Project for Static Export
### a. Ensure `output: 'export'` in `next.config.ts`
```ts
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // static HTML export
  // The basePath and assetPrefix are made conditional (see implementation plan)
  basePath: process.env.GH_PAGES ? '/jpl-tech-website' : '',
  assetPrefix: process.env.GH_PAGES ? '/jpl-tech-website/' : '',
  // other config …
};

export default nextConfig;
```
### b. Install dependencies (if not already installed)
```bash
npm ci   # or npm install
```
---

## 2️⃣ Build the Static Site
Run the build command which will generate an `out/` folder containing pure HTML, CSS, and JS.
```bash
npm run build   # uses next build + next export under the hood
```
If the build succeeds you will see:
```
✔ Export successful
Exported files can be found in out/
```
### Verify the `out/` folder
- Contains `index.html` and a folder for each route (e.g., `about-us/index.html`).
- All assets (images, CSS, JS) are referenced with **relative** paths because `basePath` is empty for cPanel.
---

## 3️⃣ Package the Build Output
Compress the `out/` directory into a zip file for easy upload.
```bash
cd out && zip -r ../jpl-website-static.zip .
cd ..
```
You now have `jpl-website-static.zip` in the project root.
---

## 4️⃣ Upload to cPanel
### Option A – File Manager (GUI)
1. Log in to cPanel → **File Manager**.
2. Navigate to `public_html` (or the desired sub‑folder for a sub‑domain).
3. Click **Upload**, select `jpl-website-static.zip`.
4. Once uploaded, select the zip file → **Extract** → confirm extraction.
5. Delete the zip file after extraction (optional).
### Option B – FTP (FileZilla)
1. Open FileZilla, connect using your FTP credentials.
2. On the **Remote site** pane, open `public_html`.
3. Drag‑and‑drop the `jpl-website-static.zip` file.
4. Right‑click → **Extract** (or extract locally then upload the extracted contents).
---

## 5️⃣ Configure Rewrite Rules for SPA Routing
Next.js static export creates an `index.html` per route, but if you have **dynamic client‑side routes** (e.g., `/services/advanced`) you may need a fallback to `index.html`.
Create (or edit) an `.htaccess` file inside `public_html` with the following content:
```apacheconf
# BEGIN cPanel-generated _cgi-bin redirect
# (Leave this block untouched if present)
# END cPanel-generated _cgi-bin redirect

# --- SPA fallback for Next.js static export ---
RewriteEngine On
RewriteBase /   # adjust if you deployed to a sub‑folder, e.g., /myapp/

# If the request is for an existing file or directory, serve it
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

# Otherwise, rewrite to the appropriate HTML file
# Example: /about-us → /about-us/index.html
RewriteRule ^(.*)/?$ $1/index.html [L]
```
> **Note**: If you deployed the site under a sub‑folder (e.g., `public_html/jpl`), change `RewriteBase /` to `RewriteBase /jpl/` and adjust the rewrite rule accordingly.
---

## 6️⃣ Verify the Deployment
1. Visit your domain (e.g., `https://yourdomain.com`).
2. Navigate through all pages—Home, About, Services, Portfolio, etc.
3. Open the browser console and ensure there are **no 404** errors for assets.
4. Test deep links directly (e.g., `https://yourdomain.com/services`) to confirm the `.htaccess` fallback works.
---

## 7️⃣ Optional – Enable HTTPS (Let’s Encrypt)
Most cPanel providers offer **AutoSSL** or **Let’s Encrypt** integration:
1. In cPanel, go to **SSL/TLS** → **Manage SSL Sites**.
2. Locate your domain and click **Run AutoSSL**.
3. After issuance, verify the lock icon appears in the browser.
---

## 8️⃣ Common Pitfalls & Fixes
| Issue | Cause | Fix |
|-------|-------|-----|
| Assets load from `/jpl-tech-website/...` and break. | `basePath`/`assetPrefix` not cleared for cPanel. | Ensure `process.env.GH_PAGES` is **unset** (or set to `false`) when building for cPanel. |
| 404 on deep routes (e.g., `/services`). | Missing `.htaccess` fallback. | Add the rewrite rules shown above. |
| Large images load slowly. | Images not optimized. | Use Next.js `next/image` with `priority`/`loading="lazy"` and consider compressing assets before upload. |
| Build fails with TypeScript errors. | Out‑of‑date dependencies. | Run `npm ci` and ensure you’re on Node 18+. |
---

## 9️⃣ Summary Checklist
- [ ] `next.config.ts` uses conditional `basePath`/`assetPrefix`.
- [ ] `npm run build` completes without errors.
- [ ] `out/` folder zipped and uploaded to `public_html`.
- [ ] `.htaccess` with SPA fallback added.
- [ ] HTTPS enabled (optional but recommended).
- [ ] All pages verified live.

---

### 🎉 You’re Done!
Your JPL Tech Next.js site is now live on cPanel, serving fast static files with full SEO benefits and premium UI styling.

---

*Generated by Antigravity – your AI coding assistant*

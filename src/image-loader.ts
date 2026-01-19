'use client';

export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
    // If the image is a remote URL, return it as is
    if (src.startsWith('http') || src.startsWith('https')) {
        return src;
    }

    // Explicitly prepend the base path
    // Remove any existing leading slash to avoid double slashes if using path.join, but simple concatenation is fine with check
    const basePath = '/jpl-tech-website';

    // Ensure we don't double-prefix if it's already there (defensive)
    if (src.startsWith(basePath)) {
        return src;
    }

    // Ensure src starts with /
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`;

    // Append width and quality to allow Next.js to perceive this as "implementing width"
    // even if the static host ignores it.
    return `${basePath}${normalizedSrc}?w=${width}&q=${quality || 75}`;
}

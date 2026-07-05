// Generates a branded 1200x630 Open Graph image (public/og.png) from an
// inline SVG. Run with `npm run gen:og`. No external assets or fonts are
// fetched: only system-safe serif/sans families are referenced.
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '../public/og.png');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b1220"/>
      <stop offset="1" stop-color="#0b3d91"/>
    </linearGradient>
    <linearGradient id="chip" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1f6feb"/>
      <stop offset="1" stop-color="#0b3d91"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="80" y="70" width="96" height="96" rx="22" fill="url(#chip)"/>
  <text x="128" y="137" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="46" font-weight="700" fill="#ffffff" letter-spacing="-1">YG</text>
  <text x="200" y="140" font-family="Georgia, 'Times New Roman', serif" font-size="40" fill="#e8eefc">Yoann Gini</text>
  <text x="80" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="76" font-weight="700" fill="#ffffff">Conseil en informatique</text>
  <text x="80" y="380" font-family="Georgia, 'Times New Roman', serif" font-size="76" font-weight="700" fill="#8ab4ff">Expert Apple &amp; securite</text>
  <text x="80" y="470" font-family="-apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="30" fill="#b9c6df">macOS / iOS &#183; MDM &amp; IDP &#183; annuaires &#183; securite</text>
  <text x="80" y="560" font-family="-apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif" font-size="26" fill="#7f90ad">yoann.gini.me &#183; Instructeur ULM multiaxe</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);

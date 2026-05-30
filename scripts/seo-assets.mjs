// Generates SEO/brand assets from the Inkqova iQ mark:
//   app/icon.png        512x512  (Next file-convention favicon source)
//   app/apple-icon.png  180x180  (iOS home-screen)
//   app/favicon.ico      32x32   (PNG wrapped in an ICO container)
//   public/og.png      1200x630  (Open Graph / Twitter card)
//
// Run: node scripts/seo-assets.mjs
import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const R = (p) => resolve(root, p);

const MARK = R("public/logo-mark.png"); // rounded black tile w/ iQ + bolt
const INK = "#0B0B0D";
const GOLD = "#F5A623";

// ---- icon / apple-icon: the mark, trimmed and padded on a rounded tile ----
async function icon(size, out) {
  // The mark already IS a rounded dark tile — just resize it onto a transparent canvas.
  const img = await sharp(MARK)
    .resize(size, size, { fit: "cover" })
    .png()
    .toBuffer();
  return sharp(img).toFile(R(out));
}

// ---- favicon.ico: 32x32 PNG embedded in a single-image ICO container ----
async function favicon() {
  const png = await sharp(MARK)
    .resize(32, 32, { fit: "cover" })
    .png()
    .toBuffer();

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = icon
  header.writeUInt16LE(1, 4); // image count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0); // width
  entry.writeUInt8(32, 1); // height
  entry.writeUInt8(0, 2); // palette colors
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png.length, 8); // size of PNG data
  entry.writeUInt32LE(22, 12); // offset (6 header + 16 entry)

  writeFileSync(R("app/favicon.ico"), Buffer.concat([header, entry, png]));
}

// ---- og.png: 1200x630 branded social card ----
async function og() {
  const W = 1200;
  const H = 630;
  const svg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
       <defs>
         <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
           <stop offset="0%" stop-color="#141417"/>
           <stop offset="100%" stop-color="${INK}"/>
         </linearGradient>
         <radialGradient id="glow" cx="80%" cy="28%" r="60%">
           <stop offset="0%" stop-color="rgba(245,166,35,0.38)"/>
           <stop offset="100%" stop-color="rgba(245,166,35,0)"/>
         </radialGradient>
       </defs>
       <rect width="${W}" height="${H}" fill="url(#bg)"/>
       <rect width="${W}" height="${H}" fill="url(#glow)"/>
       <rect x="0" y="0" width="${W}" height="6" fill="${GOLD}"/>
       <g font-family="Segoe UI, Arial, sans-serif">
         <text x="90" y="170" fill="${GOLD}" font-size="25" font-weight="700"
               letter-spacing="5">CUSTOM PRINTING &#183; CORPORATE GIFTING</text>
         <text x="86" y="320" fill="#ffffff" font-size="104" font-weight="800"
               letter-spacing="-2">Ink Your Brand.</text>
         <text x="90" y="400" fill="#cfcad0" font-size="34" font-weight="500">
               T-shirts &#183; Mugs &#183; Diaries &#183; Pens &#183; Gifting</text>
         <text x="90" y="560" fill="${GOLD}" font-size="28" font-weight="600"
               letter-spacing="2">inkqova.in</text>
       </g>
     </svg>`
  );
  const mark = await sharp(MARK).resize(250, 250, { fit: "contain" }).toBuffer();
  await sharp(svg)
    .composite([{ input: mark, top: 60, left: 910 }])
    .png()
    .toFile(R("public/og.png"));
}

await icon(512, "app/icon.png");
await icon(180, "app/apple-icon.png");
await favicon();
await og();
console.log("wrote app/icon.png, app/apple-icon.png, app/favicon.ico, public/og.png");

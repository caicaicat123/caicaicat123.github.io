/**
 * 生成社交分享图 public/og-default.png（1200×630）。
 *
 * 本机没有 Python / ImageMagick，因此用纯 Node（zlib + 手写 PNG 编码）
 * 生成位图：松烟底 + 像素网格 + 品牌四色方块 + 点阵文字。
 *
 * 配色与站点「墨 · 国风」设计系统保持一致（朱砂 / 缃色 / 竹青 / 墨），
 * 改色时同步 lib 里 public/icon.png 与 global.css 的令牌。
 *
 * 用法： node scripts/generate-og.mjs
 */
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const WIDTH = 1200;
const HEIGHT = 630;

/* 松烟底 + 国风四色。深色底上的「墨」用淡墨，否则和背景糊成一片。 */
const BG = [0x14, 0x12, 0x0f]; // 松烟
const CINNABAR = [0xb9, 0x3a, 0x32]; // 朱砂（唯一强调色）
const AMBER = [0x9a, 0x6b, 0x00]; // 缃色
const JADE = [0x4a, 0x7c, 0x59]; // 竹青
const INK = [0x8a, 0x82, 0x74]; // 淡墨（深底可见的「墨」）
const TEXT = [0xf7, 0xf4, 0xed]; // 宣纸
const MUTED = [0x9a, 0x92, 0x83]; // 淡墨（浅）

/** 5×7 点阵字形，仅覆盖本图用到的字符 */
const FONT = {
  N: ['#...#', '#...#', '##..#', '#.#.#', '#..##', '#...#', '#...#'],
  E: ['#####', '#....', '#....', '####.', '#....', '#....', '#####'],
  W: ['#...#', '#...#', '#...#', '#.#.#', '#.#.#', '##.##', '#...#'],
  O: ['.###.', '#...#', '#...#', '#...#', '#...#', '#...#', '.###.'],
  R: ['####.', '#...#', '#...#', '####.', '#.#..', '#..#.', '#...#'],
  L: ['#....', '#....', '#....', '#....', '#....', '#....', '#####'],
  D: ['####.', '#...#', '#...#', '#...#', '#...#', '#...#', '####.'],
  T: ['#####', '..#..', '..#..', '..#..', '..#..', '..#..', '..#..'],
  K: ['#...#', '#..#.', '#.#..', '##...', '#.#..', '#..#.', '#...#'],
  B: ['####.', '#...#', '#...#', '####.', '#...#', '#...#', '####.'],
  S: ['.####', '#....', '#....', '.###.', '....#', '....#', '####.'],
  C: ['.###.', '#...#', '#....', '#....', '#....', '#...#', '.###.'],
  '.': ['.....', '.....', '.....', '.....', '.....', '.##..', '.##..'],
  ' ': ['.....', '.....', '.....', '.....', '.....', '.....', '.....'],
};

const canvas = new Uint8Array(WIDTH * HEIGHT * 3);

function blend(x, y, color, alpha = 1) {
  if (x < 0 || y < 0 || x >= WIDTH || y >= HEIGHT) return;
  const i = (y * WIDTH + x) * 3;
  canvas[i] = Math.round(canvas[i] * (1 - alpha) + color[0] * alpha);
  canvas[i + 1] = Math.round(canvas[i + 1] * (1 - alpha) + color[1] * alpha);
  canvas[i + 2] = Math.round(canvas[i + 2] * (1 - alpha) + color[2] * alpha);
}

function fillRect(x0, y0, w, h, color, alpha = 1) {
  for (let y = y0; y < y0 + h; y += 1) {
    for (let x = x0; x < x0 + w; x += 1) blend(x, y, color, alpha);
  }
}

function radial(cx, cy, radius, color, maxAlpha) {
  for (let y = 0; y < HEIGHT; y += 1) {
    for (let x = 0; x < WIDTH; x += 1) {
      const d = Math.hypot(x - cx, y - cy);
      if (d > radius) continue;
      blend(x, y, color, (1 - d / radius) ** 2 * maxAlpha);
    }
  }
}

function drawText(text, x, y, scale, color, letterSpacing = 1) {
  let cursor = x;
  for (const ch of text.toUpperCase()) {
    const glyph = FONT[ch] ?? FONT[' '];
    glyph.forEach((row, ry) => {
      [...row].forEach((pixel, rx) => {
        if (pixel === '#') {
          fillRect(cursor + rx * scale, y + ry * scale, scale, scale, color);
        }
      });
    });
    cursor += (5 + letterSpacing) * scale;
  }
  return cursor;
}

// 底色
fillRect(0, 0, WIDTH, HEIGHT, BG);

// 光晕
radial(WIDTH - 150, 90, 430, CINNABAR, 0.16);
radial(90, HEIGHT - 40, 380, JADE, 0.14);

// 像素网格
for (let x = 0; x < WIDTH; x += 40) fillRect(x, 0, 1, HEIGHT, [0xff, 0xff, 0xff], 0.04);
for (let y = 0; y < HEIGHT; y += 40) fillRect(0, y, WIDTH, 1, [0xff, 0xff, 0xff], 0.04);

// 品牌方块（与页头 logo 一致的国风四色：朱砂 / 缃色 / 竹青 / 墨）
const blocks = [
  { x: 88, y: 84, color: CINNABAR, alpha: 1 },
  { x: 148, y: 84, color: AMBER, alpha: 1 },
  { x: 88, y: 144, color: JADE, alpha: 1 },
  { x: 148, y: 144, color: INK, alpha: 1 },
];
for (const block of blocks) fillRect(block.x, block.y, 48, 48, block.color, block.alpha);

// 文字
drawText('NEW WORLD NETWORK', 88, 250, 5, MUTED, 1);
drawText('NWN', 84, 320, 30, CINNABAR, 2);
drawText('NWBBS.CN', 88, 560, 5, TEXT, 1);

// ── PNG 编码 ────────────────────────────────────────────────
const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let c = n;
    for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (const byte of buf) c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const body = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([length, body, crc]);
}

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(WIDTH, 0);
ihdr.writeUInt32BE(HEIGHT, 4);
ihdr[8] = 8; // bit depth
ihdr[9] = 2; // color type: truecolor
ihdr[10] = 0;
ihdr[11] = 0;
ihdr[12] = 0;

// 每行前置一个 filter 字节 0（None）
const raw = Buffer.alloc(HEIGHT * (WIDTH * 3 + 1));
for (let y = 0; y < HEIGHT; y += 1) {
  const rowStart = y * (WIDTH * 3 + 1);
  raw[rowStart] = 0;
  Buffer.from(canvas.buffer, y * WIDTH * 3, WIDTH * 3).copy(raw, rowStart + 1);
}

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk('IHDR', ihdr),
  chunk('IDAT', deflateSync(raw, { level: 9 })),
  chunk('IEND', Buffer.alloc(0)),
]);

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const output = resolve(root, 'public/og-default.png');
mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, png);
console.log(`og-default.png 已生成：${WIDTH}×${HEIGHT}，${(png.length / 1024).toFixed(1)} KB`);

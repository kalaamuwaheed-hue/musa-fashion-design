import sharp from "sharp";
const jobs = [
  { src: ".shots/full-m.png", out: ".shots/rev-mobile.jpg", parts: 3, width: 330 },
  { src: ".shots/full-d.png", out: ".shots/rev-desktop.jpg", parts: 2, width: 720 },
];
for (const j of jobs) {
  const meta = await sharp(j.src).metadata();
  const partH = Math.ceil(meta.height / j.parts);
  const tiles = [];
  for (let i = 0; i < j.parts; i++) {
    const top = i * partH;
    const h = Math.min(partH, meta.height - top);
    const buf = await sharp(j.src)
      .extract({ left: 0, top, width: meta.width, height: h })
      .resize({ width: j.width })
      .jpeg({ quality: 62 })
      .toBuffer();
    tiles.push(buf);
  }
  const metas = await Promise.all(tiles.map((t) => sharp(t).metadata()));
  const totalH = metas.reduce((a, m) => a + m.height, 0);
  const composites = [];
  let y = 0;
  for (const t of tiles) {
    composites.push({ input: t, left: 0, top: y });
    y += metas[composites.length - 1].height;
  }
  await sharp({ create: { width: j.width, height: totalH, channels: 3, background: { r: 20, g: 20, b: 20 } } })
    .composite(composites)
    .jpeg({ quality: 62 })
    .toFile(j.out);
  console.log("wrote", j.out, j.width, totalH);
}

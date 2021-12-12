import path from "path";

import TextToSVG from "text-to-svg";
import sharp from "sharp";
import sizeOf from "image-size";

const text2svg = TextToSVG.loadSync("./assets/fonts/NotoSansJP-Bold.otf");

/**
 * テキストをSVG画像にする関数
 * TODO 複数行のテキストに対応。現状は1行のテキストにのみ対応する
 * @param text
 * @returns
 */
async function generateText2SVG(text: string): Promise<Buffer> {
  const options: TextToSVG.GenerationOptions = {
    fontSize: 72,
    anchor: "top",
    attributes: {
      fill: "white",
    },
  };

  const svg = text2svg.getSVG(text, options);

  const svgBuffer = Buffer.from(svg);
  const size = sizeOf(svgBuffer);
  if (size.width && size.width > 1200) {
    return sharp(svgBuffer).resize(1000, null, { fit: "contain" }).toBuffer();
  }
  return Buffer.from(svg);
}

/**
 * OGP用の画像を生成する関数
 * 画像の保存先は`./public/img/ogp/`配下
 * 形式はpng
 * @param title
 * @param fileName
 */
async function generateOGPImage(title: string, fileName: string) {
  const titleSvg = await generateText2SVG(title);

  await sharp(path.resolve("./assets/ogp.jpg"))
    .composite([{ input: Buffer.from(titleSvg) }])
    .resize(1200, 630)
    .toFile(path.resolve(`./public/img/ogp/${fileName}.png`));
}

export { generateOGPImage };

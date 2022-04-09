const { join } = require('path');
const sharp = require('sharp');

const imagesDirectory = join(process.cwd(), 'public');

export default async function blurImage(imagePath) {
  // console.log('blurring image', `${imagesDirectory}${imagePath}`);
  const sharpImg = sharp(`${imagesDirectory}${imagePath}`);
  const meta = await sharpImg.metadata();
  // console.log(meta, sharpImg);
  const placeholderImgWidth = 20;
  const imgAspectRatio = 16 / 9;
  const placeholderImgHeight = Math.round(placeholderImgWidth / imgAspectRatio);
  const imgBase64 = await sharpImg
    .resize(placeholderImgWidth, placeholderImgHeight)
    .toBuffer()
    .then(
      (buffer) =>
        `data:image/${meta.format};base64,${buffer.toString('base64')}`
    );
  // console.log('blurred image', typeof imgBase64);
  return {
    // fileName: path.basename(imagePath),
    // // Strip public prefix, /public is / in Nextjs runtime environment
    // relativePath: path
    //   .relative(process.cwd(), imagePath)
    //   .substring('public'.length),
    // width: meta.width,
    // height: meta.height,
    imgBase64,
  };
}

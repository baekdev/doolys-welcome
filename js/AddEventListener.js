import { drawPreviewImage } from './DrawPreviewImage.js';
import { twoLineText } from './TwoLineText.js';
import { threeLineText } from './ThreeLineText.js';

export const addEventListener = function (background, inputParams, download) {
  const { canvas, bgImage } = background;
  const { twoLine, threeLine } = inputParams;
  const { twoLineInput, twoLineConst } = twoLine ? twoLine : {};
  const { threeLineInput, threeLineConst } = threeLine ? threeLine : {};
  const { downloadButton, filename } = download;

  if (twoLineInput) {
    twoLineInput.addEventListener('keyup', function (e) {
      const items = [];
      items.push(...twoLineText(e.target.value, twoLineConst));
      threeLineInput &&
        items.push(...threeLineText(threeLineInput.value, threeLineConst));

      drawPreviewImage(canvas, bgImage, items);
    });
  }

  if (threeLineInput) {
    threeLineInput.addEventListener('keyup', function (e) {
      const items = [];
      twoLineInput &&
        items.push(...twoLineText(twoLineInput.value, twoLineConst));
      items.push(...threeLineText(e.target.value, threeLineConst));

      drawPreviewImage(canvas, bgImage, items);
    });
  }

  downloadButton.addEventListener('click', function () {
    const href = canvas.toDataURL();
    this.href = href;
    this.download = `${filename}.png`;
  });
};

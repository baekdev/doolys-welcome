export const drawPreviewImage = function (canvaspreview, bgImage, items) {
  const ctx = canvaspreview.getContext('2d');
  ctx.drawImage(bgImage, 0, 0);
  items.forEach((v) => {
    drawTextWithPostion(ctx, v.text, v.pos);
  });
};

const drawTextWithPostion = function (ctx, text, position) {
  ctx.font = "20pt 'Dotum'";
  ctx.lineWidth = 2;
  ctx.fillStyle = '#313131';
  ctx.fillText(text, position.x, position.y);
};

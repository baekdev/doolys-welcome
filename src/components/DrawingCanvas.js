import React, { useRef, useEffect, useState } from 'react';
import './../style/style.scss';
import DownloadImage from './DownloadImage';
import { twoLineText } from './TwoLineText';
import { threeLineText } from './ThreeLineText';
import bg_1 from '../images/bg_1.png';
import bg_2 from '../images/bg_2.png';
import bg_5 from '../images/bg_5.png';
import bg_4 from '../images/bg_4.png';

const DrawingCanvas = (props) => {

  const { source, presets } = props.actor;
  const { msgStranger, msgDooly } = props.messages;

  const isExistTwoLineConst = presets.twoLineConst !== undefined;
  const isExistThreeLineConst = presets.threeLineConst !== undefined;

  const [imageData, setImageData] = useState(null);

  const canvasRef = useRef();

  useEffect( () => {
    initCanvas();
  });

  const drawPreviewImage = (canvas, bgImage, items) => {
    const ctx = canvas.getContext('2d');
    ctx.drawImage(bgImage, 0, 0);
    items.forEach((v) => {
      drawTextWithPostion(ctx, v.text, v.pos);
    });
    setImageData(canvas.toDataURL('image/png'));
  };

  const drawTextWithPostion = (ctx, text, position) => {
    ctx.font = "20pt 'Dotum'";
    ctx.lineWidth = 2;
    ctx.fillStyle = '#313131';
    ctx.fillText(text, position.x, position.y);
  };

  const initCanvas = () => {
    const canvas = canvasRef.current;

    const items = [];
    isExistTwoLineConst &&
    items.push(...twoLineText(msgStranger, presets.twoLineConst));
    isExistThreeLineConst &&
    items.push(...threeLineText(msgDooly, presets.threeLineConst));

    const bgImage = new Image();
    bgImage.src = selectBackgroundImg(source.imageSrc);
    bgImage.onload = function () {
      drawPreviewImage(canvas, bgImage, items);
    };
  };

  const selectBackgroundImg = (filename) => {
    if (filename.indexOf('bg_1') === 0) return bg_1;
    if (filename.indexOf('bg_2') === 0) return bg_2;
    if (filename.indexOf('bg_5') === 0) return bg_5;
    if (filename.indexOf('bg_4') === 0) return bg_4;
  };

  return (
    <React.Fragment>
      <DownloadImage filename={source.filename}
                     imageData={imageData}
      />

      <div className="row text-center memePreview">
        <canvas ref={canvasRef}
                width={source.imageWidth}
                height={source.imageHeight} />
      </div>
    </React.Fragment>

  );
};

export default DrawingCanvas;

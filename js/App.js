import { Welcome, Hoi, Smoke, Over } from './CONST.js';
import { addEventListener } from './AddEventListener.js';
import { drawPreviewImage } from './DrawPreviewImage.js';

window.onload = function () {
  buildActor(Welcome);
  buildActor(Hoi);
  buildActor(Smoke);
  buildActor(Over);
};

function buildActor(Actor) {
  const bgImage = new Image();
  bgImage.src = Actor.source.imageSrc;

  const canvasPreview = document.getElementById(Actor.source.canvasId);
  const inputTwoLine =
    Actor.source.twoLineTextId &&
    document.getElementById(Actor.source.twoLineTextId);
  const inputThreeLine =
    Actor.source.threeLineTextId &&
    document.getElementById(Actor.source.threeLineTextId);
  const btnDownloadSmoke = document.getElementById(
    Actor.source.downladButtonId
  );

  const inputParams = {};
  if (inputTwoLine) {
    inputParams['twoLine'] = {
      twoLineInput: inputTwoLine,
      twoLineConst: Actor.presets.twoLineConst,
    };
  }
  if (inputThreeLine) {
    inputParams['threeLine'] = {
      threeLineInput: inputThreeLine,
      threeLineConst: Actor.presets.threeLineConst,
    };
  }

  addEventListener({ bgImage: bgImage, canvas: canvasPreview }, inputParams, {
    downloadButton: btnDownloadSmoke,
    filename: Actor.source.filename,
  });

  bgImage.onload = function () {
    drawPreviewImage(canvasPreview, bgImage, []);
    inputTwoLine && inputTwoLine.dispatchEvent(new KeyboardEvent('keyup'));
    inputThreeLine && inputThreeLine.dispatchEvent(new KeyboardEvent('keyup'));
  };
}

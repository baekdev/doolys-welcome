import React, { useState } from 'react';
import './../style/style.scss';
import { twoLineText } from './TwoLineText.js';
import { threeLineText } from './ThreeLineText.js';
import ActorMessage from './ActorMessage';
import DrawingCanvas from './DrawingCanvas';

const BuildMeme = (props) => {
  const { actorConst } = props;
  const { title, presets, source } = actorConst;

  const isExistTwoLineConst = presets.twoLineConst !== undefined;
  const isExistThreeLineConst = presets.threeLineConst !== undefined;

  const [msgStranger, setMsgStranger] = useState(isExistTwoLineConst ? presets.twoLineConst.placeholder : null);
  const [msgDooly, setMsgDooly] = useState(isExistThreeLineConst ? presets.threeLineConst.placeholder : null);

  const onKeyUp = (data) => {

    if (isExistTwoLineConst && data.name === source.twoLineTextId) setMsgStranger(data.value);
    if (isExistThreeLineConst && data.name === source.threeLineTextId) setMsgDooly(data.value);

    const items = [];
    isExistTwoLineConst && items.push(...twoLineText(msgStranger, presets.twoLineConst));
    isExistThreeLineConst && items.push(...threeLineText(msgDooly, presets.threeLineConst));

  };

  return (
    <div className="row memeContainer">
      <h2 id={source.filename}>{title}</h2>
      <div className="row">

        {isExistTwoLineConst ? (
          <ActorMessage key={`stranger-${source.filename}`}
                        onKeyUp={onKeyUp}
                        inputName={source.twoLineTextId}
                        isExistActor={isExistTwoLineConst}
                        placeholder={presets.twoLineConst.placeholder}
                        maxLength={presets.twoLineConst.maxMessageLength}
          />
        ) : null}

        {isExistThreeLineConst ? (
          <ActorMessage key={`dooly-${source.filename}`}
                        onKeyUp={onKeyUp}
                        inputName={source.threeLineTextId}
                        isExistActor={isExistThreeLineConst}
                        placeholder={presets.threeLineConst.placeholder}
                        maxLength={presets.threeLineConst.maxMessageLength}
          />
        ) : null}

      </div>

      <DrawingCanvas actor={actorConst} messages={{'msgStranger': msgStranger, 'msgDooly':msgDooly}}/>

      <div className="row text-right">
        <a href="#top">맨 위로</a>
      </div>
    </div>
  );
};

export default BuildMeme;

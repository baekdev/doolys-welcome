export const threeLineText = function (inputMessages, constants) {
  const { lineLimtLength, positions, countForMove, lineHeight } = constants;
  const inputText =
    inputMessages.length > lineLimtLength
      ? inputMessages.slice(0, lineLimtLength)
      : inputMessages;

  if (inputText.length <= countForMove) {
    return [{ text: inputText, pos: positions.init }];
  }

  if (inputText.length <= lineLimtLength.second) {
    const newPosX =
      positions.init.x - lineHeight * (inputText.length - countForMove);
    const position = {
      x: newPosX < positions.secondRow.x ? positions.secondRow.x : newPosX,
      y: positions.init.y,
    };

    return [{ text: inputText, pos: position }];
  }

  if (inputText.length <= lineLimtLength.second + lineLimtLength.third) {
    const messageHead = inputText.slice(0, lineLimtLength.second);
    const messageTail = inputText.slice(lineLimtLength.second);

    const newPosX =
      positions.init.x -
      lineHeight *
        (messageTail.length - countForMove < 0
          ? 0
          : messageTail.length - countForMove);
    const positionMessageTail = {
      x: newPosX < positions.thirdRow.x ? positions.thirdRow.x : newPosX,
      y: positions.secondRow.y + 20,
    };

    let result = [];
    result.push({
      text: messageHead,
      pos: { x: positions.secondRow.x, y: positions.secondRow.y - lineHeight },
    });
    result.push({ text: messageTail, pos: positionMessageTail });
    return result;
  }

  const messageHead = inputText.slice(0, lineLimtLength.first);
  const messageMiddle = inputText.slice(
    lineLimtLength.first,
    lineLimtLength.first + lineLimtLength.second
  );
  const messageTail = inputText.slice(
    lineLimtLength.first + lineLimtLength.second
  );

  const newPosX =
    positions.init.x - lineHeight * (messageMiddle.length - countForMove);
  const secondPosition = {
    x: newPosX < positions.secondRow.x ? positions.secondRow.x : newPosX,
    y: positions.secondRow.y,
  };

  const ttx =
    positions.init.x -
    (messageTail.length <= countForMove
      ? 0
      : lineHeight * (messageTail.length - countForMove));
  const thirdPosition = {
    x: ttx < positions.thirdRow.x ? positions.thirdRow.x : ttx,
    y: positions.thirdRow.y,
  };
  let result = [];
  result.push({ text: messageHead, pos: positions.firstRow });
  result.push({ text: messageMiddle, pos: secondPosition });
  result.push({ text: messageTail, pos: thirdPosition });

  return result;
};

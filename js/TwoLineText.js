export const twoLineText = function (inputMessages, constants) {
  const { lineLimtLength, positions, countForMove, lineHeight } = constants;
  const inputText =
    inputMessages.length > lineLimtLength
      ? inputMessages.slice(0, lineLimtLength)
      : inputMessages;

  if (inputText.length <= countForMove) {
    return [{ text: inputText, pos: positions.init }];
  }

  if (inputText.length <= lineLimtLength.first) {
    const newPosX =
      positions.init.x - lineHeight * (inputText.length - countForMove);
    const position = {
      x: newPosX < positions.firstRow.x ? positions.firstRow.x : newPosX,
      y: positions.init.y,
    };

    return [{ text: inputText, pos: position }];
  }

  const messageHead = inputText.slice(0, lineLimtLength.first);
  const messageTail = inputText.slice(lineLimtLength.first);

  const newPosX =
    positions.secondRow.x - lineHeight * (messageTail.length - countForMove);
  const positionMessageTail = {
    x: newPosX < positions.secondRow.x ? positions.secondRow.x : newPosX,
    y: positions.secondRow.y,
  };

  return [
    { text: messageHead, pos: positions.firstRow },
    { text: messageTail, pos: positionMessageTail },
  ];
};

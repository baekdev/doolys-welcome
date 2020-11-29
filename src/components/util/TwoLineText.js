export const twoLineText = function (inputMessages, constants) {
  const { maxMessageLength, lineLimitLength, positions, countForMove, lineHeight } = constants;
  const inputText = inputMessages.slice(0, maxMessageLength);

  if (inputText.length <= countForMove) {
    return [{ text: inputText, pos: positions.init }];
  }

  if (inputText.length <= lineLimitLength.first) {
    const firstPosX = positions.init.x - lineHeight * (inputText.length - countForMove);
    const position = {
      x: firstPosX < positions.firstRow.x ? positions.firstRow.x : firstPosX,
      y: positions.init.y,
    };

    return [{ text: inputText, pos: position }];
  }

  const messageHead = inputText.slice(0, lineLimitLength.first);
  const messageTail = inputText.slice(lineLimitLength.first);

  const secondPosX = positions.secondRow.x - lineHeight * (messageTail.length - countForMove);
  const positionMessageTail = {
    x: secondPosX < positions.secondRow.x ? positions.secondRow.x : secondPosX,
    y: positions.secondRow.y,
  };

  return [
    { text: messageHead, pos: positions.firstRow },
    { text: messageTail, pos: positionMessageTail },
  ];
};

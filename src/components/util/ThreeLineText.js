export const threeLineText = function (inputMessages, constants) {
  const { maxMessageLength, lineLimitLength, positions, countForMove, lineHeight } = constants;
  const inputText = inputMessages.slice(0, maxMessageLength);

  if (inputText.length <= countForMove) {
    return [{ text: inputText, pos: positions.init }];
  }

  if (inputText.length <= lineLimitLength.second) {
    const firstPosX = positions.init.x - lineHeight * (inputText.length - countForMove);
    const position = {
      x: firstPosX < positions.secondRow.x ? positions.secondRow.x : firstPosX,
      y: positions.init.y,
    };

    return [{ text: inputText, pos: position }];
  }

  if (inputText.length <= lineLimitLength.second + lineLimitLength.third) {
    const messageHead = inputText.slice(0, lineLimitLength.second);
    const messageTail = inputText.slice(lineLimitLength.second);

    const secondPosX = positions.init.x - lineHeight * (messageTail.length - countForMove < 0 ? 0 : messageTail.length - countForMove);
    const positionMessageTail = {
      x: secondPosX < positions.thirdRow.x ? positions.thirdRow.x : secondPosX,
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

  const messageHead = inputText.slice(0, lineLimitLength.first);
  const messageMiddle = inputText.slice(lineLimitLength.first, lineLimitLength.first + lineLimitLength.second);
  const messageTail = inputText.slice(lineLimitLength.first + lineLimitLength.second);

  const secondPosX = positions.init.x - lineHeight * (messageMiddle.length - countForMove);
  const secondPosition = {
    x: secondPosX < positions.secondRow.x ? positions.secondRow.x : secondPosX,
    y: positions.secondRow.y,
  };

  const thirdPosX = positions.init.x - (messageTail.length <= countForMove ? 0 : lineHeight * (messageTail.length - countForMove));
  const thirdPosition = {
    x: thirdPosX < positions.thirdRow.x ? positions.thirdRow.x : thirdPosX,
    y: positions.thirdRow.y,
  };

  let result = [];
  result.push({ text: messageHead, pos: positions.firstRow });
  result.push({ text: messageMiddle, pos: secondPosition });
  result.push({ text: messageTail, pos: thirdPosition });

  return result;
};

import React, { useRef } from 'react';
import '../../style/style.scss';

const DownloadImage = React.memo( ({filename, imageData}) => {
  const downAnchorRef = useRef();

  const download = () => {
    const link = downAnchorRef.current;
    link.download = filename;
    link.href = imageData;
    link.click();
  };

  return (
    <div className="row text-right">
      <a ref={downAnchorRef} hidden></a>
      <button onClick={download}>짤 저장</button>
    </div>
  );

});

export default DownloadImage;

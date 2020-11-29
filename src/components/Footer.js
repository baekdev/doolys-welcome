import React from 'react';
import './../style/style.scss';

const Footer = React.memo(() => {

  return (
    <footer>
      <p>
        본 사이트는 2차 가공된 이미지에 대해 어떠한 책임도 없으며, 영리 목적
        사용 금지에 대한{' '}
        <a href="https://blog.naver.com/undernation/222143362396" >
          공지
        </a>
        를 참고 부탁드립니다.
      </p>
      <p>
        만든이 - <a href="https://baek.dev/">BAEKDEV</a> & <a href="https://github.com/baekdev/doolys-welcome/issues"> 버그 제보</a>
      </p>
    </footer>
  );
});

export default Footer;

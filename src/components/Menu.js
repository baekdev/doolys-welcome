import React from 'react';
import './../style/style.scss';

const Menu = React.memo(({actors}) => {

  return (
    <div className="row" style={{ marginTop: '90px' }}>
      <ul>
        {actors.map((actor, index) => {
          return (
            <li key={`actor-link-${index}`}>
              <a href={`#${actor.source.filename}`}>&gt; {actor.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Menu;

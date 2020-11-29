import React, {useRef, useEffect} from 'react';
import './../style/style.scss';

const ActorMessage = (props) => {

  const { isExistActor, inputName, placeholder, maxLength, onKeyUp } = props;

  const inputRef = useRef();

  useEffect( () => {
    inputRef.current.addEventListener('keyup', handleChange);

    return () => {
      inputRef.current.removeEventListener('keyup', handleChange);
    };
  });

  const handleChange = (e) => {
    onKeyUp({'name': e.target.name, 'value': e.target.value});
  };

  return (
    <React.Fragment>

      {isExistActor ? (
        <div className="row">
          <input
            type="text"
            name={inputName}
            ref={inputRef}
            placeholder={placeholder}
            onKeyUp={handleChange}
            maxLength={maxLength}
          />

        </div>
      ) : null}
    </React.Fragment>

  );
};

export default ActorMessage;

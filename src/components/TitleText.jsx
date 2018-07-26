import React from 'react';
import PropTypes from 'prop-types';

const TitleText = (props) => {
  console.log('here', props);
  return (
    <div>
      <b className={props.classStyle}>{props.text}</b>
    </div>
  )
};

TitleText.defaultProps = {
  text : 'default value!!!',
};

TitleText.prototype = {
  text : PropTypes.string,
  classStyle : PropTypes.any,
};

export default TitleText;

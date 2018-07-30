import React from 'react';
import PropTypes from 'prop-types';

const TitleText = (props) => {
  return (
      <b className={props.textStyle}>{props.text}</b>
  )
};

TitleText.defaultProps = {
  text : 'default value!!!',
};

TitleText.prototype = {
  text : PropTypes.string,
  textStyle : PropTypes.any,
};

// PropTypes.checkPropTypes(TitleText.propTypes, TitleText.props, 'prop',
//   'TitleText');

export default TitleText;

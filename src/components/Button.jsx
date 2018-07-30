import React from 'react';
import PropTypes from 'prop-types';
import styles from '../generalStyles.css';


const Button = (props) => {
  const classButton = props.classStyle? props.classStyle : styles.defaultButton;

  return (
    <button className={classButton} onClick={props.onClickFunc}>
      {props.text}
    </button>

  )
};


Button.prototype = {
  text: PropTypes.string,
  classStyles: PropTypes.any,
  onClickFunc: PropTypes.func,

};

export default Button;
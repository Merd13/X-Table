import React from 'react';
import PropTypes from 'prop-types';
import TitleText from './TitleText.jsx';
import styles from '../generalStyles.css';
import Button from './Button.jsx';


const ButtonGroup = (props) => {
  const className = props.classStyle? props.classStyle : styles.buttonGroup;

  return (
    <div className={className}>
      <Button text="-"/>
      <TitleText text="0"/>
      <Button text="+"/>
    </div>

  )
};


ButtonGroup.prototype = {
  classStyle : PropTypes.any,
};

export default ButtonGroup;


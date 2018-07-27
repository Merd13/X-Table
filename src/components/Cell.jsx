import React from 'react';
import PropTypes from 'prop-types';
import TitleText from './TitleText.jsx';
import styles from '../generalStyles.css';


const Cell = (props) => {

  const classN = props.classStyle? props.classStyle : styles.headerCell;

  const classText = props.textStyle? props.textStyle : styles.textHeader;

  const classImg = props.imageStyle? props.imageStyle : styles.headerCell;


  return(
    <div className={classN}>
      <TitleText text={props.text} textStyle={classText} imagen={classImg}/>
    </div>

  )
};

Cell.prototype = {
  text : PropTypes.string,
  classStyle : PropTypes.any,
  textStyle: PropTypes.any,
  imageStyle: PropTypes.any,
};

export default Cell;
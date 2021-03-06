import React from 'react';
import PropTypes from 'prop-types';
import TitleText from './TitleText.jsx';
import styles from '../generalStyles.css';


const Cell = (props) => {
  const classN = props.classStyle? props.classStyle : styles.headerCell;

  const classText = props.textStyle? props.textStyle : styles.textHeader;

  return(
    <div className={classN}>
      {props.iconImage &&
      <img alt="im" src={props.iconImage} className={styles.image} />
      }
      <TitleText text={props.text} textStyle={classText}/>
    </div>

  )
};


Cell.prototype = {
  text : PropTypes.string,
  classStyle : PropTypes.any,
  textStyle: PropTypes.any,
  iconImage: PropTypes.any,
};

export default Cell;
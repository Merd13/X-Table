import React from 'react';
import styles from '../generalStyles.css';



const BodyPanel = (props) => {
  return (
    <div className={styles.bodyPanelStyle} style={{backgroundColor: props.bColor}}>
      {props.title} is selected!!!
    </div>
  )
};


export default BodyPanel;


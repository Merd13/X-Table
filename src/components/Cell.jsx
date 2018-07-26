import React from 'react';
import TitleText from './TitleText.jsx';
import styles from '../generalStyles.css';

const Cell = () => {
  return(
    <div >
     {/*<div > Table X is running! </div>*/}
      <TitleText text="aaabbbbxxxx" classStyle={styles.textTitle}/>
    </div>
  )
};

export default Cell;
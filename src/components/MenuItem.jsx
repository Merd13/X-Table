import React from 'react';
import styles from '../generalStyles.css';

export default function MenuItem(props) {
  let styleClass = styles.menuItemStyle;
  if (props.text === props.selectedTitle) {
    styleClass = styles.selectedItemStyle;
  }
  return (
    <div className={styleClass} onClick={()=> props.onClickItem(props.text)}>
      {props.text}
    </div>
  )
}
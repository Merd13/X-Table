import React from 'react';
import styles from '../generalStyles.css';
import MenuItem from './MenuItem';



const MenuPanel = (props) => {
  // function onClickItem(){
  //   console.log('it works!');
  //   props.changeBody();
  // }

  return (
    <div className={styles.menuPanelStyle}>
      <MenuItem text="Item A" onClickItem={props.changeBody} selectedTitle={props.selectedTitle}/>
      <MenuItem text="Item B" onClickItem={props.changeBody} selectedTitle={props.selectedTitle}/>
      <MenuItem text="Item C" onClickItem={props.changeBody} selectedTitle={props.selectedTitle}/>
      <MenuItem text="Item D" onClickItem={props.changeBody} selectedTitle={props.selectedTitle}/>
    </div>
  )


};


export default MenuPanel;
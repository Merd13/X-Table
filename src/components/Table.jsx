import React from 'react';
import Cell from './Cell.jsx';
import ButtonGroup from './ButtonGroup.jsx';
import styles from '../generalStyles.css';
import informationIcon from '../icons/informacion.png';



const Table = () => {
  return(
    <React.Fragment>
      <div className={styles.cellContainer}>
        <Cell text='This is a test table' classStyle={styles.infoCell} iconImage={informationIcon} />
      </div>
      <div className={styles.tableHeader}>
        <Cell text='heyyyy!' />
        <Cell text='vgvn'/>
        <Cell text='gcgcyu!'/>
      </div>
      <div className={styles.tableRow}>
        <Cell text='heyyyyy!' classStyle={styles.rowCell} textStyle={styles.textRow}/>
        <Cell text='vgvn' classStyle={styles.rowCell} textStyle={styles.textRow}/>
        <Cell text='gcgcyu!' classStyle={styles.rowCell} textStyle={styles.textRow}/>
      </div>
      <div className={styles.cellContainer}>
        <ButtonGroup/>
      </div>
    </React.Fragment>
  )
};

export default Table;
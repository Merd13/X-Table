import React from 'react';
import Cell from './Cell.jsx';
import styles from '../generalStyles.css';

const Table = () => {
  return(
    <React.Fragment>
      <div className={styles.tableHeader}>
        <Cell text='heyyyyy!' />
        <Cell text='vgvn'/>
        <Cell text='gcgcyu!'/>
      </div>
      <div className={styles.tableRow}>
        <Cell text='heyyyyy!' classStyle={styles.rowCell} textStyle={styles.textRow}/>
        <Cell text='vgvn' classStyle={styles.rowCell} textStyle={styles.textRow}/>
        <Cell text='gcgcyu!' classStyle={styles.rowCell} textStyle={styles.textRow}/>
      </div>
    </React.Fragment>
  )
};

export default Table;
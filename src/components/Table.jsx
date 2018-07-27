import React from 'react';
import Cell from './Cell.jsx';
import styles from '../generalStyles.css';
import informacion from './informacion.png';



const Table = () => {
  return(
    <React.Fragment>
      <div className={styles.tableNew } >
          <img alt="im" src={informacion} className={styles.imagen} className={style.imageStyle}/>
        <Cell text='This is a test table' classStyle={styles.textNew}  />
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
    </React.Fragment>
  )
};

export default Table;
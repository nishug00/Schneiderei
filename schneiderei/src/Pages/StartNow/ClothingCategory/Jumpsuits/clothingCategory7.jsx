import React from 'react';
import styles from './clothingCategory7.module.css';
import Footer from '../../../../Components/Footer/Footer';

function Category7() {
  return (
   <>
    <div className={styles.headerFrame}>
    <div className={styles.contentContainer}>
      <div className={styles.titleContainer}>
        <div className={styles.titleText}>*Beschreibung</div>
        <div className={styles.inputContainer}>
          <input 
            type="text" 
            placeholder='z.B Marke, Farbe, Besonderheit'
            className={styles.descriptionInput}
          />
        </div>
      </div>
      <div className={styles.linearContainer}>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z7riDDHWD6EJo6xc/add-24-dp.png" 
          alt="add" 
          className={styles.addIcon}
        />
        <span className={styles.linearText}>Lineal</span>
      </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}

export default Category7
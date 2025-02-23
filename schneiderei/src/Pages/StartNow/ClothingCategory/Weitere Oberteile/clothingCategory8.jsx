import React from 'react';
import styles from './clothingCategory8.module.css';
import Footer from '../../../../Components/Footer/Footer';

function Category8() {
  const categories = [
    { id: 1, title: 'Pullover', image: 'https://dashboard.codeparrot.ai/api/image/Z7rRJzHWD6EJo6xa/componen.png' },
    { id: 2, title: 'Strick-Jacke', image: 'https://dashboard.codeparrot.ai/api/image/Z7rRJzHWD6EJo6xa/componen-2.png' },
    { id: 3, title: 'T-Shirt/\nPolohemd', image: 'https://dashboard.codeparrot.ai/api/image/Z7rRJzHWD6EJo6xa/componen-3.png' },
    { id: 4, title: 'Hemd/\nBluse', image: 'https://dashboard.codeparrot.ai/api/image/Z7rRJzHWD6EJo6xa/componen-4.png' }
  ];

  return (
    <>
    <div className={styles.clothingCategories}>
      <h1 className={styles.title}>Oberteile</h1>

      <div className={styles.categoriesContainer}>
        {categories.map(category => (
          <div key={category.id} className={styles.categoryItem}>
            <div 
              className={styles.categoryImage}
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className={styles.categoryTitle}>{category.title}</div>
            </div>
          </div>
        ))}
      </div>

      <button className={styles.missingItemBtn}>
        Die Textilie ist hier nicht vorhanden?
      </button>

    </div>
    <Footer/> 
    </>  
  );
}

export default Category8;

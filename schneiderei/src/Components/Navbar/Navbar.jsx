import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.topBar}></div>
      <div className={styles.mainNav}>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z6zbg2NxokPE5KXF/vector.png" 
          alt="Vector" 
          className={styles.vector}
          width="180"
          height="35"
        />
        <div className={styles.menuItems}>
          <button className={`${styles.navButton} ${styles.outlined}`} onClick={()=>navigate('/')}>
            So geht's
          </button>
          <button className={styles.navButton} onClick={() => navigate('/startNow')}>
            Jetzt Starten
          </button>
          <button className={styles.navButton} onClick={() => navigate('/account')}>
            Mein Konto
          </button>
          <button className={styles.navButton} onClick={() => navigate('/contact')}>
            Kontakt
          </button>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z6zbg2NxokPE5KXF/shopping.png" 
            alt="Cart" 
            className={styles.cartIcon}
            width="32"
            height="32"
            onClick={()=>navigate('/basket')}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;


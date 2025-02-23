import React from 'react';
import styles from './MyAccount.module.css';
import Footer from '../../Components/Footer/Footer';

function MyAccount() {
  return (
    <>
    <div className={styles.MainContainer}>
      <div className={styles.loginForm}>
        <div className={styles.title}>Anmelden</div>
        <div className={styles.formContent}>
          <div className={styles.formGroup}>
            <label>Benutzername oder E-Mail-Adresse *</label>
            <input type="text" required />
          </div>
          <div className={styles.formGroup}>
            <label>Passwort *</label>
            <input type="password" required />
          </div>
          <div className={styles.actions}>
            <button className={styles.loginButton}>Anmelden</button>
            <div className={styles.checkboxWrapper}>
              <input type="checkbox" id="stay-logged" />
              <label htmlFor="stay-logged">Angemeldet bleiben</label>
            </div>
            <a href="#" className={styles.forgotPassword}>Passwort vergessen?</a>
          </div>
        </div>
      </div>

      <div className={styles.registerForm}>
        <div className={styles.title}>Registrieren</div>
        <div className={styles.formContent}>
          <div className={styles.inputGroup}>
            <label className={styles.inputLabel}>E-Mail-Adresse *</label>
            <input type="email" className={styles.inputField} required />
          </div>
          <div className={styles.infoText}>
            Ein Link zum Erstellen eines neuen Passworts wird an deine E-Mail-Adresse gesendet.
          </div>
          <div className={styles.checkboxGroup}>
            <input type="checkbox" className={styles.checkbox} id="terms" />
            <label htmlFor="terms" className={styles.checkboxLabel}>
              Ja, ich möchte ein Kundenkonto eröffnen und akzeptiere die<br/>
             
            </label>
          </div>
          <a href="#" className={styles.privacyLink}> Datenschutzerklärung. *</a>
          <button className={styles.submitButton}>Anmelden</button>
        </div>
      </div>
      </div>

      <Footer />
    </>
  );
}

export default MyAccount;

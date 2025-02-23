import React from 'react';
import styles from './Contact.module.css';
import Footer from '../../Components/Footer/Footer';
import contact from '../../assets/contact.png'

function Contact() {
  return (
    <>
      <div className={styles.contactHeader}>
        <h1 className={styles.contactTitle}>Trete mit BeTailor in Kontakt!</h1>
      </div>

      <div className={styles.contactSection}>
        <div className={styles.leftSide}>
          <div className={styles.textSection}>
            <p className={styles.introText}>
              Wenn DU eine Frage hast, die unter „Häufige Fragen„ nicht beantwortet wird,
              oder Du es vorziehst mit einem Mitarbeiter persönlich in Kontakt zu kommen,
              helfen wir Dir gerne.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactText}>Bitte wähle eines unserer Kontaktmöglichkeiten:</div>
              <ul>
                <li>E-Mail Kontaktformular (Antwort Mo.-Fr. in max. 48 Stunden)</li>
                <li>Chatte mit uns (von 9:30 – 18 Uhr)</li>
              </ul>
              <div className={styles.address}>Unsere Adresse für den europaweiten Versand zu uns:</div>
              <div className={styles.addressText}>
                BETAILOR<sup>®</sup><span>– Die Online Änderungsschneiderei</span><br />
                Riesstr. 49a<br />
                27721 Ritterhude
              </div>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <img
              src={contact}
              alt="Contact"
              className={styles.contactImage}
            />
          </div>

          <div className={styles.socialIcons}>
            <img
              src="https://dashboard.codeparrot.ai/api/image/Z7sQOFCHtJJZ6wEp/frame-21.png"
              alt="Social Media"
              className={styles.socialImage}
            />
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className={styles.rightSide}>
          <div className={styles.contactButtons}>
            <div className={styles.buttonContainer}>
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z7sQOFCHtJJZ6wEp/mail-24-d.png"
                alt="Email"
                className={styles.icon}
              />
              <span>Sende uns eine<br />E-Mail</span>
            </div>
            <div className={styles.buttonContainer}>
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z7sQOFCHtJJZ6wEp/vector.png"
                alt="Phone"
                className={styles.icon}
              />
              <span>Schreibe uns jetzt auf WhatsApp</span>
            </div>
            <div className={styles.buttonContainer}>
              <img
                src="https://dashboard.codeparrot.ai/api/image/Z7sQOFCHtJJZ6wEp/vector-2.png"
                alt="WhatsApp"
                className={styles.icon}
              />
              <span>Ruf uns jetzt an</span>
            </div>
          </div>
          <div className={styles.formContainer}>
            [contact-form-7 id="11885" title="betailor"]
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;

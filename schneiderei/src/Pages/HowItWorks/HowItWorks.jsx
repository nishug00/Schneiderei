import React from 'react';
import styles from './HowItWorks.module.css';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';

function HowItWorks() {
  const navigate = useNavigate();

  const services = [
    { icon: 'https://dashboard.codeparrot.ai/api/image/Z7G3GOepongUSRqK/check-ma.png', text: 'Kürzen' },
    { icon: 'https://dashboard.codeparrot.ai/api/image/Z7G3GOepongUSRqK/check-ma-2.png', text: 'Enger' },
    { icon: 'https://dashboard.codeparrot.ai/api/image/Z7G3GOepongUSRqK/check-ma-3.png', text: 'Weiten' },
    { icon: 'https://dashboard.codeparrot.ai/api/image/Z7G3GOepongUSRqK/check-ma-4.png', text: 'Reparieren' },
    { icon: 'https://dashboard.codeparrot.ai/api/image/Z7G3GOepongUSRqK/check-ma-5.png', text: 'Verlängern' },
    { icon: 'https://dashboard.codeparrot.ai/api/image/Z7G3GOepongUSRqK/check-ma-6.png', text: 'Anfertigung' },
  ];

  const cards = [
    {
      imageUrl: "https://dashboard.codeparrot.ai/api/image/Z7BXsY9nxTWt8i47/anleitun.png",
      text: "Auf 'Jetzt Starten' klicken um Änderung auszuwählen, Preis anzeigen zulassen und uns zu beauftragen.",
      buttonText: "JETZT STARTEN"
    },
    {
      imageUrl: "https://dashboard.codeparrot.ai/api/image/Z7BXsY9nxTWt8i47/anleitun-2.png",
      text: "Anhand von kurzen Erklärvideos einfach selber abmessen und auf unserer Seite die Maße eingeben."
    },
    {
      imageUrl: "https://dashboard.codeparrot.ai/api/image/Z7BXsY9nxTWt8i47/anleitun-3.png",
      text: "Änderung in den Auftragskorb legen und ggf. weitere Textilien zum Auftragskorb hinzufügen."
    },
    {
      imageUrl: "https://dashboard.codeparrot.ai/api/image/Z7BXsY9nxTWt8i47/anleitun-4.png",
      text: "Bezahlmethode auswählen und Deine Textilien uns per Post zuschicken oder von Zuhause abholen lassen."
    },
    {
      imageUrl: "https://dashboard.codeparrot.ai/api/image/Z7BXsY9nxTWt8i47/anleitun-5.png",
      text: "Wir ändern Deine Textilien in 4-7 Werktagen mit 100% Qualität und liefern zu Dir Nachhause."
    }
  ];

  const reviews = [
    {
      reviewText: "Mein Cardigan wurde schnell und absolut sauber gekürzt. Die Naht sieht aus wie das Original. Sehr professionell. Absolut zu empfehlen!",
      userName: "FRANZISKA VON NEUBECK",
      stars: 5,
      avatarSrc: "https://dashboard.codeparrot.ai/api/image/Z7G6POepongUSRqN/account.png",
      googleLogoSrc: "https://dashboard.codeparrot.ai/api/image/Z7G6POepongUSRqN/google-1.png"
    },
    {
      reviewText: "Super Betreuung schon beim Chat Kontakt. Perfekte Arbeit, reibungsloser Versand und absolut pünktliche Rücksendung! Sehr gerne wieder bei Bedarf!",
      userName: "VASILIOS V. PETRAS",
      stars: 5,
      avatarSrc: "https://dashboard.codeparrot.ai/api/image/Z7G6POepongUSRqN/account-2.png",
      googleLogoSrc: "https://dashboard.codeparrot.ai/api/image/Z7G6POepongUSRqN/google-1-2.png"
    },
    {
      reviewText: "Besser geht es nicht, es hat alles super geklappt. Würde immer wieder Änderungen dort in Auftrag geben. Skijacke mit Wasserdichten Reißverschluss, es ist einfach nur super geworden und der Skirulaub gerettet. Danke an das ganze Team",
      userName: "DANIELA MÖLLER",
      stars: 5,
      avatarSrc: "https://dashboard.codeparrot.ai/api/image/Z7G6POepongUSRqN/account-3.png",
      googleLogoSrc: "https://dashboard.codeparrot.ai/api/image/Z7G6POepongUSRqN/google-1-3.png"
    },
    {
      reviewText: "Alle Änderungen perfekt umgesetzt, selbst ein Reißverschluss an einem Mantel wurde so ersetzt, dass keine Änderungen sichtbar wurden. Der gesamte Prozess verlief einfach und schnell.",
      userName: "PATRICK SCHÖNECKER",
      stars: 5,
      avatarSrc: "https://dashboard.codeparrot.ai/api/image/Z7G6POepongUSRqN/account-4.png",
      googleLogoSrc: "https://dashboard.codeparrot.ai/api/image/Z7G6POepongUSRqN/google-1-4.png"
    }
  ];



  const FirstImageUrl = 'https://dashboard.codeparrot.ai/api/image/Z7NmUaWN819FoZh3/frame-13.png';
  const FirstTitle = 'Leistungen der Online Änderungsschneiderei?';
  const description = `Online Änderungsschneiderei per Versand in allen deutschsprachigen Ländern verfügbar.
  Wir reparieren, kürzen, nähen enger, weiten, verlängern oder fertigen auch neu an.
  Komplette Abwicklung online und per Versand
  Abmessen mit Hilfe von Video-Messanleitungen oder mitschicken eines passendes Kleidungsstücks.
  Innerhalb 4-7 Werktage (Mo-Fr.) erfüllen wir Deine Änderungswünsche.
  Bei Expressbearbeitung sogar innerhalb 48 Std.
  Änderung von Hosen, Jeans, Lederhose, T-Shirt, Jacke, Anzug, Blazer, Jackett, Hemd, Röcke, Kleid, Kissen, Gardinen, Vorhänge, Taschen, Portmonees, Bettwäsche und vieles mehr…`


  const SecondTitle = "Wie verläuft die Versandabwicklung?";
  const  points = [
    "Der Rückversand ist ab 50€ kostenlos.",
    "Den Hinversand trägt der Kunde (außer bei Abholung).",
    "Wir bieten auch die Abholung an Deiner gewünschten Adresse an.",
    "Durch die Sendungsverfolgung von DHL kannst du sehen, wann Deine Textilien ankommen.",
    "Der Versand ist durch DHL GoGreen klimaneutral und bis zu 500€ versichert."
  ] 

 const  SecondImageUrl = 'https://dashboard.codeparrot.ai/api/image/Z7NtvjO_YEiK21xJ/frame-13.png';
  const ThirdTitle = 'Wie wird Deine Zufriedenheit sichergestellt?';
  const benefits = [
    'Als Online Änderungsschneiderei ist unser Kundensupport für Dich 24/7 erreichbar.',
    'Live-Chat, per Mail und telefonisch erreichbar.',
    '100% Premium Qualität durch unsere Schneider-Experten',
    'Beste Kundenzufriedenheit und Kundenbewertungen',
    'Sichere Zahlungsmöglichkeiten z.B mit Klarna auf Rechnung, Raten, Sofortüberweisung oder Paypal.',
    'Wir sind die Nr. 1 und Marktführer in Europa'
  ]
  return (
    <div className={styles.MainContainer}>

      {/* Main Section Container */}
      <div className={styles.container}>
        <div className={styles.content}>

          {/* Header Section */}
          <div className={styles.header}>
            <h1>Deine Online Änderungsschneiderei</h1>
          </div>

          {/* Description Section */}
          <div className={styles.descriptionContainer}>
            <div className={styles.descriptionBox}>
              <p>Videos erklären wie Du abmisst. Wir ändern Deine Textilie.</p>
            </div>
            <div className={styles.descriptionBox}>
              <p>Einfach und zuverlässig per Versand</p>
            </div>
          </div>

          {/* Buttons Section */}
          <div className={styles.buttonContainer}>
            <button className={styles.actionButton} onClick={() => navigate('/startNow')}>
              JETZT STARTEN
            </button>
            <button className={styles.actionButton} onClick={() => navigate('/myAccount')}>
              SONDERANFRAGE STELLEN
            </button>
          </div>

        </div>
      </div>

      {/* Social Media Buttons Section */}
      <div className={styles.socialButtonsContainer}>
        {/* Facebook Button */}
        <div className={styles.socialButtonFacebook}>
          <img
            src="https://dashboard.codeparrot.ai/api/image/Z7AjeY9nxTWt8i4I/thumb-up.png"
            alt="thumb up"
            className={styles.thumbIcon}
          />
          <span> Gefällt mir 10.989</span>
        </div>

        {/* Instagram Button */}
        <div className={styles.socialButtonInstagram}>
          <span>Instagram 16 K</span>
        </div>
      </div>

      {/* Cards Section */}
      <div className={styles.layoutContainer}>
        <div className={styles.cardsContainer}>
          {cards.map((card, index) => (
            <div className={styles.card} key={index}>

              {/* Card Text */}
              <div className={styles.textContainer}>
                <p className={styles.cardText}>{card.text}</p>
              </div>

              {/* Card Image & Optional Button */}
              <div className={styles.imageContainer}>
                <img src={card.imageUrl} alt="Card" className={styles.cardImage} />

                {/* Show button on the image of the first card */}
                {index === 0 && card.buttonText && (
                  <button className={styles.cardButtonOnImage} onClick={() => navigate('/startNow')}>
                    {card.buttonText}
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.serviceContainer}>
        <div className={styles.serviceOptions}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <img
                src={service.icon}
                alt={service.text}
                className={styles.serviceIcon}
              />
              <span className={styles.serviceText}>{service.text}</span>
            </div>
          ))}
        </div>
      </div>



      <div className={styles.reviewSectionLayout}>
        <div className={styles.reviewSectionHeader}>
          <h1 className={styles.reviewTitle}>WAS UNSERE KUNDEN SAGEN</h1>
        </div>
        <div className={styles.reviewCardsContainer}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.reviewContent}>
                <div className={styles.starsContainer}>
                  {[...Array(review.stars)].map((_, i) => (
                    <img key={i} src="https://dashboard.codeparrot.ai/api/image/Z7G6POepongUSRqN/star-2.png" alt="star" className={styles.starIcon} />
                  ))}
                </div>
                <div className={styles.reviewText}>
                  <span className={styles.quote}>"</span>{review.reviewText}
                </div>
                <div className={styles.googleLogo}>
                  <img src={review.googleLogoSrc} alt="Google" />
                </div>
              </div>
              <div className={styles.userInfo}>
                <img src={review.avatarSrc} alt="User avatar" className={styles.avatar} />
                <span className={styles.userName}>{review.userName}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.serviceContainerDetails}>
        <div className={styles.FirstimageSection}>
          <img
            src={FirstImageUrl}
            alt="Tailor service"
            className={styles.serviceImage}
          />
        </div>
        <div className={styles.infoSection}>
          <div className={styles.infoContent}>
            <h1 className={styles.infoTitle}>
              {FirstTitle}
            </h1>
            <div className={styles.infoText}>
              <ul className={styles.bulletList}>
                {description.split('\n').map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
            <button className={styles.startButton} onClick={() => navigate('/startNow')} > 
            JETZT STARTEN
            </button>
          </div>
        </div>
      </div>

      <div className={styles.shippingContainer}>
      <div className={styles.infoSection}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>{SecondTitle}</h2>
          <ul className={styles.shippingList}>
            {points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.SecondimageSection}>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z7Nr8qWN819FoZh4/frame-13.png" 
          alt="Delivery person"
          className={styles.deliveryImage}
        />
      </div>
    </div>

    <div className={styles.satisfactionContainer}>
      <div className={styles.ThirdimageSection}>
        <img 
          src={SecondImageUrl} 
          alt="Customer Support"
          className={styles.supportImage}
        />
      </div>
      
      <div className={styles.contentSection}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>
            {ThirdTitle}
          </h1>
          
      

          <ul className={styles.bulletList}>
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>

          <button className={styles.ctaButton} onClick={() => navigate('/startNow')}>
          JETZT STARTEN
          </button>
        </div>
      </div>
    </div>

      {/* Footer Section */}
      <Footer />

    </div>
  )
}

export default HowItWorks
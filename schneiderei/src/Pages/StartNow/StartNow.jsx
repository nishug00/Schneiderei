import React, { useState } from 'react';
import styles from './StartNow.module.css';
import Footer from '../../Components/Footer/Footer';
import img1 from '../../assets/fab1.png'
import img2 from '../../assets/fab2.png'
import img3 from '../../assets/fab3.png';
import { useNavigate } from 'react-router-dom';

function StartNow() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const clothingCategories = [
    { id: 1, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-2.png', text: 'Hosen',route:'/clothingCategory1' },
    { id: 2, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-2.png', text: 'Jacken/\nMäntel',route:'/clothingCategory2' },
    { id: 3, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-3.png', text: 'Jackett / Sakko / Blazer',route:'/clothingCategory3' },
    { id: 4, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-4.png', text: 'Rock',route:'/clothingCategory4' },
    { id: 5, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-5.png', text: 'Kleid',route:'/clothingCategory5' },
    { id: 6, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-6.png', text: 'Weste',route:'/clothingCategory6' },
    { id: 7, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-7.png', text: 'Jumpsuit/\nOverall',route:'/clothingCategory7' },
    { id: 8, image: 'https://dashboard.codeparrot.ai/api/image/Z7NzaKWN819FoZiK/componen-8.png', text: 'Weitere Oberteile',route:'/clothingCategory8' },
  ];
  const ClothingCategories = clothingCategories

  const serviceCategories = [
    {
      title: "Patches/ Aufnäher annähen",
      image: "https://dashboard.codeparrot.ai/api/image/Z7N59zO_YEiK21xb/componen.png",
      route: '/serviceCategory1'
    },
    {
      title: "Vorhänge/ Gardinen",
      image: "https://dashboard.codeparrot.ai/api/image/Z7N59zO_YEiK21xb/componen-2.png",
      route: '/serviceCategory2'
    },
    {
      title: "Bettwäsche",
      image: "https://dashboard.codeparrot.ai/api/image/Z7N59zO_YEiK21xb/componen-3.png",
      route: '/serviceCategory3'
    },
    {
      title: "Taschen",
      image: "https://dashboard.codeparrot.ai/api/image/Z7N59zO_YEiK21xb/componen-4.png",
      route: '/serviceCategory4'
    },
    {
      title: "Kissen",
      image: "https://dashboard.codeparrot.ai/api/image/Z7N59zO_YEiK21xb/componen-5.png",
      route: '/serviceCategory5'
    }
  ];
  const ServiceCategories = serviceCategories

  const additionalImages = [img1, img2, img3];
  const hoverText = {
    0: "Hose (Stoff-, Jeans-, Arbeits-, Jogging-, Stretchhose)",
    1: "Lederhose/ Bayrische Lederhose/ Trachtenhose",
    2: "Anzughose",
  };


  const handleClothingCategoryClick = (category) => {
    if (category.route) {
      navigate(category.route); 
    } else {
      console.log("No route defined for this category:", category);
    }
  };

  const handleServiceCategoryClick = (category) => {
    if (category.route) {
      navigate(category.route); 
    } else {
      console.log("No route defined for this category:", category);
    }
  };

  return (
    <>
      <div className={styles.MainContainer}>
        <div className={styles.contactHeader}>
          <h1 className={styles.contactTitle}>Trete mit BeTailor in Kontakt!</h1>
        </div>

        {/* Clothing Categories Grid */}
        <div className={styles.clothingCategoriesGrid}>
          {clothingCategories.map((category) => (
            <div key={category.id} className={styles.clothingCategoryItem}>
              <div className={styles.imageContainer} onClick={() => handleClothingCategoryClick(category)}>
                <img src={category.image} alt={category.text} />
                <div className={styles.textOverlay}>
                  <p>{category.text}</p>
                </div>
              </div>

              {/* Only show this for Hosen (ID 1) */}
              {selectedCategory === category.id && category.id === 1 && (
                <div className={styles.subImagesContainer}>
                  {additionalImages.map((image, i) => (
                    <div
                      key={i}
                      className={styles.subImageWrapper}
                      onMouseEnter={() => hoveredIndex !== i && setHoveredIndex(i)}
                      onMouseLeave={() => hoveredIndex !== null && setHoveredIndex(null)}
                    >
                      <img src={image} alt={`Sub ${i}`} className={styles.subImage} />
                    </div>
                  ))}

                  {/* Hover text - Absolutely positioned to prevent flicker */}
                  {hoveredIndex !== null && (
                    <div className={styles.hoverText}>
                      <p>{hoverText[hoveredIndex]}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.oderContainer}>
      <div className={styles.oderText}>oder</div>
    </div>

        {/* Service Categories Grid */}
        <div className={styles.serviceCategoriesGrid}>
          {ServiceCategories.map((category, index) => (
            <div
              key={index}
              className={styles.serviceCategoryItem}
              onClick={() => handleServiceCategoryClick(category)}
            >
              <div className={styles.categoryImageOverlay}>
                <img
                  src={category.image}
                  alt={category.title}
                  className={styles.categoryImage}
                />
              </div>
              <div className={styles.categoryTitle}>
                {category.title}
              </div>
            </div>
          ))}
        </div>

        <button className={styles.textileNotFound}>
          <span className={styles.textileText} onClick={() => navigate('/contact')}>Die Textilie ist hier nicht vorhanden?</span>
        </button>


        <div className={styles.layout}>
          <div className={styles.header}>
            Änderungsschneiderei Online – Per Post in alle deutschsprachigen Länder
          </div>
          <div className={styles.contentWrapper}>

            <div className={styles.textContent}>

              <p>Einfach oben Deine Textilie oder Dein Kleidungsstück auswählen, um die gewünschten Änderungsmöglichkeiten angezeigt zu bekommen. Dort wird dir beim Auswählen der Änderung auch automatisch der Preis angezeigt. Kurze Anleitungsvideos zeigen Dir, wie Du abmessen musst. Nach Deiner Bestellung bekommst Du eine E-Mail mit weiteren Details und unserer Adresse, wo du deine Textilien hinschicken musst.</p>

              <p>Als Online Änderungsschneiderei sind wir für Dich 24/7 verfügbar. Zudem kannst Du unser Live-Chat nutzen oder um ein Rückruf bitten, um mit unseren Kundenberatern in Kontakt zu treten. Wir setzen auf 100% Qualität und deutsches Handwerk, bei uns bekommst du das beste Ergebnis für die Änderung Deiner Textilien.</p>

              <h3>Hose ändern lassen</h3>
              <p>Kein Problem! Sei es Hose kürzen, Hose enger nähen lassen oder repariere lassen. Bei uns wird es professionell geändert, auch mit originalem Saum, so dass es aussieht, als wurde es nie gekürzt oder enger gemacht. Hierbei benutzen unsere Schneider professionelle Techniken, so dass der Garn und Saum wie vorher aussehen. Eine Anleitung zeigt Dir anhand eines Videos, wie Du abmessen musst und die Kosten unterscheiden sich nicht vom Änderungsschneider in der Nähe.</p>

              <p>Hose ändern lassen: Jeans kürzen, Hose kürzen, Jeanshose kürzen mit original Saum, Jeans enger nähen, Hose enger machen lassen, Hosen enger nähen, Hose Reißverschluss erneuern oder reparieren, Jeans nähen Reißverschluss, Hosen nähen, Jeans nähen, Hose kürzen Preis, Hose enger nähen Preis, Reißverschluss einnähen, Hose flicken, Knopf annähen, Jeans oder Hose umsäumen, Hosen umnähen.</p>

              <h3>Jacke Reißverschluss erneuern lassen oder reparieren lassen</h3>
              <p>Der Reißverschluss Deiner Jacke ist kaputt gegangen? Leider keine Seltenheit! Viele Hersteller versuchen an jeder Ecke zu sparen. Der wechsel des Reißverschlusses oder des Schiebers ist mit uns kein Problem! Oben Deine Textilie auswählen und dann uns zuschicken. Die Reparatur des Jacken Reißverschlusses erfolgt so, dass Du es mit dem bloßen Auge nicht sehen kannst. Dabei achten unsere Änderungsschneider besonders darauf, die gleiche Farbe des Reißverschlusses und des Garns zu benutzen. Wir benutzen natürlich ausschließlich hochwertige Reißverschlüsse und Zipper/Schieber. Du kannst Dich also auf eine professionelle Reparatur deines Jacken Reißverschlusses freuen und der Preis ist auch der Qualität entsprechend günstig.</p>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    </>
  )
}

export default StartNow
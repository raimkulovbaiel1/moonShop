import React from 'react';
import './style.css';

import image1 from '../../../../assets/images/Page2/Image.png';
import image2 from '../../../../assets/images/Page2/Image2.png';
import image3 from '../../../../assets/images/Page2/Image3.png';
import image4 from '../../../../assets/images/Page2/Image4.png';

const categories = [
  { src: image1, label: 'TABLEWARE', alt: 'Tableware' },
  { src: image2, label: 'HOME DECOR', alt: 'Home Decor' },
  { src: image3, label: 'HOLIDAY', alt: 'Holiday' },
  { src: image4, label: 'COLLECTION', alt: 'Collection' },
];

const Page_2: React.FC = () => (
  <section className="page2">
    <div className="page2__inner">
      <h2 className="page2__title">FEATURED COLLECTION</h2>
      <div className="page2__cards">
        {categories.map((item) => (
          <article key={item.label} className="page2__card">
            <img className="page2__image" src={item.src} alt={item.alt} loading="lazy" />
            <p className="page2__label">{item.label}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Page_2;

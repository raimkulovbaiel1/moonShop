import React from 'react';
import './style.css';

import image0 from '../../../../assets/images/Page4/Image (0).png';
import image1 from '../../../../assets/images/Page4/Image (1).png';
import image2 from '../../../../assets/images/Page4/Image (2).png';
import image3 from '../../../../assets/images/Page4/Image (3).png';
import image4 from '../../../../assets/images/Page4/Image (4).png';
import image5 from '../../../../assets/images/Page4/Image (5).png';
import image6 from '../../../../assets/images/Page4/Image (6).png';
import image7 from '../../../../assets/images/Page4/Image (7).png';

const products = [
  {
    src: image0,
    title: 'SMALL ECRU CERAMIC COMPOTE',
    price: '$49.00',
    description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
  },
  {
    src: image4,
    title: 'WARRICK WHITE VASE 14"',
    price: '$49.00',
    description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
  },
  {
    src: image3,
    title: 'PORCELAIN DINNER PLATE',
    price: '$49.00',
    description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
  },
  {
    src: image1,
    title: 'WARRICK WHITE VASE 20',
    price: '$49.00',
    description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
  },
  {
    src: image2,
    title: 'ROUNDED DUAL HANDLED VASE',
    price: '$49.00',
    description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
  },
  {
    src: image5,
    title: 'MARIN WHITE DINNER ',
    price: '$49.00',
    description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
  },
  {
    src: image6,
    title: 'TALL CREAM CERAMIC VASE',
    price: '$49.00',
    description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
  },
  {
    src: image7,
    title: 'LUANA BOWL',
    price: '$49.00',
    description: 'Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.',
  },
];

const Page_4: React.FC = () => (
  <section className="page4">
    <div className="page4__inner">
      <h2 className="page4__title">NEW ARRIVALS</h2>
      <div className="page4__grid">
        {products.map((product) => (
          <article key={product.title} className="page4__card">
            <img
              className="page4__image"
              src={product.src}
              alt={product.title}
              loading="lazy"
            />
            <div className="page4__content">
              <h3 className="page4__name">{product.title}</h3>
              <p className="page4__price">{product.price}</p>
              <p className="page4__description">{product.description}</p>
              <button type="button" className="page4__button">
                ADD TO CART
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Page_4;

import React from 'react';
import './style.css';

import image0 from '../../../../assets/images/Page4/Image (0).png';
import image1 from '../../../../assets/images/Page4/Image (1).png';
import image3 from '../../../../assets/images/Page4/Image (3).png';
import image4 from '../../../../assets/images/Page4/Image (4).png';

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

];
const handleClick = () => {
  if (navigator.vibrate) {
    navigator.vibrate(40);
  }

  console.log('Added to cart');
};
const index: React.FC = () => (

    <section className="container">
        <div className="page4__inner">
            <h2 className="title">Discover new arrivals</h2>
            <div className="page4__grid">
                {products.map((product) => (
                    <article key={product.title} className="card">
                        <img
                            className="page4__image"
                            src={product.src}
                            alt={product.title}
                            loading="lazy"
                        />
                        <div className="content">
                            <h3 className="page4__name">{product.title}</h3>
                            <p className="price">{product.price}</p>
                            <p className="page4__description">{product.description}</p>
                            <button
                                onClick={handleClick}
                                type="button"
                                className="button active:scale-95 transition"
                            >
                                ADD TO CART
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default index;

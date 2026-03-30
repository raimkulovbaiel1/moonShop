import { type FC } from 'react';
import './style.css';

interface HeaderTextProps {
  //  Определения свойства для компонента
}


const HeaderText: FC<HeaderTextProps> = () => {
  return (
    <section className="header-text">
      <h1 className="header-text__title">About Moon</h1>

      <p className="header-text__paragraph">
        Moon's handmade ceramic products have been around since 1650, let's explore our journey
      </p>
    </section>
  );
};

export default HeaderText;
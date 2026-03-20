import Hero from "../../../../components/Hero";
import bg1 from "../../../../assets/icons/Hero/bg-1.webp";   

import './style.css';

const HomeHero = () => {
  return (
    <Hero bgImage={bg1}>
      <div className="container h-full flex items-end justify-center md:justify-start">
        <div className="home-content">
         <img src="src/assets/icons/Hero/Icon.svg" alt="" />
          <div>
            <h3>Handcrafted in Viet Nam since 1650</h3>
            <h2>BAT TRANG DINNER SET</h2>
          </div>
          <button>SHOP NOW</button>
        </div>
      </div>
    </Hero>
  );
};

export default HomeHero;

import type { FC, ReactNode } from 'react';

import bg1 from "../../assets/icons/Hero/bg-1.webp";


import "./style.css"

interface IProps {
  children: ReactNode;
  bgImage?: string;
}

const Hero: FC<IProps> = ({ children, bgImage = bg1 }) => {
  return (
    <section className="hero" style={{ background: `url(${bgImage}) center no-repeat`, backgroundSize: "cover" }}>
      {children}
    </section>
  )
}

export default Hero
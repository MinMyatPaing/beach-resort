import React from "react";

const Hero = ({ cssClass, children }) => {
  return <div className={cssClass}>{children}</div>;
};

Hero.defaultProps = {
    cssClass: 'defaultHero'
}

export default Hero;

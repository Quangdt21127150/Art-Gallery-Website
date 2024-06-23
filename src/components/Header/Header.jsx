import React from "react";
import "./Header.scss";

import { Link } from "react-router-dom";

import arrowRight from "../../assets/images/icon-arrow-right.svg";
import heroImage from "../../assets/images/desktop/image-hero@2x.jpg";
import heroImageTablet from "../../assets/images/tablet/image-hero@2x.jpg";
import heroImageMobile from "../../assets/images/mobile/image-hero@2x.jpg";
const imageAlt =
  "A couple walking at a museum next to a huge picture of an old woman";

const Header = () => {
  return (
    <header className="header">
      <section className="hero">
        <img className="hero-image" src={heroImage} alt={imageAlt} />
        <img className="hero-image-tab" src={heroImageTablet} alt={imageAlt} />
        <img className="hero-image-mob" src={heroImageMobile} alt={imageAlt} />
        <h1 className="hero-title heading-xl">
          modern <span className="hero-title-span">art gallery</span>
        </h1>
        <div className="hero-content">
          <p className="text-m">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <Link to="/location" className="hero-button">
            our location
            <img src={arrowRight} alt="" className="hero-button-icon" />
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;

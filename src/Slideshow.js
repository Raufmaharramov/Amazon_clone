import React from "react";
import { Slide } from "react-slideshow-image";
import "./Slideshow.css";
// const slideImages = ["https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jp", "https://media.cybernews.com/images/featured/2021/03/amazon-prime-video-change-country.jpg"];

const slideImages = ["https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jp", "https://media.cybernews.com/images/featured/2021/03/amazon-prime-video-change-country.jpg"];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide easing="ease">
        {/* <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }}></div>
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }}></div>
        </div> */}
        {slideImages.map(img => (
          <img src={img} />
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;

// const slideImages = ["https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jp", "https://media.cybernews.com/images/featured/2021/03/amazon-prime-video-change-country.jpg"];

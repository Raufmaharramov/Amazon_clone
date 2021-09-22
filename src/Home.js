import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jp" alt="" />
        <div className="home__row">
          <Product id="12345" title="Gourmet Basics by Mikasa Caden 16-Piece Dinnerware Set, Service for 4 - ,Assorted" price={74.99} image="https://m.media-amazon.com/images/I/41DoOGI37QL._AC_SY110_.jpg" rating={5} />
          <Product id="13579" title="Babycakes Mini Maker Cake Pop, 9, Purple" price={32.12} image="https://m.media-amazon.com/images/I/41-vdooJCxL._AC_SY110_.jpg" rating={4} />
          <Product id="246810" title="Microfiber Kitchen Towels - Super Absorbent, Soft and Solid Color Dish Towels, 8 Pack (Stripe Designed Grey and White Colors), 26 x 18 Inch" image="https://m.media-amazon.com/images/I/917AnPsqfNL._AC_UL320_.jpg" price={15.99} rating={4} />
        </div>
        <div className="home__row">
          <Product id="463782" title="Amazon Brand – Stone & Beam Rustic Farmhouse Decorative Metal Storage Bins - Set of 3, Black with Antique White Finish" image="https://m.media-amazon.com/images/I/51Sn1MgxYXL._AC_SY110_.jpg" price={49.99} rating={5} />
          <Product id="578382" title="Velener Mini Potted Plastic Fake Green Plant for Home Decor (Bamboo Leaves)" image="https://m.media-amazon.com/images/I/51NK3jUadZL._AC_SY161_.jpg" price={9.99} rating={4} />
          <Product id="473822" title="Funny Sloth Coffee Mug, Funny Sloth Gifts For Women and Men, 12 Ounce" image="https://m.media-amazon.com/images/I/31r6Cyw7xmL._AC_SY161_.jpg" price={13.95} rating={5} />
        </div>
        <div className="home__row">
          <Product id="932882" title="Carhartt Men's Midweight Sleeve Logo Hooded Sweatshirt (Regular and Big & Tall Sizes)" image="https://m.media-amazon.com/images/I/41Z6cPmbd+L._AC_SY161_.jpg" price={47.95} rating={5} />
          <Product id="455922" title="LapGear Home Office Lap Desk with Device Ledge, Mouse Pad, and Phone Holder - Black Carbon - Fits Up to 15.6 Inch Laptops - Style No. 91588" image="https://m.media-amazon.com/images/I/41WLKifr9NS._AC_SY161_.jpg" price={34.99} rating={5} />
          <Product id="255473" title="TechRise 3D VR Headset, Anti-Blue Light Eye Protected HD Universal Virtual Reality Goggles Compatible with iPhone & Android Phones, Comfortable Adjustable VR Glasses Gift for Kids and Adults" image="https://m.media-amazon.com/images/I/61vbluEmWiL._AC_SY200_.jpg" price={29.99} rating={3} />
        </div>
        <div className="home__row">
          <Product id="487830" title="Eastvolt 248 Pieces Mechanics Tool Set, General Purpose Mixed Sockets and Wrenches, Hand Tool Set Auto Repair Tool Kit with Storage Case (EVHT24801)" image="https://m.media-amazon.com/images/I/711qK62E2EL._AC_SY200_.jpg" price={86.67} rating={4} />
        </div>
      </div>
    </div>
  );
}

export default Home;

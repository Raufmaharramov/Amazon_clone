import React from "react";
import "./Product.css";
import StarRateIcon from "@mui/icons-material/StarRate";

function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p className="short__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <StarRateIcon className="amazon__star" />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;

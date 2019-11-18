import React from "react";
import "../Styles/item.css";
import data from "../data";
import ImageWrapper from "../Components/ImageWrapper";
import ProductContentWrapper from "../Components/ProductContentWrapper";

const ProductDetails = ({ match, location }) => {
  const {
    params: { itemId },
  } = match;

  return (
    <div className="item-container-row">
      <div className="item-container-left">
        {data.groups.map(item => {
          if (item.id === itemId) {
            return (
              <ImageWrapper
                hero={item.hero.href}
                images={item.images}
                key={item.id}
              />
            );
          }
        })}
      </div>
      
      <div className="item-container-right">
        {data.groups.map(item => {
          if (item.id === itemId) {
            return <ProductContentWrapper item={item} key={item.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default ProductDetails;

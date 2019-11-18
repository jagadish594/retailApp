import React from "react";

const ProductContentWrapper = props => {
  const keys = Object.keys(props.item);
  let type = undefined;
  let priceType = undefined;
  let regular = undefined;
  let selling = undefined;
  let regularPriceHigh = undefined;
  let regularPriceLow = undefined;
  let sellingPriceHigh = undefined;
  let sellingPriceLow = undefined;
  keys.map(value => {
    if (value === "price") {
      priceType = value;
      type = props.item[value].type;
      regular = props.item[value].regular;
      selling = props.item[value].selling;
    }
    if (value === "priceRange") {
      priceType = value;
      type = props.item[value].type;
      regularPriceHigh = props.item[value].regular.high;
      regularPriceLow = props.item[value].regular.low;
      sellingPriceHigh = props.item[value].selling.high;
      sellingPriceLow = props.item[value].selling.low;
    }
  });

  return (
    <div className="padding_left_10 padding_top_5">
      <h2>{props.item.name}</h2>
      <h6 className="uppercase padding_top_5">Only at Williams Sonoma </h6>
      <h6 className="padding_top_5">
        <span>{type + " offer"}</span>
      </h6>
      <div className="bold">
        {priceType === "price" && priceType !== "undefined" ? (
          <h4>
            <span className="color_sug">Original Price: ${regular}</span>
            <br />
            <span className="color_our">After discount: ${selling}</span>
          </h4>
        ) : (
          <h4>
            <span className="color_sug">
              Original Price range:{" "+"$" + regularPriceLow + " - " + "$" + regularPriceHigh}
            </span>
            <br />
            <span className="color_our">
              Discounted Price range:{" "+"$" + sellingPriceLow + " - " + "$" + sellingPriceHigh}
            </span>
          </h4>
        )}
      </div>
    </div>
  );
};

export default ProductContentWrapper;

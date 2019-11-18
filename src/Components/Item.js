import React from "react";
import Label from "../Components/Common/Label";
import Image from "../Components/Common/Image";
import "../Styles/item.css";
import { Link } from "react-router-dom";

class Item extends React.Component {
  getPricePriceRange = item => {
    let regularPrice = 0,
      sellingPrice = 0;
    if (this.isObject(item)) {
      for (let [key, value] of Object.entries(item)) {
        if (key === "price") {
          regularPrice = item.price.regular;
          sellingPrice = item.price.selling;
          return `Regular Price: ${regularPrice}, Selling Price: ${sellingPrice}`;
        }
        if (key === "priceRange") {
          return `Price range: ${item.priceRange.regular.low} - ${item.priceRange.regular.high}`;
        }
      }
    }
    return "No price data";
  };

  isObject = a => {
    return a != null && a.constructor === Object;
  };
  render() {
    return (
      <div className="item-container-row padding">
        {this.props.data.map(item => (
          <div className="item-container-column padding margin" key={item.id}>
            <div className="column1">
              <Label text={item.name} />
            </div>
            <div className="column2">
              <Label text={this.getPricePriceRange(item, "regular")} />
            </div>

            <div className="column3 padding">
              <Image href={item.hero.href} />
            </div>
            <div>
              <Link to="/ProductDetails">
                <h2>More details</h2>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Item;

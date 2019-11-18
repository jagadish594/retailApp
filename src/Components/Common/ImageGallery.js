import React from "react";
import "../../Styles/item.css"
const ImageGallery = props => {
  return (
    <img
      src={props.href}
      width="75px"
      onMouseOver={() => props.handleImageClick(props.value)}
      onMouseOut={props.handleImageMouseAway}
      alt={props.alt}
    />
  );
};
export default ImageGallery;

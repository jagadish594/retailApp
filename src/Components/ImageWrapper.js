import React from "react";
import Image from "../Components/Common/Image";
import ImageGallery from "../Components/Common/ImageGallery";
import "../Styles/item.css";

class ImageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndexClicked: "",
      heroImage: this.props.hero,
    };
  }

  handleImageClick = value => {
    this.setState({
      imageIndexClicked: value,
      heroImage: this.props.images[value].href,
    });
  };

  handleImageMouseAway = () => {
    this.setState({
      heroImage: this.props.hero,
    });
  };
  render() {
    return (
      <div className="item-container-row padding">
        <Image href={this.state.heroImage} alt=""/>
        
        {this.props.images.map((item, index) => (
          <ImageGallery
            href={item.href}
            key={index}
            handleImageClick={this.handleImageClick}
            value={index}
            handleImageMouseAway={this.handleImageMouseAway}
            alt=""
          />
        ))}
      </div>
    );
  }
}
export default ImageWrapper;

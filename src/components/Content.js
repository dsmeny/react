import React from "react";
import MyImage from "../images/my-image.png";
import "./content.scss";

const Content = () => {
  return (
    <div className="inner-container">
      <h1>Hello React</h1>
      <img src={MyImage} />
    </div>
  );
};

export default Content;

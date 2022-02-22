import React from "react";
import { BiSearch } from "react-icons/bi";
import home from "../assets/home1.png";
function Home() {
  return (
    <div className="home">
      <div className="container mx-3 py-3">
        <div className="title-container">
          <h2>Big title of the shop </h2>
        </div>
        <div className="extra-image">
          <img src={home} alt="Home" />
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import processorimage from "../assets/hoodie.png";
import { BsChevronDown } from "react-icons/bs";
import Circle from "@uiw/react-color-circle";

import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";

function Cart() {
  const [hex, setHex] = useState("");

  const products = [
    {
      image:
        "https://i.pinimg.com/564x/e3/91/2f/e3912fb7d1b5345a81ee5cebb942e555.jpg",
      name: "Hoodie name",
      model: "UX-430 US",
      processor: "Intel&reg; Core&trade; i3 7100U Processor",
      os: "Windows 10 Pro for business",
      percentage: 100,
    },
    {
      image:
        "https://i.pinimg.com/564x/08/66/42/086642c48961cae0500b81ef39b29350.jpg",
      name: "Hoodie name",
      model: "Y545 2022",
      processor: "Intel&reg; Core&trade; i7 9100U Processor",
      os: "Windows 10 Pro for Enterprise",
      percentage: 55,
    },
    {
      image:
        "https://i.pinimg.com/564x/97/45/a5/9745a5d928f31dbe384426b2ee1ee321.jpg",
      name: "Hoodie name",
      model: "SF-313 51",
      processor: "Intel&reg; Core&trade; i3 7100X Processor",
      os: "Windows 10 Pro for business",
      percentage: 60,
    },
    {
      image:
        "https://i.pinimg.com/564x/4c/07/f7/4c07f7193f05cfbf33bb69a26febe149.jpg",
      name: "Hoodie name",
      model: "X1 2022",
      processor: "Intel&reg; Core&trade; i5 8000C Processor",
      os: "Windows 10 Pro for business",
      percentage: 24,
    },
  ];
  return (
    <div className="products-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Selected Products</h2>
          <button>Check Out</button>
        </div>
        <div className="products">
          {products.map(({ image, name, model, percentage, os }, index) => {
            return (
              <div className="product" key={index}>
                <div className="image">
                  <img src={image} alt="Product" />
                </div>
                <h4>{name}</h4>
                <h4>{}</h4>
                <hr />
                <div className="processor">
                  <img src={processorimage} alt="processor" />
                  <h4>Size</h4>
                  <p>M</p>
                  <h4>Color</h4>
                  <p>Red</p>
                  <h4>Price</h4>
                  <p>20$</p>
                </div>
                <button className="buttonC">Change ?</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;

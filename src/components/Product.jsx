import React from "react";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import Circle from "@uiw/react-color-circle";
import { useState } from "react";
import styled from "styled-components";

const FilterSize = styled.select`
  height: 50px;
  margin-left: 10px;
  padding: 5px;
  background-color: white;
  color: darkblue;
  border: 5px solid white;
  font-size: large;
`;

const FilterSizeOption = styled.option`
  font-size: large;
  color: darkblue;
`;
function Product() {
  const [hex, setHex] = useState("");
  const [size, setSize] = useState("");
  const product = {
    size: ["S", "M", "L"],
  };
  return (
    <div className="services-container mx-3 py-3">
      <div className="container">
        <div className="service one">
          <p>Hoodie name</p>
          <h4>Price</h4>
          <div className="image">
            <img
              src="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg"
              alt="service"
            />
          </div>
        </div>
        <div className="service four">
          <p>Pick the size</p>
          <FilterSize onChange={(e) => setSize(e.target.value)}>
            {product.size?.map((s) => (
              <FilterSizeOption key={s}>{s}</FilterSizeOption>
            ))}
          </FilterSize>
          <p>Pick the colors</p>
          <Circle
            colors={["#F44E3B", "#FE9200", "#FCDC00", "#DBDF00"]}
            color={hex}
            onChange={(color) => {
              setHex(color.hex);
              console.log(hex);
            }}
          />
          <h4>Free Delivery</h4>
          <p>
            Add to cart <HiArrowSmRight />
          </p>
          <div className="image">
            <img src={service4} alt="service" />
          </div>
        </div>
        <div className="service two">
          <div className="content">
            <h4>Get awsome prizes</h4>
            <p>
              Learn More <HiArrowSmRight />
            </p>
          </div>
          <div className="image">
            <img src={service2} alt="service" />
          </div>
        </div>
        <div className="service three">
          <div className="image">
            <img src={service3} alt="service" />
          </div>
          <div className="content">
            <h4>Continue shopping</h4>
            <p>
              <HiArrowSmLeft /> Back to home page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

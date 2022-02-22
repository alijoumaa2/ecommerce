import React from "react";
import choose from "../assets/choose.png";
import choose1 from "../assets/choose1.png";
import choose2 from "../assets/choose2.png";
import choose3 from "../assets/choose3.png";
import choose4 from "../assets/choose4.png";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillFileEarmarkFontFill } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import { ImCross } from "react-icons/im";
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
function Box() {
  const data = [
    {
      image: choose1,
      title: "Username",
      description: "We have many stock until next year to supply you needs.",
    },
    {
      image: choose2,
      title: "100% Secure",
      description:
        "You don't need to worry when transaction is on our platform now.",
    },
    {
      image: choose3,
      title: "24/7 Support",
      description: "If any problem use our platform you cantact use free.",
    },
    {
      image: choose4,
      title: "Free Delivery",
      description:
        "Wherever you are, we make sure you get free delivery service.",
    },
  ];
  return (
    <div className="choose-us-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>Register</h2>
          <p>
            By creating an account , you are agreeing to the Terms of Service.
          </p>
        </div>
        <div className="content">
          <div className="choose-us">
            <div className="choose">
              <BsFillFileEarmarkFontFill></BsFillFileEarmarkFontFill>
              <h4>Username</h4>
              <Input placeholder="username" />
            </div>
            <div className="choose">
              <AiOutlineMail></AiOutlineMail>
              <h4>Email</h4>
              <Input placeholder="username" />
            </div>
            <div className="choose">
              <MdPassword></MdPassword>
              <h4>Password</h4>
              <Input placeholder="username" />
            </div>
            <div className="choose">
              <ImCross></ImCross>
              <h4>Already have an account?</h4>
              <h4>Log in instead</h4>
            </div>
          </div>
          <div className="delivery">
            <img src={choose} alt="delivery" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;

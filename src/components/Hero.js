import React, { Component } from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  .hero-container {
    position: relative;
    background: #214525;
    padding: 100px 0;
    width: 100%;
    background-image: url("../img/image.webp");
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
    background-size: cover;
    z-index: 10;
    margin-bottom: -1px;
  }
  .hero-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  @media (min-width: 768px) {
    .hero-container {
      min-height: 20vh;
    }
  }
  @media (min-width: 1024px) {
    .hero-container {
      min-height: 40vh;
    }
  }
  @media (min-width: 1600px) {
    .hero-container {
      min-height: 50vh;
    }
  }
`;

export default class Hero extends Component {
  render() {
    return (
      <HeroContainer>
        <div className="hero-container">
          <div className="hero"></div>
        </div>
      </HeroContainer>
    );
  }
}

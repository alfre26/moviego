import React, { Component } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  .footer-container {
    padding: 10px 0;
    background: #202525;
    width: 100%;
  }
  .footer {
    margin: auto;
    max-width: 375px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 40%;
    padding: 0px 25px;
  }
  h2 {
    color: #fff;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <div className="footer-container">
          <div className="footer">
            <h2>Power By </h2>
            <img
              className="logo"
              src="../img/moviedb.svg"
              alt="movie api logo"
            />
          </div>
        </div>
      </FooterContainer>
    );
  }
}

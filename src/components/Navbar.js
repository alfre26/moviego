import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  .nav-container {
    background: #202525;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  .logo {
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
  }
  .nav-links {
    display: none;
  }

  .hamburger {
    position: relative;
    cursor: pointer;
    padding: 10px 0;
  }
  .hamburger .line {
    height: 2px;
    width: 30px;
    background: #fff;
  }
  .hamburger .line::after {
    position: absolute;
    content: "";
    height: 2px;
    width: 30px;
    align-items: flex-end;
    background: #fff;
    transform: translateY(0.4em);
  }
  .hamburger .line::before {
    position: absolute;
    content: "";
    height: 2px;
    width: 30px;
    background: #fff;
    transform: translateY(-0.4em);
  }

  @media (min-width: 1300px) {
    .nav-links {
      display: block;
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style: none;
      color: #fff;
      font-size: 20px;
    }
    .logo {
      font-size: 28px;
    }
    .nav-links li {
      padding: 0 15px;
      cursor: pointer;
      list-style: none;
    }
    .hamburger {
      display: none;
    }
  }
`;

export default class Navbar extends Component {
  render() {
    return (
      <Nav>
        <div className="nav-container">
          <div className="logo">MoviesGo</div>

          <div className="hamburger">
            <div className="line"></div>
          </div>
          <ul className="nav-links">
            <li>Home</li>
            <li>Genre</li>
            <li>Movies</li>
            <li>Tv-series</li>
            <li>
              <i class="fas fa-search"></i>
            </li>
          </ul>
        </div>
      </Nav>
    );
  }
}

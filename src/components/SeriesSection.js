import React, { Component } from "react";
import styled from "styled-components";
const SeriesContainer = styled.div`
  .Series-container {
    background: #2b2b2b;
    padding: 100px 0;
    width: 100%;
    z-index: 5;
    margin-bottom: -1px;
  }
  .series {
    margin: auto;
    max-width: 375px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .series .cabecera {
    transform: translateY(-3em);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .cabecera a {
    color: #49c0e5;
    margin-left: 140px;
  }
  .series .title {
    color: #fff;
    font-size: 24px;
    display: flex;
    flex-direction: column;
  }
  .series .title::after {
    content: "";
    background: #49c0e5;
    height: 3px;
    width: 25px;
  }
  .card-container {
    max-width: 320px;
    margin: 1% 5% auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }
  .card {
    width: 140px;
    padding: 70px 0px;
    background: #fff;
  }
`;
export default class SeriesSection extends Component {
  render() {
    return (
      <SeriesContainer>
        <div className="Series-container">
          <div className="series">
            <div className="cabecera">
              <div className="title">TV-Series</div>
              <a href="/">View all</a>
            </div>
            <div className="card-container">
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
              <div className="card"></div>
            </div>
          </div>
        </div>
      </SeriesContainer>
    );
  }
}

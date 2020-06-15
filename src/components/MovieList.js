import React, { Component } from "react";
import styled from "styled-components";

const MoviesList = styled.div`
  h1 {
    padding: 350px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default class MovieList extends Component {
  render() {
    return (
      <MoviesList>
        <input type="text" placeholder={process.env.REACT_APP_API} />
        <h1>Working on it...</h1>
      </MoviesList>
    );
  }
}

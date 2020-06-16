import React, { Component } from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  .card {
    width: 140px;
  }
  @media (min-width: 1300px) {
    .card {
      width: 200px;
    }
  }
`;

export default class Card extends Component {
  render() {
    return (
      <CardStyle>
        <img
          className="card"
          src={`https://image.tmdb.org/t/p/w200/${this.props.image}`}
          alt="poster"
        />
      </CardStyle>
    );
  }
}

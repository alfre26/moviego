import React, { Component } from "react";
import styled from "styled-components";

const CardStyle = styled.div`
  .card {
    width: 140px;
    padding: 100px 0px;
  }
  @media (min-width: 1300px) {
    .card {
      width: 200px;
      padding: 150px 0px;
    }
  }
`;

export default class Card extends Component {
  render() {
    return (
      <CardStyle>
        <div className="card" style={this.props.image}></div>
      </CardStyle>
    );
  }
}

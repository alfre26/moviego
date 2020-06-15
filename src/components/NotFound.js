import React, { Component } from "react";
import styled from "styled-components";
const Not = styled.div`
  h1 {
    padding: 350px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default class NotFound extends Component {
  render() {
    return (
      <Not>
        <h1>404: Not Found</h1>
      </Not>
    );
  }
}

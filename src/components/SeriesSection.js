import React, { Component } from "react";
import styled from "styled-components";
//components
import Card from "./Card";
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
    padding: 90px 0px;
    background: #fff;
  }
`;
export default class SeriesSection extends Component {
  state = {
    series: [],
  };

  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=37f2ae62d34a000fdc7804626ffe2ec2&language=en-US&page=1"
    )
      .then((res) => res.json())
      .then((data) => this.setState({ series: data.results }))
      .catch((error) => console.error(error));
  }
  // make only one function of this.
  getImages(urlImage) {
    const card = {
      cursor: "pointer",
      backgroundImage: `url("https://image.tmdb.org/t/p/w200/${urlImage}")`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "140px",
      padding: "100px 0px",
    };
    return card;
  }
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
              {this.state.series.map((serie) => (
                <Card
                  key={serie.id}
                  image={this.getImages(serie.poster_path)}
                />
              ))}
            </div>
          </div>
        </div>
      </SeriesContainer>
    );
  }
}

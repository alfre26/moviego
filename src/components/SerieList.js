import React, { Component } from "react";
import { Link } from "react-router-dom";
//components
import Card from "./Card";
//style
import { SeriesContainer } from "../Style";

export default class SerieList extends Component {
  state = {
    series: [],
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.props.apikey}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ series: data.results }))
      .catch((error) => console.error(error));
  }
  render() {
    return (
      <SeriesContainer>
        <div className="Series-container">
          <div className="series">
            <div className="cabecera">
              <div className="title">TV-Series</div>
            </div>
            <div className="card-container">
              {this.state.series.map((serie) => (
                <Link key={serie.id} to={`/series/${serie.id}`}>
                  <Card
                    key={serie.id}
                    image={this.props.getImages(serie.poster_path)}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SeriesContainer>
    );
  }
}

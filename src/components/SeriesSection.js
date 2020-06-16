import React, { Component } from "react";
import { Link } from "react-router-dom";
//components
import Card from "./Card";

//style
import { SeriesContainer } from "../Style";
export default class SeriesSection extends Component {
  render() {
    return (
      <SeriesContainer>
        <div className="Series-container">
          <div className="series">
            <div className="cabecera">
              <div className="title">TV-Series</div>
              <Link to="/series">View all</Link>
            </div>
            <div className="card-container">
              {this.props.series.map((serie) => (
                <Link key={serie.id} to={`/series/${serie.id}`}>
                  <Card key={serie.id} image={serie.poster_path} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SeriesContainer>
    );
  }
}

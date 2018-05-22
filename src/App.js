import React, { Component } from "react";
import "./App.css";
import Searchbar from "./Searchbar.js";
import NewsDisplay from "./NewsDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: []
    };
  }
  addTile(tile) {
    let tiles = this.state.tiles;
    tiles.push(tile);
    this.setState({
      tiles: tiles
    });
  }

  render() {
    let tilesArray = this.state.tiles.map(til => {
      return <NewsDisplay tile={til} />;
    });
    return (
      <div className="App">
        <Searchbar
          updateTiles={tile => this.addTile(tile)}
          getSnippets={date => this.getNews(date)}
        />

        {tilesArray}
      </div>
    );
  }
}

export default App;

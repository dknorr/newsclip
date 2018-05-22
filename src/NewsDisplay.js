import React, { Component } from "react";

/* PROPS
  contract: obj, has fields "date", and "news"
*/

export default class NewsDisplay extends Component {
  render() {
    let { tile } = this.props;
    return (
      <div>
        <h6> Date: </h6>
        <p> {tile.date} </p>

        <h6> News: </h6>
        <p> {tile.info} </p>
      </div>
    );
  }
}

import React, { Component } from "react";

/* PROPS
  updateTiles: function, adds the current news tiles array managed in parent
*/

//import news function

export default class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      info: ""
    };
  }

  updateFields(field1, val1, field2, val2) {
    this.setState({
      [field1]: val1,
      [field2]: val2
    });
  }
  getNews(date) {
    let axios = require("axios");
    let url =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=56600912105f49b99f9dfdb481a1dfb2&begin_date=" +
      date +
      "&end_date=" +
      date;
    let text = "";
    axios
      .get(url)
      .then(response => {
        let nytData = response.data.response.docs;
        nytData.map(datum => {
          text += datum.snippet;
        });
        console.log(text);
        this.setState({
          info: text
        });
      })
      .catch(error => {
        // if something goes wrong with the GET request, we'll log the error instead
        console.log(error);
      });
  }
  onClickSubmit() {
    // first, we check if any of the fields are empty
    if (this.state.date) {
      this.props.updateTiles({
        date: this.state.date,
        info: this.state.info
      });
    } else {
      alert("Please enter a date! (Format: YYYYMMDD)");
    }
  }
  render() {
    return (
      <div>
        <p> Date: </p>
        <input
          placeholder="YYYYMMDD"
          value={this.state.date}
          onChange={e =>
            this.updateFields(
              "date",
              e.target.value,
              "info",
              this.getNews(e.target.value)
            )
          }
        />

        <button onClick={() => this.onClickSubmit()}> Add News </button>
      </div>
    );
  }
}

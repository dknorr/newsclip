let axios = require("axios");

export default function getSnippets(date) {
  console.log(date);
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
    })
    .catch(error => {
      // if something goes wrong with the GET request, we'll log the error instead
      console.log(error);
    });
}

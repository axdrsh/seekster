import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchData = () => {
    Axios({
      url: "https://google-search74.p.rapidapi.com/",
      params: {
        query: `${searchTerm}`,
        limit: "15",
        related_keywords: "true",
      },
      headers: {
        "X-RapidAPI-Key": "67b433aa0amsheeffffa7f371189p1b0dc5jsnce03b4e1498b",
        "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
      },
    }).then((res) => {
      setSearchResults(res.data.results);
    });
  };

  return (
    <div className="App">
      <div className="searchBar">
        <input
          className="searchInput"
          type="text"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <button className="searchButton" onClick={searchData}>
          search
        </button>
      </div>
      {searchResults.map((result, index) => (
        <div className="searchResults" key={index}>
          <a className="title" href={result.url}>
            {result.title}
          </a>
          <p className="description">{result.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

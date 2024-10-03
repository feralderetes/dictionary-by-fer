import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [error, setError] = useState(null);

  function handleImagesResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleError() {
    setError(true);
  }

  function search(event) {
    event.preventDefault();
    setError(false);

    const apiKey = "4a6baff0aba2ofc3b32f2f5atce330d1";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse).catch(handleError);

    const pexelsApiKey =
      "usAusOA01rbv2qubFjyFWeVmsG91XLcAezTCuUcI0rKvHjL4Crsh6yce";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handleImagesResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <section>
        <label>What word do you want to look up?</label>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            placeholder="Search for a word"
          ></input>
        </form>
        <div className="hint">e.g., puppy, kitten, flower, biscuit... </div>
      </section>
      <Results results={results} error={error} />
      <Photos photos={photos} />
    </div>
  );
}

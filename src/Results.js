import React from "react";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    let hasMeanings = props.results.hasOwnProperty("meanings");
    if (hasMeanings && !props.error) {
      return (
        <div className="Results">
          <section>
            <h2>{props.results.word}</h2>
            <div className="phonetic">/{props.results.phonetic}/</div>
          </section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meanings meaning={meaning} />
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <section className="Error">
          <h2>Oops!</h2>
          <div className="message">
            Could not find a definition for that word. Check the spelling in
            English or try a different word.
          </div>
        </section>
      );
    }
  } else {
    return null;
  }
}

import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        <p className="definition">{props.meaning.definition}</p>
        <em className="example">{props.meaning.example}</em>
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}

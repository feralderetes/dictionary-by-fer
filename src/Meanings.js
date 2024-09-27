import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p className="Meanings-definition">{props.meaning.definition}</p>
      <em className="Meanings-example">{props.meaning.example}</em>
    </div>
  );
}

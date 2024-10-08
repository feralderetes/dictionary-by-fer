import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    if (props.photos.length > 0) {
      return (
        <section className="Photos">
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div key={index} className="col-4">
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.tiny}
                      alt={photo.alt}
                      className="img-fluid img-thumbnail"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      );
    } else {
      return null;
    }
  } else {
    return null;
  }
}

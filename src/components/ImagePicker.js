import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import IMAGES from "../data/images";
import { useState } from "react";

function ImagePicker() {
  const [images, setImages] = useState([...IMAGES]);
  const {profileName} = useParams()
  return (
    <div className="ImagePicker-page">
      <div className="ImagePicker-page-header">
        <h2>Pick an image</h2>
      </div>
      <div className="images-container">
        {images.map((imgUrl) => {
          let modifiedUrl = imgUrl.split('/').join('@') + "**" + profileName
          return (
            <div className="image-card">
              <div className="image">
                <Link key={imgUrl} to={`/profile/${modifiedUrl}`}>
                  <img src={imgUrl} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImagePicker;

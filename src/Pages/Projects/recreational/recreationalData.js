import React from 'react';

const RecreationalData = ({ images }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={image.alt} />
          <p>{image.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default RecreationalData



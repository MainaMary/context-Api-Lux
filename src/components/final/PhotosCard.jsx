import React from "react";

const PhotosCard = ({ item }) => {
  return (
    <div className="episode_Card">
      <img src={item.url} alt={item.title} className="image_card" />
      <h3>{item.title}</h3>
    </div>
  );
};

export default PhotosCard;

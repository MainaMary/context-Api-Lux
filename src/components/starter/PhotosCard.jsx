import React from "react";

const PhotosCard = ({ item }) => {
  return (
    <div className="episode_Card ">
      <img src={item.url} alt={item.title} className="image_card" />
      <h2>{item.title}</h2>
    </div>
  );
};

export default PhotosCard;

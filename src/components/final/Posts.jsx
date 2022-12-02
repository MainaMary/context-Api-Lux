import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserContext } from "./apiContext";
import { useContext } from "react";
import PhotosCard from "./PhotosCard";

const Posts = () => {
  const { photos, pageNumber, setPageNumber, fetchPosts } =
    useContext(UserContext);
  console.log(photos && photos);
  return (
    <div>
      <div className="photos_Wrapper">
        {photos.length &&
          photos.map((item) => <PhotosCard key={item.id} item={item} />)}
      </div>
      <div style={{ width: "100%" }}>
        <button
          className="btn_pagination"
          onClick={() => {
            setPageNumber((page) => page - 1);
            console.log(pageNumber, "decrease");
          }}
          disabled={pageNumber === 1}
        >
          Prev
        </button>
        <button
          className="btn_pagination"
          onClick={() => {
            setPageNumber((page) => page + 1);
            console.log(pageNumber, "increase");
          }}
          disabled={pageNumber === 50}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Posts;

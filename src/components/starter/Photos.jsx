import React from "react";
import { useContext } from "react";
import { ApiContext } from "./apiContext";
import PhotosCard from "./PhotosCard";

const Photos = () => {
  //const dataPhotos = ApiContext.Consumer; // another alternative consume

  const { photos, pageNumber, setPageNumber } = useContext(ApiContext);

  return (
    <div>
      <>
        <h2>{photos.length}</h2>
        <div className="photos_Wrapper">
          {photos.length
            ? photos.map((item) => <PhotosCard key={item.id} item={item} />)
            : null}
        </div>
        <div style={{ margin: "20px " }}>
          <button
            className="btn_pagination"
            disabled={pageNumber === 1}
            onClick={() => setPageNumber((page) => page - 1)}
          >
            Prev
          </button>
          <button
            className="btn_pagination"
            disabled={pageNumber === 500}
            onClick={() => setPageNumber((page) => page + 1)}
          >
            Next
          </button>
        </div>
      </>
    </div>
  );
};

export default Photos;

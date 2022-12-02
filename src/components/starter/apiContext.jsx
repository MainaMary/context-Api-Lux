import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const ApiContext = createContext({});

const APiProvider = (props) => {
  const [photos, setPhotos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const { children } = props;
  const fetchPhotos = async () => {
    try {
      const response = await axios(
        `https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${pageNumber}`
      );
      setPhotos(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [pageNumber]);
  const userObj = {
    name: "Kent C.Dodds",
    passoword: "123@",
  };
  return (
    <ApiContext.Provider value={{ photos, userObj, pageNumber, setPageNumber }}>
      {children}
    </ApiContext.Provider>
  );
};
export default APiProvider;

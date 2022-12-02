import { createContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext({});
const UserProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const fetchPosts = async () => {
    //baseURL =
    //https://jsonplaceholder.typicode.com/photos?_limit=5&_page=1
    try {
      const response = await axios(
        `https://jsonplaceholder.typicode.com/photos?_limit=5&_page=${pageNumber}`
      );
      console.log(response.data);
      setPhotos(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(pageNumber, "pageNumebr");

  useEffect(() => {
    fetchPosts();
  }, [pageNumber]);
  return (
    <UserContext.Provider
      value={{ photos, pageNumber, setPageNumber, fetchPosts }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;

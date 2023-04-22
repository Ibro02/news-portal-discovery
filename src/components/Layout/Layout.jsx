import { redirect } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";

import { addNews } from "../../store/slices/news";

import Navbar from "../Navbar/Navbar";
import Hightlight from "../Highlight/Hightlight";

import { v4 as uuidv4 } from "uuid";
const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((response) => response.data)
      .then((data) => {
        dispatch(
          addNews({
            articles: [
              ...data.articles.map((obj) => ({ ["id"]: uuidv4(), ...obj })),
            ],
          })
        );
      })
      .catch((err) => redirect("/500"));
  }, []);

  return (
    <>
      <Navbar />
      <Hightlight />
    </>
  );
};

export default Layout;

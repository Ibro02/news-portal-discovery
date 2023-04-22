import { useState } from "react";

import { useDispatch } from "react-redux";
import axios from "axios";

import { addNews } from "../../store/slices/news";

import SearchBar from "../SearchBar/SearchBar";

import { v4 as uuidv4 } from "uuid";

const Navbar = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");
  
  const sortBy = (sort) => {
    if (!searchText) {
      return;
    }

    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchText}&sortBy=${sort}&pageSize=10&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) => {
        console.log(response)
        dispatch(addNews({ articles: [
          ...response.data.articles.map((obj) => ({ ["id"]: uuidv4(), ...obj })),
        ] }));
      });
  };

  return (
    <div className="flex md:flex-row flex-col py-5 px-10 items-center md:justify-between cursor-default">
      <div className="text-gray-900 text-4xl font-['Pacifico']">
        <h2>News Portal</h2>
      </div>

      <div className="flex text-gray-400 my-10 md:my-0 md:text-base text-2xl ">
        {searchText && (
          <ul className="flex flex-row justify-between gap-x-10 m-auto">
            <li
              className="cursor-pointer transition-all duration-400 hover:text-gray-900"
              onClick={() => sortBy("popularity")}
            >
              Popular
            </li>
            <li
              className="cursor-pointer transition-all duration-400 hover:text-gray-900"
              onClick={() => sortBy("relevancy")}
            >
              Relevant
            </li>
            <li
              className="cursor-pointer transition-all duration-400 hover:text-gray-900"
              onClick={() => sortBy("publishedAt")}
            >
              Latest
            </li>
          </ul>
        )}
      </div>

      <SearchBar onChange={(value) => setSearchText(value)} />
    </div>
  );
};

export default Navbar;

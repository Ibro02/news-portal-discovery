import axios from "axios";
import debounce from "lodash/debounce";

import { useDispatch } from "react-redux";

import { addNews } from "../../store/slices/news";
import { v4 as uuidv4 } from "uuid";

const SearchBar = ({ onChange }) => {
  const dispatch = useDispatch();

  const searchForTerm = debounce((value) => {
    if (value === "") {
      return;
    }

    axios
      .get(
        `https://newsapi.org/v2/everything?searchIn=title&pageSize=5&q=${value}&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) => {
        console.log(response.data.articles)
        dispatch(addNews({ articles: [
          ...response.data.articles.map((obj) => ({ ["id"]: uuidv4(), ...obj })),
        ] }));
        onChange(value);
      });
  }, 500);

  return (
    <div>
      <div className="flex box-border cursor-text relative">
        <form action="input">
          <input
            type="search"
            className="border-2 transition-all duration-1000 active:border-gray-500 p-3 shadow-inner box-border hover:shadow-none"
            onChange={(el) => searchForTerm(el.target.value)}
            placeholder="Search..."
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;

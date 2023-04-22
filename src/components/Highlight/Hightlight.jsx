import { useSelector } from "react-redux";

import { v4 as uuidv4 } from "uuid";

import Card from "../Card/Card";
import { useState } from "react";

const Hightlight = () => {
  const news = useSelector((state) => state.news.value);

   const [limit, setLimit] = useState(15);  //number of cards showed on the screen (you can set any number you want)

  return (
    <div className="text-xl flex flex-col items-center py-20">
      <div className="w-10/12  mx-auto">
        <h1 className="text-left  lg:text-7xl ml-3 font-['Bitter'] uppercase">
          Highlight news
        </h1>
        <div className="h-1  border-b-2 border-solid my-5"></div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap">
        {news.articles.length > 0 &&
          news.articles.map((i,k) => {
            // setNumOfElements(k);
            if (k<limit)
            {
              return (
                <Card
                key={uuidv4()}
                title={i?.title}
                badge={i?.source?.name}
                content={i?.content}
                date={i?.publishedAt}
                urlImg={i.urlToImage !== null && i.urlToImage}
                id={i.id}
                />
                );
              }
              })}
      </div>
      {news.articles.length >= limit && <button className="bg-black text-white hover:text-black hover:border-2 hover:bg-white p-4 mt-5 shadow-xl transition-all hover:shadow-none shadow-gray-300" onClick={()=>{setLimit(limit + 15)}}>See more</button>}        
    </div>
  );
};

export default Hightlight;

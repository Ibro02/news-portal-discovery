import { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import { useSelector } from "react-redux";

const Article = () => {
  const { articleName } = useParams();

  const articles = useSelector((state) => state.news.value.articles);

  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (articles.length > 0) {
      setArticle(articles.filter((el) => el.id === articleName)[0]);
    }
  }, [articles]);

  return (
    <>
      {article !== null && (
        <div className="p-5 md:w-1/2 mx-auto my-0">
          <Link to="/" className="underline  md:text-sm text-3xl font-['Comfortaa'] font-semibold">
          {"< Go back"}
          </Link>
          <div
            className="w-full mt-1 h-[65vh] bg-center bg-cover"
            style={{ backgroundImage: `url('${article.urlToImage}')` }}
          ></div>
          <h1 className="mt-2 text-3xl font-bold">{article.title}</h1>
          <h2 className="mt-1 text-2xl font-semibold">{article.description}</h2>
          <p className="mt-3 text-justify text-lg">{article.content}</p>

          <h5 className="mt-2">
            Posted:
            <span className="font-semibold">
              {new Date(article.publishedAt).toDateString()}
            </span>
          </h5>

          <h5 className="mt-5">
            Source: <span className="font-semibold">{article.source.name}</span>
          </h5>
          <Link to={article.url}>
            <h5 className="hover:underline">Visit original post</h5>
          </Link>
        </div>
      )}
    </>
  );
};

export default Article;

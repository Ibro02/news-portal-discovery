import { Link } from "react-router-dom";

const Card = ({ title, badge, date, content, urlImg, id }) => {
  return (
    <div className={" items-center flex flex-col-reverse rounded-md p-2 gap-5 whitespace-normal m-auto shadow-lg shadow-gray-300 md:w-2/5"}>
      <div className="w-full space-y-2">
        <h4 className="px-4 py-2 w-fit text-sm rounded-3xl bg-red-900 text-white">
          {badge}
        </h4>
        <h2 className="text-3xl">{title}</h2>
        <h3 className="text-lg">{new Date(date).toDateString()}</h3>
        <p className="text-justify text-lg leading-8">{content}</p>
        <Link to={`/article/${id}`}>
          <h5 className={"underline cursor-pointer text-base"}>Read more</h5>
        </Link>
      </div>
      <div className="w-full xl:h-96 h-52 flex">
      <div
        className={`w-full h-full min-h-full my-auto bg-cover box-border bg-center bg-no-repeat`}
        style={{
          backgroundImage: `url('${urlImg}')`,
        }}
        ></div>
        </div>
    </div>
  );
};

export default Card;

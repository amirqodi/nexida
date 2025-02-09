import React from "react";
import Image from "next/image";

interface ArticleProps {
  title: string;
  description: string;
  image?: string;
  price: string;
}

const Article: React.FC<ArticleProps> = ({
  title,
  description,
  image,
  price,
}) => {
  return (
    <article className="bg-articlebg  rounded-lg shadow-lg flex flex-col items-center aspect-[5/6]">
      <Image
        src={image || "/default-image.jpg"}
        alt={title}
        className=" mb-1"
        width={500}
        height={600}
      />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-400 text-[12px] text-center mb-auto max-w-[450] mt-5">
        {description}
      </p>
      <div className="my-4 w-full flex flex-col items-center justify-center">
        <p className="text-lg font-bold">{price}</p>
        <button className="bg-red-600 w-[90%] py-2 mt-2 rounded hover:bg-red-700">
          Buy Now
        </button>
      </div>
    </article>
  );
};

export default Article;

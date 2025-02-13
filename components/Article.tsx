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
    <article className="bg-[#1a1a1a] rounded-lg shadow-lg flex flex-col items-center overflow-hidden max-w-sm">
      {/* Product Image */}
      <div className="w-full">
        <Image
          src={image || "/default-image.png"}
          alt={title}
          width={600}
          height={350}
          className="w-full object-cover rounded-t-lg"
        />
      </div>

      {/* Content Section */}
      <div className="p-5 text-center w-full">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-gray-400 text-[12px] mt-2 h-32 md:text-sm">
          {description}
        </p>

        {/* Price */}
        <p className="text-white text-lg font-bold mt-4">{price}</p>

        {/* Buy Now Button */}
        <button className="bg-red-600 w-full py-2 mt-4 rounded-md text-white font-semibold hover:bg-red-700 transition">
          Buy Now
        </button>
      </div>
    </article>
  );
};

export default Article;

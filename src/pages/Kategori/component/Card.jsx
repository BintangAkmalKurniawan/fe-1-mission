import React from "react";
const Card = ({ title, instructor, price, rating, image }) => {
  const [name, role] = instructor.split("\n");

  return (
    <div className="flex flex-col items-start gap-3 bg-white p-3 rounded-lg shadow-sm ">
      <div className="flex gap-3">
        <img src={image} alt="thumbnail" className="w-24 h-24 rounded-md object-cover" />
        <div className="flex-1">
          <h3 className="font-semibold text-sm text-gray-900 leading-tight">{title}</h3>
          <div className="flex items-center mt-1 gap-2">
            <img src="/avatar/satu.png" alt="avatar" className="w-6 h-6 rounded-full" />
            <div>
              <p className="text-xs font-medium">{name}</p>
              <p className="text-xs text-gray-400 mt-0">{role}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-[140px]">
        <div className="flex items-center gap-1 text-xs text-yellow-400 mt-1">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>{rating}</span>
        </div>
        <div className="text-green-600 font-semibold text-sm ">{price}</div>
      </div>
    </div>
  );
};

export default Card;

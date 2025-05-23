import { useNavigate } from "react-router";
import { useState } from "react";

const Card = ({ course }) => {
  const [name, role] = course.instructor.split("\n");
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate("/detail", {
      state: {
        title: course.title,
        instructor: course.instructor,
        price: course.price,
        rating: course.rating,
        image: course.image,
        description: course.description,
      },
    });
  };

  const [formatPrice, setFormatPrice] = useState("");

  return (
    <div className="flex flex-col md:flex-col bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer" onClick={handleClickCard}>
      <div className="flex flex-row md:flex-col gap-3">
        <img src={course.image} alt="thumbnail" className="w-24 h-24 md:w-full md:h-40 rounded-md object-cover" />
        <div className="flex-1">
          <h3 className="font-semibold text-sm text-gray-900 leading-tight">{course.title}</h3>
          <div className="flex items-center mt-1 gap-2">
            <img src="/avatar/satu.png" alt="avatar" className="w-6 h-6 rounded-full" />
            <div>
              <p className="text-xs font-medium">{name}</p>
              <p className="text-xs text-gray-400">{role}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-1 text-xs text-yellow-400">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span className="text-gray-400">{course.rating}</span>
        </div>
        <div className="text-green-600 font-semibold text-sm">{course.price}</div>
      </div>
    </div>
  );
};

export default Card;

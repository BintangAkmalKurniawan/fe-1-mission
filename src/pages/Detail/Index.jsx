// src/pages/Detail/Index.jsx
import { useLocation } from "react-router-dom";

const Detail = () => {
  const { state } = useLocation();

  if (!state) return <div className="p-4">Data tidak tersedia</div>;

  const { title, instructor, price, rating, image, description } = state;
  const [name, role] = instructor.split("\n");

  return (
    <div className="p-4">
      <img src={image} alt={title} className="w-full h-60 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-3">{title}</h1>
      <p className="text-gray-600">
        {name} - {role}
      </p>
      <p className="text-yellow-500 font-semibold">⭐ {rating}</p>
      <p className="text-green-600 font-semibold text-lg">{price}</p>
      <p className="mt-4 text-sm text-gray-700">{description}</p>

      {/* Bisa ditambahin section lain: list materi, rating & review, dll */}
    </div>
  );
};

export default Detail;

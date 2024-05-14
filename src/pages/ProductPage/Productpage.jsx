import { useEffect, useState } from "react";
import { getProductById } from "../../api";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((e) => console.log(e.message));
  }, [id]);

  const { title, price, category, description, image, rating } = product;

  return (
    <div className="container mx-auto h-full flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid- gap-8">
        <div className="product-image">
          <img
            src={image}
            alt={title}
            className="w-96 h-auto object-cover rounded-lg"
          />
        </div>
        <div className="product-info">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-xl font-semibold mb-2">${price}</p>
          <p className="text-gray-600 mb-2">{category}</p>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex items-center">
            <p className="text-gray-800 mr-4">Rating: {rating?.rate}</p>
            <p className="text-gray-800">Reviews: {rating?.count}</p>
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4 hover:bg-blue-600 focus:outline-none">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

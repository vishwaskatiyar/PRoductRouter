import { memo } from "react";
import PropTypes from "prop-types";

const ProductCart = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product.id)}
      className=" m-4 product-card bg-white w-80 mx-auto rounded-lg shadow-2xl p-4 mb-6 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
    >
      <img
        src={product.image}
        alt={product.title}
        className="w-40 h-40 mx-auto mb-4  object-cover"
      />
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {product.title}
        </h2>
        <p className="text-gray-700 mb-2">${product.price}</p>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductCart.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};
const MemorizeProductCat = memo(ProductCart);

export default MemorizeProductCat;

import { useCallback, useEffect, useState } from "react";
import { getAllProducts } from "../../api";
import ProductCart from "../../component/ProductCard/ProductCart";
import { useNavigate } from "react-router-dom";

const Homepage = (props) => {
  console.log(props);
  const [products, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts()
      .then((data) => setProduct(data))
      .catch((e) => console.log(e.message));
  }, []);

  const onProductCLick = useCallback(
    (id) => {
      navigate(`/product/${id}`);
    },
    [navigate]
  );

  const renderProduct = () => {
    return products.map((product) => (
      <ProductCart
        product={product}
        key={product.id}
        onClick={onProductCLick}
      />
    ));
  };

  return <div className="flex flex-wrap">{renderProduct()}</div>;
};
export default Homepage;

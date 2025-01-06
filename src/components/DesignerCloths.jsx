import React from "react";
import { useProducts } from "../context/ProductContext";

const DesignerCloths = () => {
  const { designerProducts } = useProducts();

  return (
    <div className="container my-5 py-5 text-center">
      <p className="my-font">Designer Cloths For You</p>
      <p>
        Immerse yourself in the world of luxury fashion with our meticulously
        crafted designer clothes!
      </p>
      <div className="row my-5">
        {designerProducts.map((product) => (
          <div className="col-md-4" key={product.id}>
            <img
              src={product.images[1]}
              alt={product.title}
              className="product-image"
            />
            <h5 className="product-title">{product.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignerCloths;
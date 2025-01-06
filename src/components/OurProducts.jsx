import React from "react";
import { useProducts } from "../context/ProductContext";
import "../styles/out-products.css";

const OurProducts = () => {
  const { ourProducts, loading } = useProducts();

  return (
    <div className="container my-5">
      <div className="my-font text-center mb-5">Our Products</div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          {ourProducts.map((product) => (
            <div key={product.id} className="col-md-3 mt-4">
              <div className="product-item">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="img-fluid"
                />
                <h5 className="product-title mt-3 text-center">
                  {product.title}
                </h5>
                <p className="product-price text-center">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OurProducts;

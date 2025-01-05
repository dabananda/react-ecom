import React, { useEffect, useState } from "react";
import "../styles/out-products.css";

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products?offset=8&limit=8"
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container my-5">
      <div className="my-font text-center mb-5">Our Products</div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 mt-4">
              <div className="product-item">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="img-fluid"
                />
                <h5 className="product-title mt-3 text-center">{product.title}</h5>
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

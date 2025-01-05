import React, { useEffect, useState } from "react";

const DesignerCloths = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/categories/1/products?offset=3&limit=3"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container my-5 py-5 text-center">
      <p className="my-font">Designer Cloths For You</p>
      <p>
        Immerse yourself in the world of luxury fashion with our meticulously
        crafted designer clothes!
      </p>
      {
        <div className="row my-5">
          {products.map((product) => (
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
      }
    </div>
  );
};

export default DesignerCloths;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "../styles/best-selling.css";
import { Link } from "react-router-dom";

const BestSelling = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products?offset=10&limit=10"
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container text-center py-5">
      <div className="my-font">Best Selling</div>
      <div className="mt-3 mb-5">
        Get in on the trend with our curated selection of best-selling styles.
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="carousel-container">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="product-image"
                />
                <h5 className="product-title">{product.title}</h5>
                <p className="product-price">${product.price}</p>
              </div>
            ))}
          </Slider>
        </div>
      )}
      <Link to="/shop" className="btn btn-outline-success btn-lg px-5 mt-5">
        See all <i className="bi bi-arrow-right"></i>
      </Link>
    </div>
  );
};

export default BestSelling;

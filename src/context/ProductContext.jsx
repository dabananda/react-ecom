import React, { createContext, useState, useContext, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [designerProducts, setDesignerProducts] = useState([]);
  const [ourProducts, setOurProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDesignerProducts = async () => {
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/categories/1/products?offset=3&limit=3"
      );
      const data = await response.json();
      setDesignerProducts(data);
    } catch (error) {
      console.error("Error fetching designer products:", error);
    }
  };

  const fetchOurProducts = async () => {
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products?offset=8&limit=8"
      );
      const data = await response.json();
      setOurProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching our products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchAllProducts = async () => {
      await Promise.all([fetchDesignerProducts(), fetchOurProducts()]);
    };

    fetchAllProducts();
  }, []);

  const value = {
    designerProducts,
    ourProducts,
    loading,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};

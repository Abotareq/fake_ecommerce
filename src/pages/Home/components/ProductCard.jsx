import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg p-4 transition-shadow duration-200 bg-cyan-400">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-4 rounded-md bg-white p-2"
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2 truncate">
        {product.title}
      </h2>
      <p className="text-gray-700 font-bold mb-4">${product.price}</p>
      <button className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition-colors">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

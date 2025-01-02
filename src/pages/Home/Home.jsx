import React, { useContext } from "react";

import { productContext } from "../../contexts/ProductProvider";
import ProductCard from "./components/productCard";

export default function Home() {
  const { products } = useContext(productContext);

  const productfiltering = (filter) => {
    return products.filter((item) => {
      return item.category === filter;
    });
  };
  const mansClothing = productfiltering("men's clothing");
  const womansClothing = productfiltering("women's clothing");

  console.log(mansClothing);
  return (
    <>
      <section>
        <div className="container mx-auto w-10/12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-sm mx-auto md:max-w-none md:mx-0">
            {womansClothing.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
/*  <div
                  className="w-full h-[300px] mb-4 mx-2 bg-cyan-400 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  key={product.id}
                >
                  {product.title}
                </div> */

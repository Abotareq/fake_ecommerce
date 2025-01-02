import { data } from "autoprefixer";
import { createContext, useEffect, useState } from "react";
import { getData } from "../services/apiServices";
import { productURL } from "../utilities/utils";

export const productContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const data = await getData(productURL);
      setProducts(data);
    };
    getProduct();
  }, []);

  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;

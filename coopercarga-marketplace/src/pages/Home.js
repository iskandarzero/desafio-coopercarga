import { useEffect, useState } from "react";
import fetchApi from "../services/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      setProducts(await fetchApi())
    }

    getProducts()
  }, [])

  return (
    <div>
      {products.length > 0 ?
        products.map((product, i) => <ProductCard product={product} key={i} />) :
        <h1>Carregando...</h1>
      }
    </div>
  );  
}
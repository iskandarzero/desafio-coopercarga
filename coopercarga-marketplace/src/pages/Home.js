import { useEffect, useState } from "react";
import fetchApi from "../services/api";
import ProductCard from "../components/ProductCard";
import Banner from "../components/Banner";
import _ from 'lodash'

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sizeFilter, setSizeFilter] = useState([]);
  const sizeArr = ["P", "M", "G", "GG", "XPP", "44", "39"];
  const sportArr = ["Futebol", "Basquete", "Corrida"];
  const typeArr = ["Camiseta", "Calção", "Regata", "Acessório"];

  useEffect(() => {
    const getProducts = async () => {
      setProducts(await fetchApi());
    }

    getProducts();
  }, [])

  function handleSizeFilter(size) {
    const newArr = [];
    let filter = [];

    if (sizeFilter.includes(size)) {
      newArr.push(sizeFilter);
      const index = newArr.indexOf(size);
      newArr.splice(index, 1);
    } else {
      newArr.push(...sizeFilter, size);
    }

    if (filteredProducts.length > 0) {
      filter = filteredProducts.filter((product) =>
        _.intersection(product.available_sizes, newArr).length > 0);
    } else {
      filter = products.filter((product) =>
        _.intersection(product.available_sizes, newArr).length > 0);
    }
    
    setFilteredProducts(filter);
    setSizeFilter(newArr);
  }

  function filterByPrice(price) {
    let filter = [];

    switch(price) {
      case 1:
        filter = products.filter((product) =>
          product.price <= 100);
        break;
      case 2:
        filter = products.filter((product) =>
          product.price > 100 && product.price <= 200);
        break;
      case 3:
        filter = products.filter((product) =>
          product.price > 200 && product.price <= 300);
        break;
      case 4:
        filter = products.filter((product) =>
          product.price > 300 && product.price <= 400);
        break;
      default:
        filter = products.filter((product) =>
          product.price > 400);
    }

    setFilteredProducts(filter);
  }

  function filterByType(type) {
    const filter = products.filter((product) => product.type === type);

    setFilteredProducts(filter);
  }

  function filterBySport(sport) {
    const filter = products.filter((product) => product.sport === sport);

    setFilteredProducts(filter);
  }

  return (
    <div className="w-100">
      <Banner />
      <div className="d-flex justify-content-center align-items-center dropdown mb-3">
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle m-1"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Tamanho
          </button>
          <div
            className="dropdown-menu text-center"
            aria-labelledby="dropdownMenuButton1"
          >
            {sizeArr.map((size, i) =>
              <button
                onClick={() =>handleSizeFilter(size)}
                className="dropdown-item"
                key={i}
              >
                {size}
              </button>)
            }
          </div>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle m-1"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Preço
          </button>
          <div
            className="dropdown-menu text-center"
            aria-labelledby="dropdownMenuButton1"
          >
            <button className="dropdown-item" onClick={() => filterByPrice(1)}>
              Até R$ 100
            </button>
            <button className="dropdown-item" onClick={() => filterByPrice(2)}>
              R$ 100 - R$ 200
            </button>
            <button className="dropdown-item" onClick={() => filterByPrice(3)}>
              R$ 200 - R$ 300
            </button>
            <button className="dropdown-item" onClick={() => filterByPrice(4)}>
              R$ 300 - R$ 400
            </button>
            <button className="dropdown-item" onClick={() => filterByPrice(5)}>
              Acima de R$ 400
            </button>
          </div>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle m-1"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Esporte
          </button>
          <div
            className="dropdown-menu text-center"
            aria-labelledby="dropdownMenuButton1"
          >
            {sportArr.map((sport, i) =>
              <button
                onClick={() => filterBySport(sport)}
                className="dropdown-item"
                key={i}
              >
                {sport}
              </button>)
            }
          </div>
        </div>
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle m-1"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categoria
          </button>
          <div
            className="dropdown-menu text-center"
            aria-labelledby="dropdownMenuButton1"
          >
            {typeArr.map((type, i) =>
              <button
                onClick={() => filterByType(type)}
                className="dropdown-item"
                key={i}
              >
                {type}
              </button>)
            }
          </div>
        </div>
        <button
          className="btn btn-outline-secondary btn-light"
          onClick={() => setFilteredProducts([])}
        >
          Limpar Filtros
        </button>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center flex-wrap w-75">
          {filteredProducts.length > 0 ? filteredProducts.map((product, i) =>
            <ProductCard product={product} key={i} />) :
            products.length > 0 && products.map((product, i) =>
            <ProductCard product={product} key={i} />)
          }
        </div>
      </div>
    </div>
  );  
}
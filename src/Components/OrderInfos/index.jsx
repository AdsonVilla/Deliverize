import { useState, useEffect } from "react";
import "./OrderInfos.css";

export function OrderInfos() {
  const [productInfos, setProductInfos] = useState([]);

  const productInfosApi =
    "https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products";
  useEffect(() => {
    fetch(productInfosApi)
      .then((response) => response.json())
      .then((data) => setProductInfos(data));
  }, []);
  return (
    <div className="c-order__infos">
      <div className="infos__img">
        <img src="./foto-produto.png" alt="Imagem-produto" />
      </div>

      {productInfos.map((product) => {
        return (
          <div key={product.id} className="infos__items">
            <h2>{product.nm_product}</h2>
            <p>{product.description}</p>
            <div className="item__price">
              <span>R${product.vl_discount}</span>
              <span>R${product.vl_price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import "./OrderAddInfos.css";
import { ExtraItems } from "../ExtraItems";
import { useState, useEffect } from "react";

export function OrderAddInfos() {
  const [productInfos, setProductInfos] = useState([]);

  const productInfosApi =
    "https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products";
  useEffect(() => {
    fetch(productInfosApi)
      .then((response) => response.json())
      .then((data) => setProductInfos(data[0].ingredients[0].itens));
  }, []);
  //   console.log(productInfos[0].nm_item);

  return (
    <div className="c-order__addInfos">
      <div className="addInfos__header">
        <h4>Adicionar Ingredientes</h4>
        <span>Até 8 ingredientes.</span>
      </div>

      {productInfos.map((item) => {
        return (
          <ExtraItems name={item.nm_item} price={item.vl_item} key={item.id} />
        );
      })}

      {/* <div className="addInfos__quantities">
        <div className="quantities__item">
          <div className="item__infos">
            <h4>Queijo cheddar</h4>
            <span>+ R$4,99</span>
          </div>
          <div className="item__quantity">
            <IoIosAdd style={{ color: "#D80000", width: "14px" }} />
            <span>1</span>
            <IoIosRemove style={{ color: "#D80000", width: "14px" }} />
          </div>
        </div>
        <hr />
      </div> */}
    </div>
  );
}

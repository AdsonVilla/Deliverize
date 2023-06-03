import "./OrderAddInfos.css";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
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
          <div>
            <ExtraItems
              name={item.nm_item}
              price={item.vl_item}
              key={item.id}
            />
            {item.id !== item.length - 1 && <hr />}
          </div>
        );
      })}

      <div className="addInfos__cutlery">
        <h4>Precisa de Talher?</h4>
      </div>
      <div className="cutlery__confirmation">
        <div className="confirmation__tag">
          <label for="Yes">Sim</label>
          <input
            type="radio"
            id="Yes"
            name="Yes"
            value={true}
            style={{ borderColor: "#FEBC10" }}
          />
        </div>
        <div className="confirmation__tag">
          <label>Não</label>
          <input
            type="radio"
            id="No"
            name="No"
            value={false}
            style={{ borderColor: "#FEBC10" }}
          />
        </div>
      </div>

      <div className="addInfos__confirmOrder">
        <div className="confirmOrder__quantity">
          <IoIosRemove
            style={{ color: "#ED3237", width: "14px", height: "14px" }}
          />
          <span>1</span>
          <IoIosAdd
            style={{ color: "#ED3237", width: "14px", height: "14px" }}
          />
        </div>
        <button>Adicionar</button>
      </div>

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

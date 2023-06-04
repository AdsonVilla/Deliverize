import "./OrderAddInfos.css";
import { BiPlus, BiMinus } from "react-icons/bi";
import { ExtraItems } from "../ExtraItems";
import { useState, useEffect } from "react";
import { PopoverComponent } from "../Popover";

export function OrderAddInfos() {
  const [productInfos, setProductInfos] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  function handleIncrementQuantity() {
    setQuantity(quantity + 1);
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleOptionChange(option) {
    setSelectedOption(option);
  }

  function handleAddToCart(event) {
    setAnchorEl(event.currentTarget);
    setTimeout(() => {
      setAnchorEl(null);
    }, 3000);
  }

  const productInfosApi =
    "https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products";
  useEffect(() => {
    fetch(productInfosApi)
      .then((response) => response.json())
      .then((data) => setProductInfos(data[0].ingredients[0].itens));
  }, []);

  return (
    <div className="oderAddInfos__wrapper">
      <div className="c-order__addInfos">
        <div className="addInfos__header">
          <h4>Adicionar Ingredientes</h4>
          <span>Até 8 ingredientes.</span>
        </div>

        {productInfos.map((item) => {
          return (
            <ExtraItems
              name={item.nm_item}
              price={item.vl_item}
              key={item.id}
            />
          );
        })}

        <div className="cutlery__container">
          <div className="addInfos__cutlery">
            <h4>Precisa de Talher?</h4>
          </div>
          <div className="cutlery__confirmation">
            <div className="confirmation__tag">
              <label htmlFor="Yes">Sim</label>
              <input
                type="radio"
                id="Yes"
                name="Yes"
                value="Sim"
                style={{ borderColor: "1px solid #FEBC10" }}
                checked={selectedOption === "Sim"}
                onChange={() => handleOptionChange("Sim")}
              />
            </div>
            <div className="confirmation__tag">
              <label htmlFor="No">Não</label>

              <input
                type="radio"
                id="No"
                name="No"
                value="Não"
                style={{ border: 0 }}
                checked={selectedOption === "Não"}
                onChange={() => handleOptionChange("Não")}
              />
            </div>
          </div>
        </div>

        <div className="addInfos__confirmOrder">
          <div className="confirmOrder__quantity">
            <BiMinus
              style={
                quantity !== 1
                  ? { color: "#D80000", width: "24px", height: "24px" }
                  : { color: "#AEB6C1", width: "24px", height: "24px" }
              }
              onClick={handleDecrementQuantity}
            />
            <span>{quantity}</span>
            <BiPlus
              style={{ color: "#ED3237", width: "24px", height: "24px" }}
              onClick={handleIncrementQuantity}
            />
          </div>
          <button onClick={handleAddToCart}>Adicionar</button>

          <PopoverComponent
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorReference="anchorPosition"
            anchorPosition={{ top: -1, left: 1050 }}
          />
        </div>
      </div>
    </div>
  );
}

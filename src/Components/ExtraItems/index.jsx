import { IoIosAdd, IoIosRemove } from "react-icons/io";
import "./ExtraItems.css";
import { useState } from "react";

export function ExtraItems({ name, price }) {
  const [itemQuantity, setItemQuantity] = useState(0);

  function handleIncrementQuantity() {
    setItemQuantity(itemQuantity + 1);
  }

  function handleDecrementQuantity() {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
    }
  }

  return (
    <div className="addInfos__quantities">
      <div className="quantities__item">
        <div className="item__infos">
          <h4>{name || ""}</h4>
          <span>+ R${price || ""}</span>
        </div>
        <div className="item__quantity">
          <IoIosRemove
            style={
              itemQuantity !== 0
                ? { color: "#D80000", width: "16px" }
                : { color: "#AEB6C1", width: "16px" }
            }
            onClick={handleDecrementQuantity}
          />
          <span>{itemQuantity}</span>
          <IoIosAdd
            style={{ color: "#D80000", width: "14px" }}
            onClick={handleIncrementQuantity}
          />
        </div>
      </div>
      <hr />
    </div>
  );
}

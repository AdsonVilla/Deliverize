import { IoIosAdd, IoIosRemove } from "react-icons/io";
import "./ExtraItems.css";
// import { useState, useEffect } from "react";

export function ExtraItems({ name, price }) {
  return (
    <div className="addInfos__quantities">
      <div className="quantities__item">
        <div className="item__infos">
          <h4>{name || ""}</h4>
          <span>+ R${price || ""}</span>
        </div>
        <div className="item__quantity">
          <IoIosRemove style={{ color: "#D80000", width: "14px" }} />
          <span>1</span>
          <IoIosAdd style={{ color: "#D80000", width: "14px" }} />
        </div>
      </div>
      <hr />
    </div>
  );
}

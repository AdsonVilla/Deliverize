import { OrderInfos } from "../OrderInfos";
import "./OrderContainer.css";

export function OrderContainer() {
  return (
    <div className="c-order">
      <OrderInfos />
      <div className="c-order__addInfos"></div>
    </div>
  );
}

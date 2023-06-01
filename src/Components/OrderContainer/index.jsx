import { OrderAddInfos } from "../OrderAddInfos";
import { OrderInfos } from "../OrderInfos";
import "./OrderContainer.css";

export function OrderContainer() {
  return (
    <div className="c-order">
      <OrderInfos />
      <OrderAddInfos />
    </div>
  );
}

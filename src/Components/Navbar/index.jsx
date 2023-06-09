import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { RiAccountCircleLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useState } from "react";
import "./Navbar.css";

export function Navbar() {
  const [cartItemCount, setCartItemCount] = useState(1);
  return (
    <nav>
      <div className="c-menu">
        <div className="c-menu__arrow">
          <IoIosArrowBack style={{ color: "#686868" }} />
        </div>
        <img src="/Deliverize-logo.svg" alt="Logo-Deliverize" />
        <div className="c-menu__items">
          <div className="c-menu__delivery">
            <div className="delivery__info">
              <span>Entrega:</span>
              <p>R. Antonio Braune, 222</p>
            </div>
            <div>
              <IoIosArrowDown style={{ color: "#D80000" }} />
            </div>
          </div>
          <div className="c-menu__search">
            <input
              type="text"
              placeholder="Busque por estabelecimento ou protudos"
            />
          </div>
          <div className="c-menu__login">
            <a href="#">
              <RiAccountCircleLine
                style={{ color: "#ED3237", width: "32px", height: "32px" }}
              />
              <span>Entrar</span>
            </a>
          </div>
          <div className="c-menu__cart">
            <a href="#">
              <div className="cart__icon">
                <MdOutlineShoppingCart
                  style={{ color: "#ED3237", width: "32px", height: "32px" }}
                />
                {cartItemCount > 0 && (
                  <span className="cart__notification">{cartItemCount}</span>
                )}
              </div>
              <span>Carrinho</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

import "./OrderAddInfos.css";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { ExtraItems } from "../ExtraItems";
import { Popover, Typography, List, ListItem, AlertTitle } from "@mui/material";
import { useState, useEffect } from "react";

export function OrderAddInfos() {
  const [productInfos, setProductInfos] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  function handleIncrementQuantity() {
    setQuantity(quantity + 1);
  }

  function handleDecrementQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
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
  //   console.log(productInfos[0].nm_item);

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
        </div>

        <div className="addInfos__confirmOrder">
          <div className="confirmOrder__quantity">
            <IoIosRemove
              style={
                quantity !== 1
                  ? { color: "#D80000", width: "16px" }
                  : { color: "#AEB6C1", width: "16px" }
              }
              onClick={handleDecrementQuantity}
            />
            <span>{quantity}</span>
            <IoIosAdd
              style={{ color: "#ED3237", width: "14px", height: "14px" }}
              onClick={handleIncrementQuantity}
            />
          </div>
          <button onClick={handleAddToCart}>Adicionar</button>

          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorReference="anchorPosition"
            anchorPosition={{ top: -1, left: 1050 }}
          >
            <Typography sx={{ p: 2, bgcolor: "#F09035", color: "#FFFF" }}>
              Adicionado com sucesso!
            </Typography>
            <List sx={{ p: 2 }}>
              <AlertTitle
                sx={{
                  color: "#BC2E31",
                  fontWeight: "700",
                }}
              >
                Oferta Cheddar Bacon
              </AlertTitle>
              <AlertTitle sx={{ color: "#4E4E4E" }}>
                Ingredientes:
                <List>
                  <ListItem>1 Carne 250gr</ListItem>
                  <ListItem>2 Queijo Cheddar</ListItem>
                  <ListItem>1 Bacon</ListItem>
                  <ListItem>Molho Especial</ListItem>
                </List>
              </AlertTitle>
            </List>
          </Popover>
        </div>
      </div>
    </div>
  );
}

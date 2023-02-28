import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProductFromCart } from "../../redux/actions";
import Counter from "../Counter";
import { IState, CartItem } from "../../constants/types";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { setItem } from "../../utils";

import * as Styled from "./Cart.styled";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: Function;
};

const CartModal: FC<Props> = ({ isModalOpen, setIsModalOpen }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: IState) => state.cart);

  useEffect(() => {
    setItem("cart", cart);
  }, [cart]);

  const getCartCost = () =>
    cart.reduce((acc, el) => {
      return acc + el.price * el.quantity;
    }, 0);

  return (
    <Styled.Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <Styled.Box>
        {cart.length > 0 ? (
          <>
            <h2>Кошик</h2>
            <TableContainer
              component={Paper}
              sx={{ boxShadow: "none", marginBottom: "20px" }}
            >
              <Table sx={{ maxWidth: 800 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Товар</TableCell>
                    <TableCell align="right" sx={{ paddingRight: "30px" }}>
                      Кількість
                    </TableCell>
                    <TableCell align="center">Ціна</TableCell>
                    <TableCell align="right"></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((product: CartItem, i: number) => (
                    <TableRow key={i} className="cartRow">
                      <TableCell component="th" scope="row">
                        <Styled.Product>
                          <img
                            src={product.img}
                            style={{ width: "90px", height: "90px" }}
                            alt="cover"
                          />
                          <Styled.ProductInfo>
                            <Styled.AuthorName>
                              {product.authorName}
                            </Styled.AuthorName>
                            <Styled.Album>{product.album}</Styled.Album>
                          </Styled.ProductInfo>
                        </Styled.Product>
                      </TableCell>
                      <TableCell align="right">
                        <Counter product={product} />
                      </TableCell>
                      <TableCell
                        align="right"
                        style={{ fontWeight: "700" }}
                      >{`${product.price}грн`}</TableCell>
                      <TableCell align="right">
                        <Styled.DeleteButton
                          onClick={() =>
                            dispatch(deleteProductFromCart(product.id))
                          }
                        >
                          <DeleteIcon sx={{ color: "#3c3c3c" }} />
                        </Styled.DeleteButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Styled.OrderInfoContainer>
              <Styled.Total>
                {`Підсумок: 
                ${getCartCost()} грн`}
              </Styled.Total>
              <Styled.BuyButton onClick={() => setIsModalOpen(false)}>
                Придбати
              </Styled.BuyButton>
            </Styled.OrderInfoContainer>
          </>
        ) : (
          <h2>Кошик пустий</h2>
        )}

        <Styled.CloseButton onClick={() => setIsModalOpen(false)}>
          <Styled.CloseIcon />
        </Styled.CloseButton>
      </Styled.Box>
    </Styled.Modal>
  );
};

export default CartModal;

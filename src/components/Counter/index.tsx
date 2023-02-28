import { FC } from "react";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartItem } from "../../constants/types";
import {
  decrementProductQuantity,
  incrementProductQuantity,
} from "../../redux/actions";

import * as Styled from "./Counter.styled";

type Props = {
  product: CartItem;
};

const Counter: FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <Styled.Counter>
      <Styled.Button
        onClick={() => {
          dispatch(decrementProductQuantity(product.id));
        }}
      >
        <RemoveIcon sx={{ fontSize: "20px" }} />
      </Styled.Button>
      <Styled.Quantity>{product.quantity}</Styled.Quantity>
      <Styled.Button
        onClick={() => {
          dispatch(incrementProductQuantity(product.id));
        }}
      >
        <AddIcon sx={{ fontSize: "20px" }} />
      </Styled.Button>
    </Styled.Counter>
  );
};

export default Counter;

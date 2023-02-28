import {
  Container as MUIContainer,
  Box as MUIBox,
  Typography as MUITypography,
  Button as MUIButton,
} from "@mui/material";
import {
  FavoriteBorder,
  PersonOutline,
  ShoppingCart,
} from "@mui/icons-material";

import styled from "styled-components";

export const Page = styled(MUIContainer)`
  padding: 0 !important;
`;

export const PageBanner = styled(MUIBox)`
  z-index: 0;
`;

export const Header = styled(MUIBox)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  padding: 10px;
`;

export const Title = styled(MUITypography)`
  display: flex;
  align-items: center;
  color: #fff;
  width: 50%;
  margin-left: 15px !important;
  z-index: 2;
`;

export const Navigation = styled(MUIBox)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  z-index: 2;
`;

export const LikeIcon = styled(FavoriteBorder)`
  font-size: 30px !important;
  color: #fff;
  margin: 0 10px;
  cursor: pointer;
  :hover {
    color: #d1b280;
  }
`;

export const PersonIcon = styled(PersonOutline)`
  font-size: 35px !important;
  color: #fff;
  margin: 0 10px;
  cursor: pointer;
  :hover {
    color: #d1b280;
  }
`;

export const Button = styled(MUIButton)``;

export const CartIcon = styled(ShoppingCart)`
  font-size: 30px !important;
  color: #fff;
  margin: 0 10px;
  cursor: pointer;
  :hover {
    color: #d1b280;
  }
`;

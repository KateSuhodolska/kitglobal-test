import {
  Modal as MUIModal,
  Button as MUIButton,
  Box as MUIBox,
  Typography as MUITypography,
  TableContainer as MUITableContainer,
} from "@mui/material";
import { Close as MUICloseIcon } from "@mui/icons-material";

import styled from "styled-components";

export const Modal = styled(MUIModal)`
  border: none;
  overflow-y: scroll;
`;

export const Box = styled(MUIBox)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 850px;
  background-color: #fff;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  max-height: 90vh;
`;

export const CloseButton = styled(MUIButton)`
  position: absolute !important;
  top: 15px;
  right: 5px;
  cursor: pointer;
`;

export const CloseIcon = styled(MUICloseIcon)`
  color: #3c3c3c;
  font-size: 24px !important;
  font-weight: 600 !important;
`;

export const Product = styled(MUIBox)`
  display: flex;
  margin: 15px 0;
`;

export const ProductInfo = styled(MUIBox)`
  margin-left: 15px;
`;

export const AuthorName = styled(MUITypography)`
  font-size: 16px !important;
`;

export const Album = styled(MUITypography)`
  font-size: 17px !important;
  font-weight: 700 !important;
`;

export const TableContainer = styled(MUITableContainer)`
  box-shadow: none;
`;

export const DeleteButton = styled(MUIButton)`
  cursor: pointer;
  color: #000;
`;

export const OrderInfoContainer = styled(MUIBox)`
  position: absolute !important;
  right: 30px;
  bottom: 15px;
  display: flex;
  align-items: center;
`;

export const Total = styled(MUITypography)`
  margin-right: 20px !important;
`;

export const BuyButton = styled(MUIButton)`
  min-width: 70px !important;
  height: 50px !important;
  border-radius: 5px;
  font-size: 24px;
  color: #fff !important;
  background-color: #85461e !important;
`;

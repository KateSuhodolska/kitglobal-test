import {
  Container as MUIContainer,
  Card as MUICard,
  Box as MUIBox,
  CardContent as MUICardContent,
  CardMedia as MUICardMedia,
  Typography as MUITypography,
  Button as MUIButton,
} from "@mui/material";

import styled from "styled-components";

export const Catalog = styled(MUIContainer)`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const CatalogTitle = styled(MUITypography)`
  color: #4e4e4e;
  text-transform: uppercase;
  margin: 20px 0 !important;
`;

export const CardsContainer = styled(MUIBox)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProductCard = styled(MUICard)`
  width: 250px !important;
  box-shadow: none !important;
  padding: 10px 15px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardMedia = styled(MUICardMedia)``;

export const CardContent = styled(MUICardContent)`
  position: relative;
  width: 200px;
  padding: 0 !important;
  margin-top: 15px;
`;

export const AuthorName = styled(MUITypography)`
  white-space: nowrap;
`;

export const Album = styled(MUITypography)`
  font-weight: 700 !important;
  font-size: 17px !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Genre = styled(MUITypography)`
  margin: 10px 0 !important;
  font-size: 16px !important;
  font-style: italic;
`;

export const Price = styled(MUITypography)`
  font-size: 17px !important;
  font-weight: 700 !important;
`;

export const Button = styled(MUIButton)`
  position: absolute !important;
  padding-right: 0 !important;
  min-width: fit-content !important;
  bottom: 0;
  right: 0;
  color: #000 !important;
`;

import { useState, useEffect, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchingProductsList, addProductToCart } from "../../redux/actions";
import { IState, Vinyl } from "../../constants/types";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Alert, CardMedia, Snackbar } from "@mui/material";

import * as Styled from "./Catalog.styled";

const Catalog: FC = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const dispatch = useDispatch();
  const productsList = useSelector((state: IState) => state.allProducts);
  const cart = useSelector((state: IState) => state.cart);

  useEffect(() => {
    dispatch(fetchingProductsList() as any);
  }, [dispatch]);

  return (
    <Styled.Catalog maxWidth="xl">
      <Styled.CatalogTitle variant="h3">Всі вініли</Styled.CatalogTitle>
      <Styled.CardsContainer>
        {productsList.length > 0 &&
          productsList.map((product: Vinyl) => (
            <Styled.ProductCard key={product.id + 1} sx={{ width: "320px" }}>
              <CardMedia
                component="img"
                height="200"
                image={product.img}
                alt="cover"
                style={{ width: "200px" }}
              />
              <Styled.CardContent>
                <Styled.AuthorName>{product.authorName}</Styled.AuthorName>
                <Styled.Album>{product.album}</Styled.Album>
                <Styled.Genre>{product.genre}</Styled.Genre>
                <Styled.Price>{`${product.price} грн`}</Styled.Price>
                <Styled.Button
                  onClick={() => {
                    if (
                      !cart.map((el) => el.id === product.id).includes(true)
                    ) {
                      dispatch(addProductToCart(product.id));
                      setIsSnackbarOpen(true);
                    }
                  }}
                >
                  <AddShoppingCartIcon sx={{ padding: "0" }} />
                </Styled.Button>
              </Styled.CardContent>
            </Styled.ProductCard>
          ))}
        <Snackbar
          open={isSnackbarOpen}
          autoHideDuration={5000}
          onClose={() => setIsSnackbarOpen(false)}
        >
          <Alert
            onClose={() => setIsSnackbarOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Платівку додано до кошика!
          </Alert>
        </Snackbar>
      </Styled.CardsContainer>
    </Styled.Catalog>
  );
};

export default Catalog;

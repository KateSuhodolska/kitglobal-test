import { FC } from "react";
import Catalog from "../Catalog";
// @ts-ignore
import banner from "../../img/banner-img.jpg";

import * as Styled from "./Layout.styled";

type Props = {
  setIsModalOpen: any | void;
};

const Layout: FC<Props> = ({ setIsModalOpen }) => {
  return (
    <Styled.Page maxWidth="xl">
      <Styled.PageBanner>
        <img
          src={banner}
          alt="banner"
          style={{ width: "100%", height: "500px" }}
        />
      </Styled.PageBanner>
      <Styled.Header>
        <Styled.Title variant="h3">Retro Records</Styled.Title>
        <Styled.Navigation>
          <Styled.LikeIcon />
          <Styled.PersonIcon />
          <Styled.Button onClick={() => setIsModalOpen(true)}>
            <Styled.CartIcon />
          </Styled.Button>
        </Styled.Navigation>
      </Styled.Header>
      <Catalog />
    </Styled.Page>
  );
};

export default Layout;

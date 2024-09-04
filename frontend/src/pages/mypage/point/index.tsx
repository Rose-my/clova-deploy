import { useState } from "react";
import * as P from "./styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PRODUCTS from "@core/productsData";

export default function index() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <P.Container>
      <Header title="행운 포인트 샵" url="/mypage" />
      <P.SearchContainer>
        <P.SearchInput
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="검색할 상품을 입력해주세요."
        />
        <P.Button>검색</P.Button>
      </P.SearchContainer>
      <P.StoreButtons>
        <P.StoreButton>
          <P.EwhaPointIcon />
          이화상점
        </P.StoreButton>
        <P.StoreButton>
          <P.EmartPointIcon />
          이마트24
        </P.StoreButton>
      </P.StoreButtons>
      <P.ProductList>
        {PRODUCTS.map((product, index) => (
          <P.ProductItem key={index}>
            <P.ProductImage src={product.image} alt={product.name} />
            <P.ProductDetails>
              <P.StoreName>{product.store}</P.StoreName>
              <P.ProductName>{product.name}</P.ProductName>
              <P.ProductPoints>{product.points}포인트</P.ProductPoints>
            </P.ProductDetails>
          </P.ProductItem>
        ))}
      </P.ProductList>
      <Footer />
    </P.Container>
  );
}

// src/pages/community/Gallery.jsx

import React, { useEffect, useState } from "react";
import {
  Container,
  PageTitle,
  GridWrapper,
  ImageCard,
} from "../../styles/Gallery.styles.js";

// ✅ 파일 확장자 jpg로 수정
import promo1 from "../../assets/홍보1.png";
import promo2 from "../../assets/홍보2.jpg";
import promo3 from "../../assets/홍보3.jpg";
import promo4 from "../../assets/홍보4.jpg";
import promo5 from "../../assets/홍보5.jpg";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages([
      { id: 1, title: "홍보 자료 1", src: promo1 },
      { id: 2, title: "홍보 자료 2", src: promo2 },
      { id: 3, title: "홍보 자료 3", src: promo3 },
      { id: 4, title: "홍보 자료 4", src: promo4 },
      { id: 5, title: "홍보 자료 5", src: promo5 },
    ]);
  }, []);

  return (
    <Container>
      <PageTitle>갤러리</PageTitle>
      <GridWrapper>
        {images.map((img) => (
          <ImageCard key={img.id}>
            <img src={img.src} alt={img.title} />
            <p>{img.title}</p>
          </ImageCard>
        ))}
      </GridWrapper>
    </Container>
  );
}

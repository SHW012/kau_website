// src/pages/community/Gallery.jsx

import React, { useEffect, useState } from "react";
import {
  Container,
  PageTitle,
  GridWrapper,
  ImageCard,
} from "../../styles/Gallery.styles.js";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // 실제 API 호출 시 이 부분을 변경하세요.
    setImages([
      {
        id: 1,
        title: "행사 사진 1",
        src: "https://via.placeholder.com/300x200",
      },
      {
        id: 2,
        title: "행사 사진 2",
        src: "https://via.placeholder.com/300x200",
      },
      {
        id: 3,
        title: "행사 사진 3",
        src: "https://via.placeholder.com/300x200",
      },
      {
        id: 4,
        title: "행사 사진 4",
        src: "https://via.placeholder.com/300x200",
      },
      {
        id: 5,
        title: "행사 사진 5",
        src: "https://via.placeholder.com/300x200",
      },
      {
        id: 6,
        title: "행사 사진 6",
        src: "https://via.placeholder.com/300x200",
      },
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

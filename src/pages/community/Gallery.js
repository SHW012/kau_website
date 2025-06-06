import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  PageWrapper,
  SideNav,
  ContentArea,
  PageTitle,
  GridWrapper,
  ImageCard,
} from "../../styles/Gallery.styles.js";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // 실제 API 호출 시 해당 부분을 변경하세요
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
    <PageWrapper>
      <SideNav>
        <ul>
          <li>
            <Link to="/community/notice">공지사항</Link>
          </li>
          <li>
            <Link to="/community/resources">자료실</Link>
          </li>
          <li>
            <Link to="/community/media">홍보자료</Link>
          </li>
          <li>
            <Link to="/community/gallery">갤러리</Link>
          </li>
          <li>
            <Link to="/community/qna">QnA</Link>
          </li>
        </ul>
      </SideNav>

      <ContentArea>
        <PageTitle>갤러리</PageTitle>
        <GridWrapper>
          {images.map((img) => (
            <ImageCard key={img.id}>
              <img src={img.src} alt={img.title} />
              <p>{img.title}</p>
            </ImageCard>
          ))}
        </GridWrapper>
      </ContentArea>
    </PageWrapper>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  HeroSection,
  HeroText,
  ContentSection,
  ContentBox,
  SectionTitle,
  ListItem,
  ListDate,
} from "../styles/LandingPage.styles";

export default function LandingPage() {
  return (
    <Wrapper>
      <HeroSection>
        <HeroText></HeroText>
      </HeroSection>

      <ContentSection>
        <ContentBox>
          <SectionTitle as={Link} to="/community/media">
            홍보자료
          </SectionTitle>
          <ul>
            <ListItem>
              <ListDate></ListDate>
            </ListItem>
            <ListItem>
              <ListDate></ListDate>
            </ListItem>
          </ul>
        </ContentBox>

        <ContentBox>
          <SectionTitle as={Link} to="/community/notice">
            공지사항
          </SectionTitle>
          <ul>
            <ListItem>
              <ListDate></ListDate>
            </ListItem>
            <ListItem>
              <ListDate></ListDate>
            </ListItem>
          </ul>
        </ContentBox>
      </ContentSection>
    </Wrapper>
  );
}

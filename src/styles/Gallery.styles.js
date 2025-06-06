import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 100px);
`;

export const SideNav = styled.nav`
  width: 200px;
  background: #f9f9f9;
  border-right: 1px solid #ddd;
  padding: 1rem;
  box-sizing: border-box;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 0.75rem;
  }

  a {
    text-decoration: none;
    color: #333;
    &:hover {
      color: #007bff;
    }
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  padding: 1rem 2rem;
  box-sizing: border-box;
`;

export const PageTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #222;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

export const ImageCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  text-align: center;
  background: #fff;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  p {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    color: #555;
  }
`;

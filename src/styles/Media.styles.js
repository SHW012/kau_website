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

export const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  input[type="text"] {
    flex: 1;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    padding: 0 12px;
    font-size: 1rem;
    box-sizing: border-box;
  }

  button {
    width: 50px;
    height: 40px;
    border: 1px solid #ccc;
    border-left: none;
    background: #fff;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    font-size: 1.2rem;
    color: #555;

    &:hover {
      background: #f0f0f0;
    }
  }
`;

export const TableWrapper = styled.div`
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  }

  thead {
    background: #fafafa;

    th {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid #ddd;
      font-weight: normal;
      color: #555;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #eee;

      &:hover {
        background: #fafafa;
      }
    }

    td {
      padding: 0.75rem 1rem;
      color: #333;
    }
  }
`;

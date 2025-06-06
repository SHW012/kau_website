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

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;

  input,
  textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
  }

  button {
    align-self: flex-start;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    border: none;
    background: #007bff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #005bb5;
    }
  }
`;

export const ListWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:hover {
      background: #fafafa;
    }

    h3 {
      margin: 0 0 0.5rem;
      font-size: 1.1rem;
      color: #333;
    }

    p {
      margin: 0 0 0.5rem;
      color: #555;
    }

    .answer {
      margin-top: 0.5rem;
      padding: 0.75rem 1rem;
      background: #f1f1f1;
      border-radius: 4px;
      color: #333;
      font-style: italic;
    }

    button {
      margin-left: 0.5rem;
      padding: 0.25rem 0.5rem;
      font-size: 0.9rem;
      cursor: pointer;
      border: 1px solid #ccc;
      background: #fff;
      border-radius: 4px;
      &:hover {
        background: #fafafa;
      }
    }
  }
`;

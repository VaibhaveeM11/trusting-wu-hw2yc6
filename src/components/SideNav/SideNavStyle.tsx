import { styled } from "styled-components";

export const StyledNavBar = styled.nav`
  position: fixed;
  width: 250px;
  height: 100vh;
  top: 0;
  left: 0;
  background: #9381ff;
  border-right: 1.3px solid #4a4e69;
`;

export const StyledUIlist = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #4a4e69;
  list-style-type: none;
  box-sizing: border-box;
  width: 100%;
  h2 { 
    margin-bottom: 3rem; 
  }
  li {
    display: block;
    width: 100%;
    box-sizing: border-box
    justify-content: center;
    padding: 2rem;
    font-weight: 300;
    align-items: center;
    cursor: pointer;
  }
  li: hover {
    background-color: #b8b8ff;
    border-bottom: 1px solid #b8b8ff;
  }
`;

export const StyledNavTitle = styled.h2`
  padding-bottom: 3rem;
`;

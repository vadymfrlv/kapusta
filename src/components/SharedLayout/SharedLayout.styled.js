import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1098px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  > nav {
    display: flex;
  }
`;


export const Link = styled(NavLink)`
background-color: #FAFBFD;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
color: #000000;
padding: 13px 40px;
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;


  &.active {
    background-color: #FEFEFE;
    color: #FF751D;
    
  }
`;
// src/components/Header.tsx
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Nav = styled.nav`
  background: #333;
  padding: 15px 0;
  text-align: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 25px;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  display: inline-block;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #f4a261;
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavList>
        <NavItem><StyledLink to="/">HOME</StyledLink></NavItem>
        <NavItem><StyledLink to="/experience">EXPERIENCE</StyledLink></NavItem>
        <NavItem><StyledLink to="/projects">PROJECTS</StyledLink></NavItem>
        <NavItem><StyledLink to="/qualifications">QUALIFICATIONS</StyledLink></NavItem>
        <NavItem><StyledLink to="/mypage">MYPAGE</StyledLink></NavItem>
      </NavList>
    </Nav>
  );
};

export default Header;


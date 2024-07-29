import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <NavLink href="#">About us</NavLink>
      <NavLink href="#">Products</NavLink>
      <NavLink href="#">Reviews</NavLink>
      <NavLink href="#">Get in touch</NavLink>
      <SocialMedia>
        <a href="#"><img src="/path/to/facebook-icon.png" alt="Facebook" /></a>
        <a href="#"><img src="/path/to/whatsapp-icon.png" alt="WhatsApp" /></a>
        <a href="#"><img src="/path/to/instagram-icon.png" alt="Instagram" /></a>
      </SocialMedia>
      <AuthButtons>
        <button>Sign In</button>
        <button>Sign Up</button>
      </AuthButtons>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #b7d3b7;
  padding: 10px 20px;
`;

const NavLink = styled.a`
  margin: 0 15px;
  text-decoration: none;
  color: black;
  font-weight: bold;
`;

const SocialMedia = styled.div`
  display: flex;
  a {
    margin: 0 5px;
  }
  img {
    width: 24px;
    height: 24px;
  }
`;

const AuthButtons = styled.div`
  button {
    margin: 0 5px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    background-color: #e0e0e0;
    cursor: pointer;
  }
`;

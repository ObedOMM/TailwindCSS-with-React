import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
// import Entete from "./Entete";



const Header = ({ state }) => {
  return (
    <>

    
      {/* <Entete /> */}

      <Container>        
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
          <Description>{state.frontity.description}</Description>
        </StyledLink>
        
        <MobileMenu />
      </Container>
      <Nav />



      
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 90%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // border:2px solid blue;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
  font-family: segoe ui;
  // display: inline-block;
  margin-right: 10px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  display: inline;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;


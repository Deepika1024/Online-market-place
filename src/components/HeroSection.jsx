import React from 'react';
import styled from 'styled-components';
import basketImage from './path/to/your/image.png'; // Replace with the path to your image

const HeroSection = () => {
  return (
    <Hero>
      <Title>DEYGA ORGANIC MARKETPLACE</Title>
      <Subtitle>Trust the product</Subtitle>
      <Description>
        At DEYGA, we believe that what you put into your body should be as pure and wholesome as the environment you live in. Founded with a vision to revolutionize the way you shop for organic products, our online marketplace is dedicated to connecting you with the finest organic goods, directly from farmers and producers who share our commitment to quality and sustainability.
      </Description>
      <BasketImage src={basketImage} alt="Organic Basket" />
    </Hero>
  );
};

export default HeroSection;

const Hero = styled.div`
  text-align: center;
  background-color: black;
  color: #b7d3b7;
  padding: 50px 20px;
`;

const Title = styled.h1`
  font-size: 3em;
  font-family: 'Courier New', Courier, monospace;
`;

const Subtitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.2em;
  line-height: 1.5;
`;

const BasketImage = styled.img`
  margin-top: 30px;
  width: 50%;
  height: auto;
`;

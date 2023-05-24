import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #3563c7;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #000000;

  @media screen and (max-width: 768px) {
    /* Styles for screens up to 768px wide */
    font-size: 14px;
    padding: 10px;
  }

  @media screen and (max-width: 480px) {
    /* Styles for screens up to 480px wide */
    font-size: 12px;
    padding: 8px;
  }
`;

function Footer() {
  return (
    <Container>
      <b>&copy; Copyright S.V DEVELOPER</b>
    </Container>
  );
}

export default Footer;

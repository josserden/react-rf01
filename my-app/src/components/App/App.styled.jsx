import styled from '@emotion/styled';

export const Body = styled.div`
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  min-height: 100vh;
  font-family: 'Noto Sans', sans-serif;
`;

export const Section = styled.section`
  padding-top: 50px;
`;

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;

  @media (min-width: 576px) {
    width: 540px;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 768px) {
    width: 720px;
  }

  @media (min-width: 1200px) {
    width: 1140px;
  }
`;

export const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  font-size: 36px;
  text-shadow: 0px 2px 4px rgb(0 0 0 / 40%);
  margin-top: 0;

  @media (min-width: 768px) {
    font-size: 50px;
  }

  @media (min-width: 1200px) {
    font-size: 64px;
  }
`;

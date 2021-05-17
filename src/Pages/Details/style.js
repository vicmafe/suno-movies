import styled from 'styled-components';

export const ContainerMain = styled.div`
  background-color: #212125;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95vh;
  background-color: #212125;
`;
export const ContainerCard = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  margin-left: 17%;
  margin-top: 2%;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #19191C;
  color: #fff;
  height: 5vh;
  position: fixed;
`;
export const FooterText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-weight: 300; 
  width: 100%;
  color: #fff;
`;
export const ButtonBack = styled.button`
  type: Button;
  background-color: #ff388c;
  color: #fff;
  width: 150px;
  padding: 5px;
  height: 50px;
  border: 2px groove gray;
  border-radius: 5px;
  min-height: 20px;
`;
export const BoxButtonBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px;
`;

import styled from 'styled-components';

export const Container = styled.div`
  dislplay: flex;
  background-color: #212125;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 93.5vh;
`;
export const CentralBar = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #212125;
  border-bottom: 1px solid #151518
`;
export const Dot = styled.div`
  display: flex;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ff388c;
  margin-right: 10px;
  display: inline-block;
`;
export const TexTCentralBar = styled.span`
  color: #fff;
  font-size: 16px;
  font-family: Helvetica;
  margin-left: 15%;
`;
export const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #19191C;
  color: #fff;
  height: 6.5vh;
  position: fixed;
`;
export const FooterText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 13px;
  font-weight: 300; 
  width: 100%;
  color: #fff;
`;
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #212125;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  min-height: 10vh;
`;
export const Image = styled.img`
  margin: 5px;
  display: flex;
  width: 20%;
`;
export const Icon = styled.img`
  display: flex;
  margin: 20px;
  filter: ${props => props.invertColor};
  cursor: pointer;
  width: 7%;
`;
export const ContainerButtons = styled.div`
  display: flex;
  align-items:center;
  width: 20%;
  justify-content: space-around;
  align-items: stretch;
`;
export const Button = styled.div`
  display: flex;
  &:hover {
    border-bottom: 2px solid #ff388c;
  }
`;

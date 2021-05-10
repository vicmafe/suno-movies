import styled from 'styled-components';

export const ContainerNav = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #212125;
`;
export const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #212125;
  align-items: center;
  width: 100%;
  min-height: 10vh;
  border-bottom: 1px solid #151518;
`;
export const Image = styled.img`
  margin-left: 0px;
  display: flex;
  width: 20%;
`;
export const Icon = styled.img`
  display: flex;
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 15px;
  filter: ${props => props.invertColor || "invert(100%)"};
  cursor: pointer;
  width: 20px;
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
export const InputSearch = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  width: 70%;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 2px solid #ff388c;
  min-height: 5vh;
  background-color: #212125;
  outline: 0;
  caret-color: #ff388c;
  color: #fff;
  font-size: 30px;
`;

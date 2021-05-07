import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #212125;
  align-items: center;
  border: 1px solid black;
  width: 100%;
  height: 20vh;
`;
export const Image = styled.img`
  margin: 20px;
  display: flex;
  width: 25%;
`;
export const Icon = styled.img`
  display: flex;
  margin: 20px;
  filter: invert(100%);
  cursor: pointer;
  width: 3%;
`;

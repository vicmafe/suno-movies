import styled from 'styled-components';

export const ContainerCatalog = styled.div`
  display: flex;
  width: 100%;
  background-color: #212125;
  justify-content: center;
  flex-direction: column;
  margin-top: 2%;

`;
export const Card = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  margin: 0px;
  height: 50px;

`;
export const ButtonsContainer = styled.div`
  display: flex;
  width: 72%;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 3%;
  align-items: center;
  margin-left: 13%;
`;
export const InputSelect = styled.select`
  display: flex;
  width: 120px;
  background-color: #212125;
  height: 40px;
  color: #fff;
  padding-left: 18px;
  font-size: 14px;
  border: 2px groove gray;
  border-radius: 5px;
  min-height: 20px;
  margin-left: 0px;
`;
export const CardCatalog = styled.div`
`;
export const SelectMovies = styled.div`
  display: flex;
  justify-content: space-around;
  width: 35%;
`;
export const ButtonChoiceType = styled.button`
  type: Button;
  background-color: transparent;
  color: #fff;
  width: 120px;
  padding: 5px;
  border: 2px groove gray;
  border-radius: 5px;
  min-height: 20px;
`;

import styled from 'styled-components';

export const ContainerCatalog = styled.div`
  display: flex;
  width: 100%;
  background-color: #212125;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  width: 70%;
  margin-top: 4vh;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 3%;
  margin-left: 15%;
  align-items: center;
  height: 50%;
`;
export const InputSelect = styled.select`
  display: flex;
  width: 130px;
  background-color: #212125;
  height: 50px;
  color: #fff;
  padding-left: 18px;
  font-size: 14px;
  border: 2px groove gray;
  border-radius: 5px;
  min-height: 20px;
  margin-left: 0px;
  disabled: true;
`;
export const CardCatalog = styled.div`
  display: ${(props) => props.display };
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: center;
  justify-itens: center;
  padding: 10px;
  width: 70%;
  margin-left: 15%;
`;
export const SelectMovies = styled.div`
  display: flex;
  justify-content: left;
  width: 40%;
`;
export const ButtonChoiceType = styled.button`
  type: Button;
  background-color: transparent;
  color: #fff;
  width: 120px;
  padding: 5px;
  margin-left: 10px;
  border: 2px groove gray;
  border-radius: 5px;
  min-height: 20px;
`;
export const ButtonCatalogMore = styled.button`
  type: Button;
  background-color: #ff388c;
  color: #fff;
  width: 20%;
  padding: 5px;
  height: 50px;
  border: 2px groove gray;
  border-radius: 5px;
  min-height: 20px;
`;
export const BoxButtonMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 80px;
`;

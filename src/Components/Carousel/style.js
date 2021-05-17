import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #212125;
  justify-content: center;
  border-bottom: 3px solid #ff388c;
  margin-top: 3%;
`;
export const Card = styled.div`
  display: flex;
  width: 70%;
  margin: 0px;
`;
export const Title = styled.div`
  display: flex;
  color: white;
  margin-bottom: 3%;
  font-size: 16px;
  font-family: "Helvetica";
  flex-direction: row;
  align-items: center;
`;
export const ContainerCarousel = styled.div`
  margin-bottom: 3%;
  display: flex;
  width: 70%;
  flex-direction: column;
  .rec.rec-arrow {
    color: #ff388c;
    border: none;
    background-color: transparent;
  };
  .rec.rec-arrow:disabled {
    visibility: hidden;
  };
  .rec.rec-arrow:hover {
    border: 1px solid #fff
  }
  .rec.rec-dot{
    visibility: hidden;
  }
  .rec.rec-dot:disabled{
    visibility: hidden;
  }
  .rec.rec-dot:focus, .rec.rec-dot:hover, .rec.rec-dot:active {
    visibility: hidden;
  }
 
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
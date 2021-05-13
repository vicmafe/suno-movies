import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #212125;
  justify-content: center;
  border-bottom: 5px solid #ff388c;
`;
export const Card = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  margin: 0px;
`;
export const Title = styled.p`
  display: flex;
  color: white;
  margin-bottom: 15px;
  font-size: 18px;
  font-family: "Helvetica";
  flex-direction: row;
  align-items: center;
`;
export const ContainerCarousel = styled.div`
  margin: 2%;
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
    box-shadow: 0 0 1px 1.5px #fff;
    background-color: none;
  }
  .rec.rec-dot:disabled{
    background-color: #212125;
  }
  .rec.rec-dot:focus, .rec.rec-dot:hover, .rec.rec-dot:active {
    background-color: #ff388c;
  }
 
`;
export const Dot = styled.div`
  display: flex;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #ff388c;
  margin-right: 10px;
  display: inline-block;
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-flow: row;
  position: relative;
  margin: 3%;
`;
export const Poster = styled.img`
  border-radius: 5px;
  display: flex;
  width: 30%;
`;
export const Title = styled.h3`
  display: flex;
  margin-left: 15px;
  font-size: clamp(0.5em, 0.2em + 1.2vw, 1em);
  color: #fff;
  font-family: Helvetica;
`;
export const Genre = styled.p`
  display: flex;  
  font-size: 8px;
  margin-top: 3px;
  color: #ff388c;
`;
export const Rate = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 3px;
  margin-left: 15px;
  align-items: flex-end;
`;
export const Overview = styled.p`
  display: flex;
  flex-flow: row wrap;
  text-align: left;
  font-size: clamp(0.5em, 0.3em + 1vw, 0.8em);
  margin-top: 15px;
  color: #B7B7B7;
  margin-left: 15px;
  margin-top: 5%;
  line-height: 1.5;
`;
export const Star = styled.img`
  margin-right: 3px;
  display: flex;
  width: 20px;
`;
export const AverageRating = styled.p`
  display: flex;
  font-size: 16px;
  margin: 2px;
  color: #ff388c;
`;
export const ContainerInformation = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
`;
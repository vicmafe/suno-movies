import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Poster = styled.img`
  margin: 3px;
  border-radius: 3px;
  display: flex;
  width: 100%;
`;
export const Title = styled.h3`
  display: flex;
  margin-top: 15px;
  font-size: 18px;
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
  align-items: center;
`;
export const Overview = styled.p`
  display: flex;
  font-size: 8px;
  margin: 1px;
  color: #ffff;
`;
export const Star = styled.img`
  margin-right: 2px;
  display: flex;
  width: 15px;
`;
export const AverageRating = styled.p`
display: flex;
font-size: 16px;
margin: 2px;
color: #ff388c;
`;
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Poster = styled.img`
  border-radius: 5px;
  display: flex;
  width: 100%;
`;
export const Title = styled.h3`
  display: flex;
  margin-top: 15px;
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
  align-items: flex-end;
`;
export const Overview = styled.p`
  display: flex;
  font-size: 10px;
  margin-top: 15px;
  color: #ffff;
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
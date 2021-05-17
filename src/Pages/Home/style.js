import styled from 'styled-components';

export const Container = styled.div`
  dislplay: flex;
  background-color: #212125;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
export const ImagemSunoMovies = styled.img`
  display: flex;
  width: 60%;
  margin-left: 20%;
  animation: kick 3s infinite alternate;
  -webkit-animation: bounce 0.5s infinite alternate;
  @keyframes kick {
    from {
      transform: translateY(px);
    }
    to {
      transform: translateY(-25px);
    }
  }
`;
export const Title = styled.div`
  display: flex;
  color: white;
  margin-bottom: 3%;
  margin-left: 35%;
  padding-top: 100px;
  font-size: 10vh;
  font-family: "Helvetica";
`;
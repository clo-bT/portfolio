import styled from 'styled-components';
import EwhaImage from '../assets/ewha.jpg';


const EwhaContainer = styled.div``;
const ImageWrapper = styled.div`
  margin-top: 20px;
  display: inline-block;
  padding: 0;
  position: relative;
`;

const EwhaImg = styled.img`
  width: 150px;
  height: 200px;
  object-fit: cover;
`;

const TextWrapper = styled.div``;
const EwhaTitle = styled.div``;
const EwhaContent = styled.div``;
const Eduewha = () => {
  
  return (
    <EwhaContainer>
      <ImageWrapper>
        <EwhaImg src={EwhaImage} alt="박승희 졸업증명서" />
      </ImageWrapper>
      <TextWrapper>
        <EwhaTitle>Ewha W. 이화여자대학교</EwhaTitle>
        <EwhaContent>2018-03 입학 ~ 2022-08 졸업</EwhaContent>
        <EwhaContent>졸업 프로젝트 BARA 진행</EwhaContent>
        <EwhaContent>2022-03 ~ 2022-06</EwhaContent>
      </TextWrapper>
    </EwhaContainer>
  );
};

export default Eduewha;

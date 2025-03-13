import styled from 'styled-components';
import SsafyImage from '../assets/Ssafy.jpg';
import HoverImage from '../assets/SsafyHover1.jpg';
import CertificateImage from '../assets/SSAFY수료증_1.png';
// import CertificateImage2 from '../assets/SSAFY수료증_2.png';

import { useState } from 'react';

const SsafyContainer = styled.div`
  position: relative;
`;

const ImageWrapper = styled.div`
  margin-top: 20px;
  display: inline-block;
  padding: 0;
  position: relative;/
`;

const SsafyImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const ExpandedImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  cursor: pointer;
`;
const CertificateImg = styled.img`
  width: 150px;
  height: 200px;
  object-fit: cover;
`;

const TextWrapper = styled.div``;
const SsafyTitle = styled.div``;
const SsafyContent = styled.div``;

const Edussafy = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SsafyContainer>
      <ImageWrapper
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isHovered && (
          <SsafyImg
            src={SsafyImage}
            alt="박승희 싸피 활동사진"
          />
        )}
        {isHovered && (
          <ExpandedImage
            src={HoverImage}
            alt="확대된 싸피 활동사진"
          />
        )}
      </ImageWrapper>
      <CertificateImg src={CertificateImage} alt="박승희 싸피 수료증" />
      <TextWrapper>
        <SsafyTitle>SSAFY 삼성청년소프트웨어아카데미</SsafyTitle>
        <SsafyContent>2023-01-04 ~ 2023-12-29</SsafyContent>
        <SsafyContent>삼성전자, 멀티캠퍼스 역삼</SsafyContent>
        <SsafyContent>Python 비전공반 교육과정 후 웹 프론트엔드 개발 프로젝트 3회 진행</SsafyContent>
      </TextWrapper>
    </SsafyContainer>
  );
};

export default Edussafy;

// import { Link } from "react-router-dom";
import styled from "styled-components";

const PopularListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const ListWrapper = styled.div``;


const Title = styled.div`
  font-size: var(--font-size-xxl);
`;


const ImageParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: space-between;
  // margin-top: 60px;
`;

const ImageIcon = styled.img`
  position: relative;
  border-radius: var(--br-3xs);
  width: 100px;
  height: 100px;
  // object-fit: cover;
`;

const PopularList = () => {
  const imgtags = Array.from({ length: 5 }, (_, index) => (
    <ImageIcon key={index} src="/assets/sampleimg.png" alt="" />
  ));

  return (
    <PopularListContainer>
      <ListWrapper>
        <Title>곰방에서 인기 많은 매물</Title>
        <ImageParent>{imgtags}</ImageParent>
      </ListWrapper>

      <ListWrapper>
        <Title>곰방봐 보러 오세요</Title>
        <ImageParent>{imgtags}</ImageParent>
      </ListWrapper>
    </PopularListContainer>
  );
};

export default PopularList;

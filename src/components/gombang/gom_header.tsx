import styled from "styled-components";
import LogoImage from "../../assets/logo.png";

const HeaderContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  font-size: var(--font-size-xl);
  font-weight: 600;
  // margin: 20px 50px;
`;

const LeftTab = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ImageWrapper = styled.div``;

const LogoImg = styled.img`
  width: 133px;
  height: 75px;
  cursor: pointer;
`;

const TabItem = styled.div`
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

const RightTab = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Login = styled.div`
  padding: 15px;
  border-radius: 15px;
  background-color: var(--color-tan);
  font-size: smaller;
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    background-color: #c7ad92;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LeftTab>
        <ImageWrapper>
          <LogoImg src={LogoImage} alt="곰방 로고" />
        </ImageWrapper>
        <TabItem>지도</TabItem>
        <TabItem>곰방봐</TabItem>
        <TabItem>찜 목록</TabItem>
        <TabItem>방 내놓기</TabItem>
      </LeftTab>
      <RightTab>
        <Login>로그인 / 회원가입</Login>
      </RightTab>
    </HeaderContainer>
  );
};

export default Header;

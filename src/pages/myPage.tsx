import Profile from "../components/profile";
import Education from "../components/education";
import Skills from "../components/skills";
import styled from 'styled-components';

const MyPageContainer = styled.div`

`;
const MyPage = () => {
  
  return (
    <MyPageContainer>
      <Profile />
      <Education />
      <Skills />
    </MyPageContainer>
  );
};

export default MyPage;

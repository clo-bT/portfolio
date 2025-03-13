// src/components/Profile.tsx
import ProfileImage from '../assets/profile.jpg';
import styled from 'styled-components';

// think - 그 wrapper가 div라서 width가 꽉차있는걸 바꿔야해
const ProfileContainer = styled.div`
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column; /* 세로 정렬 */
`;

const ImageWrapper = styled.div`
  margin-top: 20px;
  display: inline-block; /* 이미지 크기만큼 div 크기 설정 */
  padding: 0; /* 필요에 따라 여백 설정 */
`;

const ProfileImg = styled.img`
  width: 150px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;
const InfoWrapper = styled.div`
  margin-top: 10px;
  display: inline-block; /* 이미지 크기만큼 div 크기 설정 */
  padding: 0; /* 필요에 따라 여백 설정 */
`;
const Name = styled.p`
  font-size: 1.5rem;
  margin: 8px 0;
  font-weight: 700;
`;
const InfoItem = styled.p`
  font-size: 1.2rem;
  margin: 8px 0;
  font-weight: 500;
`;
const Profile = () => {
  return (
    <ProfileContainer>
      <ImageWrapper>
        <ProfileImg src={ProfileImage} alt="박승희 증명사진" />
      </ImageWrapper>
      <InfoWrapper>
        <Name>박승희</Name>
        <InfoItem>+82) 10-9473-0329</InfoItem>
        <InfoItem>pshee0329@naver.com</InfoItem>
        <InfoItem>tael8213@gmail.com</InfoItem>
      </InfoWrapper>
    </ProfileContainer>
  );
};

export default Profile;

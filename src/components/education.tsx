import styled from 'styled-components';
import Edussafy from './edu_ssafy';
import Eduewha from './edu_ewha';

const EduContainer = styled.div``;
const SsafyWrapper = styled.div``;
const UnivWrapper = styled.div``;

const Education = () => {
  
  return (
    <EduContainer>
      <SsafyWrapper>
        <Edussafy />
      </SsafyWrapper>
      
      <UnivWrapper>
        <Eduewha/>
      </UnivWrapper>
    </EduContainer>
  );
};

export default Education;

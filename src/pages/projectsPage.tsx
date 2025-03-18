import styled from "styled-components";
import Gombang from "../components/gombang/gombang";
import Yeondubu from "../components/yeondubu";
import Pnj from "../components/pnj";
import Header from "../components/header";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px; /* 각 프로젝트 간격 조정 */
`;

const GombangWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const GombangContent = styled.div`
  flex: 3;
  padding: 20px;
  background-color: #f9f9f9; /* 가독성을 위해 배경색 추가 */
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  margin-right: 3%;
`;

const GombangPreview = styled.div`
  flex: 7;
`;

const ProjectsName = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProjectsContent = styled.div`
  font-size: 18px;
  color: #666;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <Header />
      <GombangWrapper>
        <GombangContent>
          <ProjectsName>GOMBANG 곰방</ProjectsName>
          <ProjectsContent>2023-07 ~ 2023-08 (7주)</ProjectsContent>
        </GombangContent>
        <GombangPreview>
          <Gombang />
        </GombangPreview>
      </GombangWrapper>
      <Yeondubu />
      <Pnj />
    </ProjectsContainer>
  );
};

export default Projects;

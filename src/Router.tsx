// src/router.tsx
import { Routes, Route } from 'react-router-dom';
import Main from './pages/mainPage';
import Experience from './pages/experiencePage';
import Projects from './pages/projectsPage';
import Qualifications from './pages/qualificationsPage';
import MyPage from './pages/myPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/qualifications" element={<Qualifications />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default Router;

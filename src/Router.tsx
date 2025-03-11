// src/router.tsx
import { Routes, Route } from 'react-router-dom';
import Main from './pages/mainPage';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Qualifications from './pages/qualifications';
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

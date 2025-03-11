// src/router.tsx
import { Routes, Route } from 'react-router-dom';
import Main from './pages/mainPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default Router;

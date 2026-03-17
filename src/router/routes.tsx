import { Route, Routes } from 'react-router';
import HomePage from '../pages/Home';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

import { Route, Routes } from 'react-router';
import HomePage from '../pages/Home';
import About from '../pages/About';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
};

export default AppRoutes;

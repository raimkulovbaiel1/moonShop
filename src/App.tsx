import AppRoutes from './router/routes';
import { BrowserRouter } from 'react-router';
import  Header  from './components/Header/index';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;

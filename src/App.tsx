// styles
import './App.css';
import './normalize.css';

// pages
import HomePage from './pages/HomePage';
import AuthorizePage from './pages/AuthorizePage';
import PasswordResetPage from './pages/PasswordResetPage';
import ConfirmationPage from './pages/ConfirmationPage';

// routing 
import { Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/authorize' element={<AuthorizePage />} />
        <Route path='/reset-password' element={<PasswordResetPage />} />
        <Route path='/confirmation' element={<ConfirmationPage />} />
      </Routes>
    </>
  );
}

export default App;

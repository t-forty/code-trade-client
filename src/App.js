// ROUTES
//import List from './components/list/list';
//import Jobs from './components/jobs/jobs';
import Signup from './components/auth/sign-up';
import Home from './components/home/home';
import Login from './components/auth/login';
import Protected from './components/protected/protected';

import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/">Site LOGO</Link>
      <Link to="/register"> # Register</Link>
      <Link to="/program"> # Program Page</Link>
      <Link to="/company/profile"> # Company Profile</Link>
      <Link to={localStorage.user ? "/profile" : "/login"}>{localStorage.user ? " profile": " login"} </Link>

      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/register' element={ <Signup /> }></Route>
        <Route path='/login' element={ <Login /> }></Route>
        {/* Protected renders correct element if authenticated, or undefined
          if route not found: 
            ex: /fasdfdsf renders Undefined 
            ex: /profile renders Profile page if logged in; and Login if not
        */}
        <Route path="*" element={<Protected />} />
      </Routes>
    </div>
  ); 
}

export default App;

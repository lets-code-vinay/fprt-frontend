import React from 'react';
import { Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/lib/animate/animate.css';
import './assets/lib/animate/animate.min.css';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Signup from './Pages/SignUpForm/Signup';
import Login from './Pages/LoginForm/Login';
//import {appLoad} from './'; //application credential
// import Login from './' // Login page;
// import {PrivateRoute} from './'  //private routes under admin 
// import {userAccount} from './' // userAccount from login
//import {publicRoute} from './'  //public route login, signup, homepage, without login access
import './App.css';
const App: React.FC = () => {
  return (
    <Router>
      <div className="App" id="wrapper">
        <Route exact path={`/login`} ><Homepage /></Route>
        <Route path={`/homepage`} ><Homepage /></Route>
        <Route path={`/signup`}><Signup /></Route>
        <Route path={`/admin/signup`}><Signup/></Route>
        <Route path={`/superadmin/signup`}><Signup/></Route>
        <Route path={`/login`}><Login/></Route>
        <Route path={`/admin/login`}><Login/></Route>
        <Route path={`/superadmin/dashboard`}><Homepage/></Route>
        <Route path={`/admin/dashboard`}><Homepage/></Route>
        <Route path={`/superadmin/login`}><Login/></Route>
      </div>
    </Router>
  );
}

export default App;

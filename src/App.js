import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

import Auth from './users/pages/Auth';
import Users  from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UsersPlaces from './places/pages/UsersPlaces';
import UpdatePlace from './places/pages/UpdatePlace';

function App() {
  return (
    <Router>
      <MainNavigation/>
      <main>
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/:userId/places' element={<UsersPlaces/>}></Route>
          <Route path='/places/new' element={<NewPlace/>}/>
          <Route path='/places/:placeId' element={<UpdatePlace/>}/>
          <Route path='*' element={<Navigate replace to="/" />}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
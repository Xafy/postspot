import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

import Users  from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UsersPlaces from './places/pages/UsersPlaces';

function App() {
  return (
    <Router>
      <MainNavigation/>
      <main>
        <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/:userId/places'><UsersPlaces/></Route>
          <Route path='/places/new' element={<NewPlace/>}/>
          <Route path='*' element={<Navigate replace to="/" />}/>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
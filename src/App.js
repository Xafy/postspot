import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

import Users  from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/places/new' element={<NewPlace/>}/>
        <Route path='*' element={<Navigate replace to="/" />}/>
      </Routes>
    </Router>
  );
}

export default App;
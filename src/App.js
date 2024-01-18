import React from 'react';
import { Routes, Route } from 'react-router-dom';
import User from './components/User';
import UserList from './components/UserList';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/users' element={<UserList/>}/>
        <Route path='/user/:id' element={<User/>}/>
      </Routes>
    </div>
  )
}

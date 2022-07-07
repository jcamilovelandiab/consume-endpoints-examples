import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Landing from './pages/landing/landing.component';
import Login from './pages/login/login.component';

function App() {

  const [user, setUser] = useState({});

  const updateUser = (user) => {
    setUser(user);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={<Login updateUser={updateUser} />}
          />
          <Route
            path="landing"
            element={<Landing user={user} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

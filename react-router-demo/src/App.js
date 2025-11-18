// eslint-disable-next-line
import logo from './logo.svg';

import './App.css';
import { NavLink, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import User from "./pages/User";
import NotFound from "./pages/NotFound";
 // ✅ ensure file name matches exactly

function App() {
  return (
    <div className="app">

      <nav style={{ padding: 12, borderBottom: "1px solid #ddd" }}>

        <NavLink to="/" end style={({isActive}) => ({ marginRight: 12, color: isActive ? 'blue' : 'black' })}>
          Home
        </NavLink>

        <NavLink to="/about" style={({isActive}) => ({ marginRight: 12, color: isActive ? 'blue' : 'black' })}>
          About
        </NavLink>

        <NavLink to="/user/42" style={({isActive}) => ({ color: isActive ? 'blue' : 'black' })}>
          User 42
        </NavLink>

      </nav>

      <main style={{ padding: 12 }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*bout" element={<NotFound />} />
        </Routes>

      </main>

    </div>
  );
}

export default App;

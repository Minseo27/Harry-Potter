import './App.css';
import Main from './components/main';
import Dorm from './components/Dorm';
/*
import Attraction from './components/Attraction';
import Restaurant from './components/Restaurant';
*/
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" elements={<Layout />}>
          <Route index element={<Main />} />
          <Route path="Dorm" element={<Dorm />} />
          <Route path="*" element={<NoMatch />} />
          </Route>
          </Routes> </div>
  );
}

const navStyle = {textDecoration: "none", color: "white"};

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link style={navStyle} to="/">Main</Link>
          </li>
          <li>
            <Link style={navStyle} to="/Dorm">Dorm</Link>
          </li>
          <li>
            <Link style={navStyle} to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
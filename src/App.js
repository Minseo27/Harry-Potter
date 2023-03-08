import './App.css';
import Main from './components/main';
import Dorm from './components/Dorm';
import Cafeteria from './components/Cafeteria';
/*
import Attraction from './components/Attraction';
*/
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="dorm" element={<Dorm />} />
          <Route path="cafeteria" element={<Cafeteria />} />
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
          <li1>
            <Link style={navStyle} to="/">Main</Link>
          </li1>
          <li2>
            <Link style={navStyle} to="/dorm">Dorm</Link>
          </li2>
          <li3>
            <Link style={navStyle} to="/cafeteria">Cafeteria</Link>
          </li3>
          <li4>
            <Link style={navStyle} to="/nothing-here">Nothing Here</Link>
          </li4>
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
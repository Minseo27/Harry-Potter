import './App.css';
import Main from './components/main';
import Dorm from './components/Dorm';
import Cafeteria from './components/Cafeteria';
import Attraction from './components/Attraction';
import Souvenir from './components/Souvenir';
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="dorm" element={<Dorm />} />
          <Route path="cafeteria" element={<Cafeteria />} />
          <Route path="attraction" element={<Attraction />} />
          <Route path="souvenir" element={<Souvenir />} />
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
          <li className="li1">
            <Link style={navStyle} to="/">Main</Link>
          </li>
          <li className="li2">
            <Link style={navStyle} to="/dorm">Dorm</Link>
          </li>
          <li className="li3">
            <Link style={navStyle} to="/cafeteria">Cafeteria</Link>
          </li>
          <li className="li4">
            <Link style={navStyle} to="/attraction">Attraction</Link>
          </li>
          <li className="li5">
            <Link style={navStyle} to="/souvenir">Souvenir</Link>
          </li>
          <li className="li6">
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
    <div className="nothing">
    <div>
      <p>
        <h1 style={{walign: "center", padding:"10px", color:"white"}}>Nothing here</h1>
        <a style={{align: "center", color: "white"}}href="\">Back to Main</a>
      </p>
    </div>
    </div>
  );
}
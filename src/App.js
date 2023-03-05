import './App.css';
import Main from './components/main';
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" elements={<Layout />}>
          <Route index element={<Main />} />

          </Route>
          </Routes> </div>
  );
}

const navStyle = {textDecoration: "none", color: "blue"};

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link style={navStyle} to="/">Main</Link>
          </li>
        </ul>
      </nav>

      <hr />
    </div>
  );
}

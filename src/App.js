import React from "react";

function App() {
  return (
    <Navbar>
      <NavItem />
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
  );
}

function NavItem() {
  return (
    <li className="nav-item">
      <a href="#" className="icon-button">
      </a>
    </li>
  )
}

export default App;

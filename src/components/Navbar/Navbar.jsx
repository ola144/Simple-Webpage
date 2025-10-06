import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Flexisaf</div>
      <div className="menu">
        <NavLink to="/">Task 1</NavLink>
        <NavLink to="/task2">Task 2</NavLink>
        <NavLink to="/task3">Task 3</NavLink>
        <NavLink to="/task4">Task 4</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

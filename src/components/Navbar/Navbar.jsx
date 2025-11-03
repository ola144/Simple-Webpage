import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Flexisaf</div>
      <div className="menu">
        <NavLink to="/">Deliverable 1</NavLink>
        <NavLink to="/task2">Deliverable 2</NavLink>
        <NavLink to="/task3">Deliverable 3</NavLink>
        <NavLink to="/task4">Deliverable 4</NavLink>
        <NavLink to="/task6">Deliverable 6</NavLink>
        <NavLink to="/task7">Deliverable 7</NavLink>
        <NavLink to="/task8">Deliverable 8</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

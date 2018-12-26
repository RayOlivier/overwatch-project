import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  //idk why i named this header instead of nav....
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}

import React from "react";
import { Link}  from "react-router-dom";


function Header() {
  return (
    <React.Fragment>
      <div className="header">
        <h1 className="text-info">Welcome to Memories...</h1>
        <ul>
          <li>
            <Link to="/">Home page</Link>
          </li>
          <li>
            <Link to ="/signin">Sign In</Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Header;
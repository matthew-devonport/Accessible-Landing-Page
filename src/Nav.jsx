import React from "react";

function Nav() {
  return (
    <>
      <nav className="nav">
        <a className="gradient navLink blue left" href="/">
          GALLERY
        </a>
        <a className="gradient navLink purple" href="/">
          SHOP
        </a>
        <a className="gradient navLink red right" href="/">
          TEAM
        </a>
      </nav>
    </>
  );
}

export default Nav;

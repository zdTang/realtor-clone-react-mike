import React from "react";

function Header() {
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
          />
        </div>

        <div>
          <ul className="flex space-x-10">
            <li>Home</li>
            <li>Offers</li>
            <li>Sign in</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default Header;
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <header className="header">
        <div className="flex justify-between items-center py-5">
        <div>
          <h1 className="text-2xl nl-text-lg">NONA LIFESTYLE</h1>
        </div>

        <div>
          <nav className="nav-body">
            <select>
              <option selected>Services</option>
              <option>For Vendoers</option>
              <option>For Manufacturers</option>
              <option>For Business</option>
            </select>
            <Link href="#">About Us</Link>
            <Link href="#">Contact Us</Link>
            <button className="btn btn-secondary w-32 h-10">Login / Signup</button>
          </nav>
        </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

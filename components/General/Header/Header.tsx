import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Header() {
  const { asPath } = useRouter();
  return (
    <header className={`w-full ${asPath === "/" && "absolute z-10"}`}>
      <div
        className={`flex justify-between items-center py-5 px-5 ${
          asPath !== "/" && "bg-rose-100"
        }`}
      >
        <div>
          <h1 className="text-2xl text-sky-900 font-bold">NONA LIFESTYLE</h1>
        </div>

        <div>
          <nav className="flex items-center bg-transparent gap-x-5">
            <select className="w-20 border-none outline-none bg-transparent">
              <option selected>Services</option>
              <option>For Vendoers</option>
              <option>For Manufacturers</option>
              <option>For Business</option>
            </select>
            <Link href="#">About Us</Link>
            <Link href="#">Contact Us</Link>
            <button className="btn btn-secondary w-32 h-10">
              Login / Signup
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

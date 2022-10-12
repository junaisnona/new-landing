import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="bg-sky-900 text-white border-t-2">
        <div className="p-14 grid grid-cols-4 gap-x-10 mx-auto">
          <div className="w-3/4">
            <h1 className="text-2xl mb-5">NONA LIFESTYLE</h1>
            <p>
              NONA LIFESTYLE is operating the textile market, as the manufacture
              and trader. Since year 2020 by the range of produced textile
              products has increased.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">COMPANY</h3>
            <ul className="leading-8">
              <li>
                <Link href={"#"}>Services</Link>
              </li>
              <li>
                <Link href={"#"}>FAQ</Link>
              </li>
              <li>
                <Link href={"#"}>About Us</Link>
              </li>
              <li>
                <Link href={"#"}>Contact Us</Link>
              </li>
              <li>
                <Link href={"#"}>Terms and Conditions</Link>
              </li>
              <li>
                <Link href={"#"}>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">OFFICES</h3>
            <div className="mb-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white"></div>
                <h4>INDIA</h4>
              </div>
              <p className="text-sm">
                FF03, 03A MGF Megacity Mall, Sector 28, Gurugram, Haryana 122002
              </p>
            </div>
            <div className="mb-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-white"></div>
                <h4>UAE</h4>
              </div>
              <p className="text-sm">
                2310, 23rd floor, Regus Business Centre, Damac Smart heights,
                Barsha Heights, Dubai
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">CONTACT</h3>
            <ul className="leading-8">
              <li>contact@nonalifestyle.com</li>
              <li>+91 XXXXXXXXXX</li>
              <li>+971 XXXXXXXXXx</li>
            </ul>

            <div>
              <h4 className="font-medium mt-5 mb-4">FOLLOW</h4>
              <div className="flex gap-5">
                <div className="w-5 h-5 bg-slate-400"></div>
                <div className="w-5 h-5 bg-slate-400"></div>
                <div className="w-5 h-5 bg-slate-400"></div>
                <div className="w-5 h-5 bg-slate-400"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center p-2 border-t-[1px] border-gray-500">
          <span className="font-bold">NONA LIFESTYLE&#174;</span> |{" "}
          <span>All Rights Reserved</span> |{" "}
          <span>Copyright &#169; 2010 - 2022</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

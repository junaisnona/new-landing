import React from "react";

function Navigation({ path }: { path: string }) {
  return (
    <>
      <div className="py-3 bg-slate-100">
        <nav className="ml-14">
          <span>{path}</span>
        </nav>
      </div>
    </>
  );
}

export default Navigation;

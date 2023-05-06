import React from "react";
import LayoutNavbar from "../layout/LayoutNavbar";
import Footer from "../layout/Footer";

function NotFound() {
  return (
    <div>
    <LayoutNavbar/>
          <div style={{ textAlign: "center" }}>
      <h1>Page Not Found</h1>
    </div>
    <Footer/>
    </div>

  );
}

export default NotFound;

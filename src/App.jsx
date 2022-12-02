import React, { useState } from "react";
import Navbar from "./components/starter/Navbar";
import Users from "./components/starter/Users";
import Photos from "./components/starter/Photos";

function App() {
  const [activeMenu, setActiveMenu] = useState("photos");

  return (
    <div className="App">
      <Navbar setActiveMenu={setActiveMenu} />
      <div className="content">
        {activeMenu === "photos" ? <Photos /> : <Users />}
      </div>
    </div>
  );
}

export default App;

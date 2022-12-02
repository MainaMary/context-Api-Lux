import React from "react";

const Navbar = (props) => {
  const { setActiveMenu } = props;
  return (
    <div>
      <h2 className="title">Fetch photos and users</h2>
      <div className="btn_wrapper ">
        <button className="btn" onClick={() => setActiveMenu("photos")}>
          Photos
        </button>
        <button className="btn" onClick={() => setActiveMenu("users")}>
          Users
        </button>
      </div>
    </div>
  );
};

export default Navbar;

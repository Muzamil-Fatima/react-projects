import React from "react";
import SearchBox from "./SearchBox";
import Profile from "./Profile";

const Github = () => {
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-amber-600 text-center mb-8">
        GitHub Profile Viewer Project !
      </h1>
      <SearchBox />
      <Profile />
    </div>
  );
};

export default Github;

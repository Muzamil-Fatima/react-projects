import React from "react";

const SearchBox = ({ username, setUsername, fetchProfile }) => {
  return (
    <div className="">
      <div className="justify-center flex items-center flex-row">
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="GitHub username URL"
          className="border-2 border-amber-100 rounded-2xl py-2  mr-4 px-2 w-96 focus:outline-amber-500 "
        />
        <button
          onClick={fetchProfile}
          className="text-shadow-blue-500 border-amber-700 border-2 p-2 rounded-2xl bg-amber-600 hover:bg-black  "
        >
          See Profile
        </button>
      </div>
    </div>
  );
};
export default SearchBox;

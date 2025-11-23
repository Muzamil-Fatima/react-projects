import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Profile from "./Profile";

const Github = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);

  // Fetch Function
  const fetchProfile = async () => {
    if (!username) return;
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      setProfile(data);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };
  return (
    <div>
      <h1 className="text-4xl font-extrabold text-amber-600 text-center mb-8">
        GitHub Profile Viewer Project !
      </h1>
      <SearchBox
        username={username}
        setUsername={setUsername}
        fetchProfile={fetchProfile}
      />
      {profile && <Profile profile={profile} />}
    </div>
  );
};

export default Github;

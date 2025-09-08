import { useState } from "react";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import ProfileStats from "./ProfileStats";
import ProfileActions from "./ProfileActions";

export default function ProfileCard() {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    name: "Muzamil Khan",
    email: "muzamil@example.com",
    role: "Student",
    avatar: "/default-avatar.png",
    bookedClasses: 5,
    sessions: 3,
  });

  const handleSave = (formData) => {
    setUser({ ...user, ...formData });
    setEditMode(false);
  };

  return (
    <div className="bg-gray-300 p-6 rounded-xl shadow-md w-80 mx-auto mt-10">
      <ProfileImage avatar={user.avatar} />
      <ProfileInfo user={user} editMode={editMode} handleSave={handleSave} />
      <ProfileStats booked={user.bookedClasses} sessions={user.sessions} />
      <ProfileActions editMode={editMode} setEditMode={setEditMode} />
    </div>
  );
}

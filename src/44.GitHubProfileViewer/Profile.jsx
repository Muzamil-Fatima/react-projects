import React from "react";

const Profile = ({ profile }) => {
  return (
    <div className="flex justify-center items-center mt-10 text-white">
      <div className="p-6 shadow-lg rounded-xl border-2 border-amber-950 max-w-lg w-full space-y-6 ">

        {/* Centered Image */}
        <div className="flex justify-center">
          <img
            src={profile?.avatar_url}
            alt="GitHub Avatar"
            className="w-40 h-40 rounded-full border-2 border-amber-600 shadow"
          />
        </div>

        {/* Info */}
        <div className="space-y-2">
          <h2 className="text-2xl font-bold hover:text-amber-700">
            {profile?.name || "No Name"}
          </h2>

          <p className="hover:text-amber-600">@{profile?.login}</p>

          {profile?.bio && (
            <p className="hover:text-amber-500">{profile?.bio}</p>
          )}

          {profile?.location && (
            <p className="hover:text-amber-500">Location: {profile?.location}</p>
          )}

          <p className="hover:text-amber-400">
            Followers: {profile?.followers} | Following: {profile?.following}
          </p>

          <p className="hover:text-amber-500">
            Public Repos: {profile?.public_repos}
          </p>

          <p className="hover:text-amber-500">
            Joined: {new Date(profile?.created_at).toLocaleDateString()}
          </p>
        </div>

        {/* Button */}
        <div>
          <a
            href={profile?.html_url}
            target="_blank"
            className="block bg-amber-600 p-3 rounded-xl border-2 border-amber-800 w-full text-center text-white font-bold hover:bg-black transition cursor-pointer"
          >
            View on GitHub
          </a>
        </div>

      </div>
    </div>
  );
};

export default Profile;

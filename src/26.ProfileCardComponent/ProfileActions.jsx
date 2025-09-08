export default function ProfileActions({ editMode, setEditMode }) {
  return (
    <div className="mt-6 flex flex-col gap-2">
      <button
        onClick={() => setEditMode(!editMode)}
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        {editMode ? "Cancel" : "Edit Profile"}
      </button>
      <button className="bg-gray-200 py-2 rounded hover:bg-gray-300">
        Logout
      </button>
    </div>
  );
}

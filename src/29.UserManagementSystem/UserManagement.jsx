import { useState } from "react";

export default function UserManagement() {
  const [user, setUser] = useState([
    { id: 1, name: "Ali", email: "ali@gmail.com" },
    { id: 2, name: "Akbar", email: "akbar@gmail.com" },
    { id: 3, name: "Noor", email: "noor@gmail.com" },
    { id: 4, name: "Fatima", email: "fatima@gmail.com" },
    { id: 5, name: "Muzamil", email: "muzamil@gmail.com" },
  ]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");
  // handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // add or update user
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    if (editId) {
      setUser(
        user.map((u) =>
          u.id === editId ? { ...u, name: form.name, email: form.email } : u
        )
      );
      setEditId(null);
    } else {
      setUser([
        ...user,
        { id: Date.now(), name: form.name, email: form.email },
      ]);
    }
    setForm({ name: "", email: "" });
  };
  // delete user
  const handleDelete = (id) => {
    setUser(user.filter((u) => u.id !== id));
  };
  // edit user
  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email });
    setEditId(user.id);
  };
  // search filter
  const filteredUsers = user.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div>
        <h2>User Management</h2>
        {/* search user input box */}
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Search User here........"
          className="border-2 px-4 py-2 rounded-xl"
        />
        <form action="" onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Enter User Name.."
            className="border-2 px-4 py-2 rounded-xl"
          />{" "}
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter User Email"
            className="border-2 px-4 py-2 rounded-xl"
          />
          <button className="bg-blue-500 px-3 py-3">
            {editId ? "Update User" : "Add User"}
          </button>
        </form>
        {/* User List */}
        <ul>
          {filteredUsers.map((u) => (
            <li key={u.id}>
              <div>
                <p>{u.name}</p>
                <p>{u.email}</p>
              </div>
              <div>
                <button onClick={() => handleEdit(u)}>Edit</button>
                <button onClick={() => handleDelete(u.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

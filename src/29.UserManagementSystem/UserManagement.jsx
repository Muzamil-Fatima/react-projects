import { useState } from "react";

export default function UserManagement() {
  const [user, setUser] = useState([
    { name: "Muzmail", email: "muzamil@gmail.com" },
    { name: "Ali", email: "ali@gmail.com" },
    { name: "Ahmad", email: "ahmad@gmail.com" },
    { name: "Ayesha", email: "ayesha@gmail.com" },
    { name: "Fatima", email: "fatima@gmail.com" },
  ]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");
  const handleEdit = (index) => {
    setForm(user[index]);
    setEdit(index);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email) {
      if (edit !== null) {
        const updateUsers = [...user];
        updateUsers[edit] = form;
        setUser(updateUsers);
        setEdit(null);
      } else {
        setUser([...user, form]);
      }
      setForm({ name: "", email: "" });
    }
  };
  const handleDelete = (index) => {
    const updateUsers = user.filter((_, i) => i !== index);
    setUser(updateUsers);
  };
  const filterUser = user.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <h2 className="text-2xl font-extrabold m-10 text-center">
        User Management System
      </h2>
      <div className="flex justify-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search User here......."
          type="text"
          className="border-2 border-amber-50 px-6 py-3 rounded-2xl"
        />
        <button className="bg-blue-500 px-2 py-3 rounded-2xl ml-4">
          Search
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className="border-2 p-10 flex flex-col rounded-2xl mt-4"
      >
        <input
          value={form.name}
          name="name"
          onChange={handleChange}
          placeholder="Enter Name"
          type="text"
          className="border-2 border-amber-50 px-6 py-3 rounded-2xl mb-3"
        />
        <input
          value={form.email}
          name="email"
          onChange={handleChange}
          placeholder="Enter Email"
          type="email"
          className="border-2 border-amber-50 px-6 py-3 rounded-2xl mb-3"
        />
        <div className="flex justify-center">
          <button className="bg-blue-500 py-3 rounded-2xl ml-3 w-3xs">
            {edit !== null ? "Update" : "Add"}
          </button>
        </div>
      </form>
      {/* user list */}
      {filterUser.map((u, index) => (
        <ul key={index}>
          <li className="flex justify-between mt-2">
            <div className="grid grid-cols-2 gap-10 w-80">
              <p>{u.name}</p>
              <p>{u.email}</p>
            </div>
            <div className="space-x-2.5">
              <button
                onClick={() => handleEdit(index)}
                className="bg-blue-500 px-2 py-2 rounded-2xl"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-blue-500 px-2 py-2 rounded-2xl"
              >
                Delete
              </button>
            </div>
          </li>
        </ul>
      ))}
    </>
  );
}

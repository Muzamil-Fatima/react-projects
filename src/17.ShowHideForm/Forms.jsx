import { useState } from "react";

export default function Forms() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  function generatePassword(length = 12) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += chars[Math.floor(Math.random() * chars.length)];
    }
    setPassword(pass);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `Form Submitted!\nName: ${firstName} ${middleName} ${lastName}\nMobile: ${mobile}\nAddress: ${address}\nPassword: ${password}`
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-1/2 mx-auto mt-10 p-6 bg-gray-800 rounded-2xl text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-4">User Info Form</h2>

      <input
        type="text"
        placeholder="Enter First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="border-2 rounded px-3 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
        required
      />
      <input
        type="text"
        placeholder="Enter Middle Name"
        value={middleName}
        onChange={(e) => setMiddleName(e.target.value)}
        className="border-2 rounded px-3 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
      <input
        type="text"
        placeholder="Enter Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="border-2 rounded px-3 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
        required
      />
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        className="border-2 rounded px-3 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-amber-400"
        required
      />
      <textarea
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="border-2 rounded px-3 py-2 text-xl focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
        rows={3}
        required
      />

      <div className="flex gap-2 items-center">
        <input
          type="text"
          placeholder="Generated Password"
          value={password}
          readOnly
          className="border-2 rounded px-3 py-2 text-xl w-full bg-gray-700"
        />
        <button
          type="button"
          onClick={() => generatePassword()}
          className="bg-amber-500 px-3 py-2 rounded text-white hover:bg-amber-600"
        >
          Generate
        </button>
      </div>

      <button
        type="submit"
        className="bg-blue-600 px-5 py-3 rounded-2xl font-bold hover:bg-blue-700"
      >
        Submit
      </button>

      <p className="text-center mt-2 text-gray-400">
        Preview: {firstName} {middleName} {lastName}
      </p>
    </form>
  );
}

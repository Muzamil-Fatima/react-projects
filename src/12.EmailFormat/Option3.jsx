import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
export default function Option3() {
  const [email, setEmail] = useState();
  const [isValid, setIsValid] = useState(null);

  function handleInputField() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Invalid Email format!");
      setIsValid(false);
    } else {
      toast.success("Email Format is valid");
      setIsValid(true);
    }
  }
  return (
    <div className="m-4">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter Email"
        className={`border-1 px-3 py-4 mr-2 outline-none ${
          isValid === false
            ? "border-red-500"
            : isValid === true
            ? "border-white-500"
            : "border-white-500"
        }`}
      />
      <button className="px-6 py-3 bg-amber-400" onClick={handleInputField}>
        submit
      </button>
      <Toaster position="top-right" />
    </div>
  );
}
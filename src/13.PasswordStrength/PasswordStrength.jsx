import { useState } from "react";

export default function PasswordStrength() {
  const [showPassword, setShowPassword] = useState(false);
//   const [length, setLength] = useState();
  return (
    <>
      <div>
        <input
          type={showPassword ? "text" : "password"}
          className="border-2 h-14 w-64 pl-2 "
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          className="relative right-8 text-center"
        >
          {showPassword ? (
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffff"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 10c0-3.9 3.1-7 7-7s7 3.1 7 7h-1c0-3.3-2.7-6-6-6s-6 2.7-6 6H1zm4 0c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3-3-1.3-3-3zm1 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z"
              />
            </svg>
          ) : (
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffff"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 2c-1.5 0-2.8.4-3.9 1.2l.8.7C5.8 3.3 6.8 3 8 3c3.3 0 6 2.7 6 6h1c0-3.9-3.1-7-7-7zM1 3l1.6 1.5C1.6 5.7 1 7.3 1 9h1c0-1.5.5-2.8 1.4-3.8l2.2 2C5.2 7.7 5 8.3 5 9c0 1.7 1.3 3 3 3 .8 0 1.5-.3 2-.8l3 2.8.7-.7-12-11L1 3zm5.3 4.9l2.9 2.7c-.3.2-.7.4-1.2.4-1.1 0-2-.9-2-2 0-.4.1-.8.3-1.1zM11 9.5l-1-.9c-.2-.8-.9-1.5-1.8-1.6l-1-.9c.3-.1.5-.1.8-.1 1.7 0 3 1.3 3 3v.5z"
              />
            </svg>
          )}
        </button>
      </div>
      <p></p>
    </>
  );
}

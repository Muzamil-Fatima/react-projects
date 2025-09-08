import { useState } from "react";

export default function Age() {
  const [age, setAge] = useState(null);
//   const [birthDate, setBirthDate] = useState();
  const handleAge = () => {
    setAge();
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-1/2 bg-pink-300 p-20 flex flex-col justify-center rounded-2xl gap-4">
          <h1 className="font-extrabold text-3xl text-center">
            Age Calculator App
          </h1>
          <input type="date" className="border-2 py-3 px-2 " />
          <button onClick={handleAge} className="bg-blue-500 p-4 ">
            Calculate Age
          </button>
          {age && <p className="text-2xl text-amber-700">{age}</p>}
        </div>
      </div>
    </>
  );
}

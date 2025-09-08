import { useState } from "react";
import toast from "react-hot-toast";
import Capture from "./Capture.PNG";

export default function GradeBook() {
  const [number, setNumber] = useState();
  function handleInput1() {
    if (setNumber <= 100) {
      return true;
    } else {
      toast.error("Marks should he less than 100");
    }
  }
  return (
    <div className="flex justify-between items-center">
      <img src={Capture} alt="" />
      <div className="w-1/2 h-auto p-20 bg-white text-black rounded-2xl shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center mb-6">
          UOG Grading System{" "}
        </h1>
        <div>
          <label htmlFor="" className="font-bold text-xl">
            Total Credit Hour
          </label>
          <input
            type="text"
            name=""
            id=""
            readOnly
            className="border-2 w-18 h-12 ml-2 mr-2"
          />
          <label htmlFor="" className="font-bold text-xl">
            Total GPA
          </label>
          <input
            type="text"
            name=""
            id=""
            readOnly
            className="border-2 w-18 h-12 ml-2 mr-2"
          />
        </div>
        <div className="flex justify-evenly items-center mt-4">
          <label htmlFor="" className="font-bold text-2xl">
            Book 1:{" "}
          </label>
          <div>
            <label htmlFor="">Enter Grade</label>
            <input
              value={number}
              type="text"
              onChange={handleInput1}
              className="border-2 w-12 h-12 ml-2 mr-2"
            />
          </div>
          <div>
            <label htmlFor="">GPA</label>
            <input
              type="text"
              readOnly
              className="border-2 w-12 h-12 ml-2 mr-2"
            />
          </div>
          <div>=</div>
        </div>
        <div className="flex justify-center">
          <button className="h-12 w-2xs bg-teal-500 text-xl rounded-2xl mt-4">
           + Add one More Subject 
          </button>
        </div>
        <div className="mt-6">
          <label htmlFor="" className="font-bold text-2xl">
            Total SGPA
          </label>
          <input
            type="text"
            name=""
            id=""
            readOnly
            className="border-2 w-18 h-12 ml-2 mr-2"
          />
          <label htmlFor="" className="font-bold text-2xl">
            Total GPA
          </label>
          <input
            type="text"
            name=""
            id=""
            readOnly
            className="border-2 w-18 h-12 ml-2 mr-2"
          />
        </div>
      </div>
    </div>
  );
}

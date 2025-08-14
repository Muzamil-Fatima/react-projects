import { useState } from "react";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select Any Day");
  const options = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    
    <div className="text-2xl flex flex-col justify-center items-center rounded-2xl bg-blue-500 w-1/2">
      <div className="flex ml-12">
        <input
          type="dropdown"
          value={selected}
          className={`mt-2 flex border-2 border-amber-100 px-6 py-2 justify-between rounded-2xl w-64
            ${selected !== "Select Any Day" ? "text-white" : "text-gray-500"}
            `}
        />
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`relative right-14 flex items-center cursor-pointer ml-1 ${
            isOpen ? "rotate-180" : "rotate-0"
          } `}
        >
          💪
        </div>
      </div>
      {isOpen && (
        <div
          className="cursor-pointer text-2xl text-black font-bold mt-3 bg-red-400
         border-2 border-amber-100 rounded-2xl w-64
        
        "
        >
          {options.map((option, index) => {
            return (
              <div
                className="w-full hover:border-black-500 hover:border-dashed hover:border-2 rounded-2xl hover:bg-red-700 pl-2 py-1.5"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
                key={index}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

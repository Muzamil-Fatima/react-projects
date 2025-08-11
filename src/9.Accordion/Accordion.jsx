import { useState } from "react";

export default function Accordion() {
  const [isOpen, setIsOpen] = useState(false);
  const session = [
    { title: "Session 1", content: "Content for session 1" },
    { title: "Session 2", content: "Content for session 2" },
    { title: "Session 3", content: "Content for session 3" },
    { title: "Session 4", content: "Content for session 4" },
    { title: "Session 5", content: "Content for session 5" },
    { title: "Session 6", content: "Content for session 6" },
    { title: "Session 7", content: "Content for session 7" },
    { title: "Session 8", content: "Content for session 8" },
  ];
  const handleToggle = (index) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };
  return (
    <div className="w-full max-h-screen">
      {session.map((item, index) => {
        return (
          <div>
            <div
              key={index}
              className=" flex justify-between border-2 border-indigo-500 rounded-2xl px-3 py-4 mb-3"
            >
              <h2 className="">{item.title}</h2>
              <button
                onClick={() => handleToggle(index)}
                className="text-2xl h-6 w-6"
              >
                {isOpen === index ? "-" : "+"}
              </button>
            </div>
            {isOpen === index && (
              <div>
                <p>{item.content}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

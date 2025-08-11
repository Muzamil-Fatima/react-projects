import { useState } from "react";

export default function Tab() {
  const [isActive, setIsActive] = useState(0);
  const Tabs = [
    { title: "Tab1", content: "Content of Tab 1" },
    { title: "Tab2", content: "Content of Tab 2" },
    { title: "Tab3", content: "Content of Tab 3" },
    { title: "Tab4", content: "Content of Tab 4" },
    { title: "Tab5", content: "Content of Tab 5" },
    { title: "Tab6", content: "Content of Tab 6" },
  ];
  return (
    <div className="w-full max-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-extrabold ">Tab Switching</h1>
      <div className="flex space-x-5 mt-6">
        {Tabs.map((tab, index) => (
          <div
            key={index}
            className={`  ${
              isActive === index
                ? "border-b-2 text-blue-500 border-blue-700"
                : "border-transparent text-gray-400"
            } cursor-pointer`}
            onClick={() => setIsActive(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="border-1 rounded-t-2xl py-8 w-96">
        {Tabs[isActive].content}
      </div>
    </div>
  );
}

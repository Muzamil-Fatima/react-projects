import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ToDo() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const handleList = () => {
    if (task.trim() !== "") {
      setList([{ id: Date.now(), text: task, completed: false }, ...list]);
      toast.success("Your Task Added Successfully");
      setTask("");
    } else {
      toast.error("Please Add Your Task!");
    }
  };
  const handleTaskComplete = (id) => {
    const updateList = list.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    updateList.sort((a, b) => a.completed - b.completed);
    setList(updateList);
    toast.success("Task Completed");
  };
  return (
    <>
      <div className="bg-[#d88771] rounded-xl w-1/2 flex flex-col justify-center items-center p-10 m-auto shadow-lg hover:shadow-[0_6px_12px_rgba(255,255,255,0.5)] transition-shadow duration-200">
        <div className="flex gap-3 mb-5 w-full justify-center pt-10">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            type="text"
            className="border-2 px-2 py-3 m-3 rounded-xl w-3xs"
            placeholder="Enter Task"
          />
          <button
            onClick={handleList}
            className="bg-amber-400 rounded-2xl h-14 w-3xs m-3"
          >
            Add
          </button>
        </div>
        {list.map((todo) => (
          <div className="flex items-center w-full">
            <ul className=" bg-[#e2c35d] gap-1.5 text-black px-4 mb-2 w-full py-3 rounded-xl shadow-md">
              <li>
                <span
                  className={todo.completed ? "line-through text-gray-500" : ""}
                >
                  {todo.text}{" "}
                </span>
                <span className="flex justify-end items-center">
                  <button
                    disabled={todo.completed}
                    onClick={() => handleTaskComplete(todo.id)}
                    className="bg-amber-400 rounded-2xl h-8 px-3 "
                  >
                    ✔
                  </button>
                  <button
                    onClick={() =>
                      setList(list.filter((t) => t.id !== todo.id))
                    }
                    className="bg-amber-400 rounded-2xl h-8 px-3 ml-2"
                  >
                    ❌
                  </button>
                </span>
              </li>
            </ul>
          </div>
        ))}
      </div>
      <Toaster className="top-right" />
    </>
  );
}

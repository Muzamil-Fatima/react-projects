import { useState } from "react";
export default function Task() {
  const [input, setInput] = useState();
  const [tasks, setTasks] = useState([]);
  //  Add Task
  const taskAdd = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="border-4 flex justify-center items-center flex-col rounded-2xl w-full p-6 sm:w-3/4 md:w-2/3 lg:w-1/2">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold m-4 flex justify-center items-center mb-8">
        📝 Task Manager
      </h2>
      <div className="flex flex-col sm:flex-row items-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="border-2 border-gray-800 px-6 py-4 rounded-2xl sm:w-64"
          placeholder="Enter Task Here.........."
        />
        <button
          onClick={taskAdd}
          className="bg-blue-500 px-4 py-2 rounded-2xl mt-3  sm:mt-o sm:ml-4 hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <div className="mt-4">
        <ul  className="space-y-3 w-full">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between space-x-8 items-center px-4 py-2 rounded-xl text-sm sm:text-lg">
              {" "}
              <span> {task.text}</span>{" "}
              <button onClick={() => deleteTask(task.id)}>❌</button>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

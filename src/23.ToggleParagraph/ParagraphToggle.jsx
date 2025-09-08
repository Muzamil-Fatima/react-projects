import { useState } from "react";

export default function ParagraphToggle() {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="w-1/2  bg-amber-300 p-20 flex-col space-y-3 rounded-2xl">
        <h1 className="text-2xl font-bold">Paragraph Toggle Example:</h1>
        <button onClick={handleToggle} className="bg-blue-600 rounded-xl p-3">
          {show ? "show paragraph" : "hidden paragraph"}
        </button>
        {show && (
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            corporis, incidunt quos blanditiis ratione modi quo quis magni,
            dolorum itaque hic expedita! Aut culpa velit animi eum
            necessitatibus nobis quibusdam?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolor cupiditate iste commodi
            voluptatum provident dolorum, tenetur saepe reprehenderit excepturi
            vitae eveniet a cum odio, asperiores tempore adipisci, corporis
            ipsum libero!
          </p>
        )}
      </div>
    </div>
  );
}

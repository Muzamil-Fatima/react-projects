import React, { useState } from "react";
import Box from "./Box";

const AlertBox = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="p-6">
      <button
        onClick={() => setShowAlert(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Show Alert
      </button>

      {showAlert && (
        <Box
          type="success"
          title="Success!"
          message="Your operation was completed successfully."
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default AlertBox;

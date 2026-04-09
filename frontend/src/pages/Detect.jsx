import { useState } from "react";
import { predictText } from "../services/api";
import { motion } from "framer-motion";

export default function Detect() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = async () => {
    const token = localStorage.getItem("token");
    const res = await predictText(text, token);
    setResult(res.data.prediction);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-white p-6 rounded-xl shadow-lg w-96"
      >
        <h2 className="text-xl font-bold mb-4">Detect Betting Content</h2>

        <input
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter text"
          onChange={(e) => setText(e.target.value)}
        />

        <button
          onClick={handleCheck}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Check
        </button>

        {result && (
          <p className="mt-4 text-lg font-semibold text-center">{result}</p>
        )}
      </motion.div>
    </div>
  );
}
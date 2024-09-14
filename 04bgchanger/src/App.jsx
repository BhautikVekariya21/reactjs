import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("Olive");

  return (
    <div 
      className="w-full h-screen duration-200  " // Full width and height
      style={{ backgroundColor: color }} // Dynamically change background color
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("Purple")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "Purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("PowderBlue")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "PowderBlue" }}
          >
            PowderBlue
          </button>
          <button
            onClick={() => setColor("Yellow")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "Yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("Teal")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "Teal" }}
          >
            Teal
          </button>
          <button
            onClick={() => setColor("PaleTurquoise")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "PaleTurquoise" }}
          >
            PaleTurquoise
          </button>
          <button
            onClick={() => setColor("LightSkyBlue")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "LightSkyBlue" }}
          >
            LightSkyBlue
          </button>
          
          <button
            onClick={() => setColor("Indigo")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "Indigo" }}
          >
            Indigo
          </button>
          <button
            onClick={() => setColor("MintCream")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "MintCream" }}
          >
            MintCream
          </button>
          <button
            onClick={() => setColor("RebeccaPurple")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "RebeccaPurple" }}
          >
            RebeccaPurple
          </button>
          <button
            onClick={() => setColor("Plum")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "Plum" }}
          >
            Plum
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

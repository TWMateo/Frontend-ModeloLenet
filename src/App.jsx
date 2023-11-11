import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body className="bg-red-500 h-screen w-full flex flex-col items-center gap-5">
        <h1 className="text-xl mt-5 underline decoration-2">Modelo Para el Reconocimiento de DÍgitos</h1>
        <div className="bg-white rounded-md border-2 border-black p-5">
          <h2 className="p-2 font-bold">Ingrese la imágen</h2>
          <input className="p-2" type="file"></input>
          <h2 className="p-2 font-bold">La imágen es:</h2>
          <h2 className="p-2 font-bold">El número es:</h2>
        </div>
      </body>
    </>
  );
}

export default App;

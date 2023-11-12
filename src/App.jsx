import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setImageUrl(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      try {
        const response = await fetch('https://backmodelolenetenv.onrender.com/predict', {
          method: 'POST',
          body: formData,
        });
        if (response.ok) {
          const result = await response.json();
          setPredictionResult(Object.values(result)[1]);
        } else {
          console.error('Error al realizar la predicción.');
        }
      } catch (error) {
        console.error('Error de red:', error);
      }
    } else {
      console.error('Selecciona una imagen antes de enviar.');
    }
  };

  return (
      <div className="bg-red-500 h-screen w-full flex flex-col items-center gap-5">
        <h1 className="text-xl mt-5 underline decoration-2">Modelo Para el Reconocimiento de Dígitos</h1>
        <div className="bg-white rounded-md border-2 border-black p-5">
          <form onSubmit={handleSubmit} className="flex flex-col">
          <h2 className="p-2 pr-0 font-bold">Ingrese la imágen</h2>
          <input className="p-2 pl-0" type="file" onChange={handleFileChange}/>
          <button type="submit" className="border rounded-md border-black p-1 bg-slate-200">Enviar</button>
          </form>
          <h2 className="p-2 font-bold">La imágen es:</h2>
          <img src={imageUrl} className="h-10 w-10" alt=""/>
          <h2 className="p-2 font-bold">El número es:</h2>
          {predictionResult ? <h2>{predictionResult}</h2>:<h2>Debes escoger una imágen para hacer la predicción</h2>}
        </div>
      </div>
  );
}

export default App;

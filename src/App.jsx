import { useState } from 'react';
import ModeloOSI from './components/modelosi';
import Modelotcpip from './components/modelotcpip';

function App() {
  const [view, setView] = useState('osi'); // Estado inicial para mostrar el modelo OSI

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center"
      style={{ backgroundImage: "url('/network-background.svg')" }}
    >
      <div className="mt-8 mb-4 flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-500"
          onClick={() => setView('osi')}
        >
          Mostrar Modelo OSI
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-green-500"
          onClick={() => setView('tcp')}
        >
          Mostrar Modelo TCP/IP
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-500"
          onClick={() => setView('compare')}
        >
          Comparar Modelos
        </button>
      </div>

      {view === 'osi' && <div className="w-full"><ModeloOSI /></div>}
      {view === 'tcp' && <div className="w-full"><Modelotcpip /></div>}
      {view === 'compare' && (
        <div className="flex w-full">
          <div className="w-1/2">
            <h2 className="text-center text-2xl font-bold">Modelo OSI</h2>
            <ModeloOSI />
          </div>
          <div className="w-1/2">
            <h2 className="text-center text-2xl font-bold">Modelo TCP/IP</h2>
            <Modelotcpip />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

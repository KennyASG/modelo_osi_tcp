import React, { useState } from 'react';
import Switch from 'react-switch';
import ModeloOSI from './components/modelosi';
import Modelotcpip from './components/modelotcpip';

function App() {
  const [view, setView] = useState('osi'); // Estado inicial para mostrar el modelo OSI
  const [checked, setChecked] = useState(true); // Estado inicial para el toggle switch

  const handleToggleChange = (nextChecked) => {
    setChecked(nextChecked);
    setView(nextChecked ? 'osi' : 'tcp');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center"
      style={{ backgroundImage: "url('/network-background.svg')" }}
    >
      <div className="w-full flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-black">
          {view === 'compare' ? 'Modelo OSI & Modelo TCP/IP' : view === 'osi' ? 'Modelo OSI' : 'Modelo TCP/IP'}
        </h1>
        <div className="flex flex-col items-center">
          <label className="flex items-center mb-4">
            <span className="mr-2 text-lg text-black">Modelo TCP/IP</span>
            <Switch
              onChange={handleToggleChange}
              checked={checked}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={30}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={48}
            />
            <span className="ml-2 text-lg text-black">Modelo OSI</span>
          </label>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-500"
            onClick={() => setView('compare')}
          >
            Comparar Modelos
          </button>
        </div>
      </div>

      {view === 'osi' && <div className="w-full"><ModeloOSI /></div>}
      {view === 'tcp' && <div className="w-full"><Modelotcpip /></div>}
      {view === 'compare' && (
        <div className="flex w-full">
          <div className="w-1/2">
            <h2 className="text-center text-2xl font-bold text-white">Modelo OSI</h2>
            <ModeloOSI />
          </div>
          <div className="w-1/2">
            <h2 className="text-center text-2xl font-bold text-white">Modelo TCP/IP</h2>
            <Modelotcpip />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

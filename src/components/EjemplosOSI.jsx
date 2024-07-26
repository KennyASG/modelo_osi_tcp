import React from "react";

const ejemplosPorCapaOSI = {
  "APLICACION": [
    "/osi_aplicacion1.jpeg",
    "/osi_aplicacion2.png",
  ],
  "PRESENTACION": [
    "/osi_presentacion1.png",
    "/osi_presentacion2.png",
  ],
  "SESION": [
    "/osi_sesion1.png",
    "/osi_sesion2.png",
  ],
  "TRANSPORTE": [
    "/osi_transporte1.png",
    "/osi_transporte2.png",
  ],
  "RED": [
    "/osi_red1.png",
    "/osi_red2.png",
  ],
  "ENLACE DE DATOS": [
    "/osi_enlace_datos1.png",
    "/osi_enlace_datos2.png",
  ],
  "FISICA": [
    "/osi_fisica1.png",
    "/osi_fisica2.png",
  ],
};

const EjemplosOSI = ({ layerTitle }) => {
  const imagenes = ejemplosPorCapaOSI[layerTitle] || [];

  return (
    <div className="flex flex-wrap justify-center">
      {imagenes.map((src, index) => (
        <div key={index} className="p-2">
          <img src={src} alt={`Ejemplo de ${layerTitle}`} className="max-w-full h-auto rounded shadow-lg" />
        </div>
      ))}
    </div>
  );
};

export default EjemplosOSI;

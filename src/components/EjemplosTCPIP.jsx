import React from "react";

const ejemplosPorCapaTCPIP = {
  "APLICACION": [
    "/images/tcpip_aplicacion1.png",
    "/images/tcpip_aplicacion2.png",
  ],
  "TRANSPORTE": [
    "/images/tcpip_transporte1.png",
    "/images/tcpip_transporte2.png",
  ],
  "INTERNET": [
    "/images/tcpip_internet1.png",
    "/images/tcpip_internet2.png",
  ],
  "ACCESO DE RED": [
    "/images/tcpip_acceso_red1.png",
    "/images/tcpip_acceso_red2.png",
  ],
};

const EjemplosTCPIP = ({ layerTitle }) => {
  const imagenes = ejemplosPorCapaTCPIP[layerTitle] || [];

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

export default EjemplosTCPIP;

import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./transitions.css"; 

const ejemplosPorCapaOSI = {
  "APLICACIÓN": [
    { src: "/pop3.webp", alt: "POP3", definition: "POP3 es un protocolo de correo electrónico usado para descargar correos desde un servidor remoto.", reason: "Pertenece a la capa de aplicación porque se encarga de la gestión del correo electrónico a nivel de usuario.", useCases: "Clientes de correo electrónico.", ports: "Puerto 110" },
    { src: "/navegador.png", alt: "Navegador web", definition: "Un navegador web es una aplicación utilizada para acceder a sitios web y contenido en la web.", reason: "Pertenece a la capa de aplicación porque facilita la interacción del usuario con los sitios web.", useCases: "Navegadores web como Chrome, Firefox.", ports: "Puerto 80 (HTTP), Puerto 443 (HTTPS)" },
  ],
  "PRESENTACIÓN": [
    { src: "/mpeg.png", alt: "MPEG", definition: "MPEG es un formato de compresión de video utilizado para el almacenamiento y transmisión de video digital.", reason: "Pertenece a la capa de presentación porque se encarga de la codificación y compresión de datos.", useCases: "Reproductores de video, streaming.", ports: "Puerto no aplicable" },
    { src: "/ssl.png", alt: "SSL", definition: "SSL es un protocolo de seguridad que proporciona comunicaciones seguras a través de una red informática.", reason: "Pertenece a la capa de presentación porque se encarga del cifrado de datos para una transmisión segura.", useCases: "Transacciones seguras en línea.", ports: "Puerto 443 (HTTPS)" },
  ],
  "SESIÓN": [
    { src: "/pptp.webp", alt: "PPTP", definition: "PPTP es un protocolo de túnel de punto a punto que permite transferencias seguras de datos a través de redes públicas.", reason: "Pertenece a la capa de sesión porque establece y gestiona sesiones de comunicación entre dispositivos.", useCases: "Conexiones VPN.", ports: "Puerto 1723" },
    { src: "/rpc.png", alt: "RPC", definition: "RPC es un protocolo que un programa puede usar para solicitar un servicio de un programa ubicado en otro equipo en una red.", reason: "Pertenece a la capa de sesión porque permite la comunicación y gestión de tareas remotas.", useCases: "Servicios distribuidos.", ports: "Puerto 135" },
  ],
  "TRANSPORTE": [
    { src: "/tcp.gif", alt: "TCP", definition: "TCP es un protocolo de comunicación que permite la transmisión de datos de manera fiable entre dos dispositivos.", reason: "Pertenece a la capa de transporte porque garantiza la entrega correcta de datos entre dispositivos.", useCases: "Transmisión de datos, conexiones de red.", ports: "Puerto varía según la aplicación" },
    { src: "/UDP-gif.gif", alt: "UDP", definition: "UDP es un protocolo de comunicación que permite la transmisión de datos sin establecer una conexión previa.", reason: "Pertenece a la capa de transporte porque permite la transmisión rápida de datos sin verificación.", useCases: "Transmisiones en vivo, juegos en línea.", ports: "Puert varía según la aplicación" },
  ],
  "RED": [
    { src: "/IP.jpg", alt: "IP", definition: "IP es el protocolo principal de la capa de red que se encarga de la transmisión de paquetes de datos entre dispositivos.", reason: "Pertenece a la capa de red porque se encarga del direccionamiento y enrutamiento de paquetes.", useCases: "Enrutamiento de paquetes de datos.", ports: "Puerto no aplicable" },
    { src: "/icmp.png", alt: "ICMP", definition: "ICMP es un protocolo utilizado para enviar mensajes de control y error en la red.", reason: "Pertenece a la capa de red porque se utiliza para el diagnóstico y la gestión de errores de red.", useCases: "Ping, traceroute.", ports: "Puerto no aplicable" },
  ],
  "ENLACE DE DATOS": [
    { src: "/ethernetswitch.jpg", alt: "Ethernet Switch", definition: "Un switch Ethernet es un dispositivo de red que conecta varios dispositivos en una red local (LAN).", reason: "Pertenece a la capa de enlace de datos porque gestiona la transferencia de datos entre dispositivos en una red local.", useCases: "Redes locales, comunicación de datos.", ports: "Puerto no aplicable" },
    { src: "/ppp.webp", alt: "PPP", definition: "PPP es un protocolo de enlace de datos utilizado para establecer una conexión directa entre dos nodos de red.", reason: "Pertenece a la capa de enlace de datos porque establece y configura conexiones de datos.", useCases: "Conexiones punto a punto.", ports: " Puerto no aplicable" },
  ],
  "FISICA": [
    { src: "/ethernet.webp", alt: "RJ", definition: "RJ es un tipo de conector físico utilizado en redes de telecomunicaciones y redes de datos.", reason: "Pertenece a la capa física porque define la interfaz física y los estándares eléctricos.", useCases: "Conectores de red, cables de telecomunicaciones.", ports: "No aplicable" },
    { src: "/fibrao.jpg", alt: "Fibra Óptica", definition: "La fibra óptica es una tecnología de transmisión que utiliza hilos de vidrio o plástico para transmitir datos a largas distancias.", reason: "Pertenece a la capa física porque se encarga de la transmisión de señales ópticas.", useCases: "Conexiones de alta velocidad, telecomunicaciones.", ports: "Puerto no aplicable" },
  ],
};


const EjemplosOSI = ({ layerTitle }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imagenes = ejemplosPorCapaOSI[layerTitle] || [];

  const handleImageClick = (image) => {
    setSelectedImage(selectedImage === image ? null : image);
  };

  return (
    <div className="flex flex-wrap justify-center w-full h-full">
      {imagenes.map((image, index) => (
        <div
          key={index}
          className="p-1 sm:p-2 w-full sm:w-1/2 lg:w-1/3 cursor-pointer relative flex flex-col items-center justify-center"
          onClick={() => handleImageClick(image)}
        >
          <CSSTransition
            in={selectedImage === image}
            timeout={300}
            classNames="flip"
            unmountOnExit
          >
            <div className="absolute inset-0 backface-hidden flex items-center justify-center bg-white p-4 rounded shadow-lg w-full h-full flex-col">
              <div>
                <h2 className="text-xl font-bold mb-2">{image.alt}</h2>
                <p className="mb-2">{image.definition}</p>
                <p className="mb-2 font-bold">{image.reason}</p>
                <p className="mb-2 text-xl">{image.ports}</p>
              </div>
            </div>
          </CSSTransition>
          <CSSTransition
            in={selectedImage !== image}
            timeout={300}
            classNames="flip"
            unmountOnExit
          >
            <div className="w-full h-full flex flex-col items-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-3/4 object-cover rounded shadow-lg backface-hidden"
              />
              <p className="mt-2 text-sm text-center text-white bg-black bg-opacity-75 p-1 rounded">
                {image.useCases}
              </p>
            </div>
          </CSSTransition>
        </div>
      ))}
    </div>
  );
};

export default EjemplosOSI;
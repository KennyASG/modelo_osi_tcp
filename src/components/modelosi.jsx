import React, { useState } from "react";
import Modal from "react-modal";
import EjemplosOSI from "./EjemplosOSI";

const layers = [
  {
    id: 7,
    title: "APLICACION",
    protocols: "HTTP, FTP, SMTP, POP3",
    bgColor: "bg-gradient-to-r from-purple-800 to-purple-500",
    textColor: "text-[#ba76f9]",
    imgSrc: "/osi_aplicacion.svg",
  },
  {
    id: 6,
    title: "PRESENTACION",
    protocols: "JPEG, MPEG, SSL, TLS",
    bgColor: "bg-gradient-to-r from-yellow-600 to-yellow-400",
    textColor: "text-[#facc15]",
    imgSrc: "/osi_presentacion.svg",
  },
  {
    id: 5,
    title: "SESION",
    protocols: "RPC, NetBIOS, PPTP",
    bgColor: "bg-gradient-to-r from-teal-700 to-teal-500",
    textColor: "text-[#14B7A6]",
    imgSrc: "/osi_sesion.svg",
  },
  {
    id: 4,
    title: "TRANSPORTE",
    protocols: "TCP, UDP",
    bgColor: "bg-gradient-to-r from-blue-600 to-blue-400",
    textColor: "text-[#60A5FA]",
    imgSrc: "/osi_transporte.svg",
  },
  {
    id: 3,
    title: "RED",
    protocols: "IP, ICMP, IPSec",
    bgColor: "bg-gradient-to-r from-gray-600 to-gray-400",
    textColor: "text-[#9AA1AD]",
    imgSrc: "/osi_red.svg",
  },
  {
    id: 2,
    title: "ENLACE DE DATOS",
    protocols: "Ethernet, PPP, Switch",
    bgColor: "bg-gradient-to-r from-indigo-700 to-indigo-500",
    textColor: "text-[#818cf8]",
    imgSrc: "/osi_enlace_datos.svg",
  },
  {
    id: 1,
    title: "FISICA",
    protocols: "RS232, 802.11, DSL",
    bgColor: "bg-gradient-to-r from-pink-700 to-pink-500",
    textColor: "text-[#f472b6]",
    imgSrc: "/osi_fisica.svg",
  },
];

const layerDetails = {
  7: "7. Capa de Aplicación (Application): Proporciona servicios de red a las aplicaciones del usuario final, actuando como una interfaz entre las aplicaciones y los servicios de red. Define protocolos que las aplicaciones utilizan para comunicarse entre sí.",
  6: "6. Capa de Presentación (Presentation): Traduce, cifra y comprime los datos para la capa de aplicación. Se encarga de la representación de los datos, asegurando que la información enviada por la capa de aplicación de un sistema pueda ser leída por la capa de aplicación de otro sistema.",
  5: "5. Capa de Sesión (Session): Establece, gestiona y termina sesiones entre aplicaciones en diferentes dispositivos. Coordina y organiza el intercambio de datos entre las aplicaciones.",
  4: "4. Capa de Transporte (Transport): Proporciona una transferencia de datos confiable y transparente entre los sistemas finales, incluyendo el control de flujo, el establecimiento y terminación de conexiones, y la corrección de errores de extremo a extremo.",
  3: "3. Capa de Red (Network): Gestiona el direccionamiento lógico y el enrutamiento de paquetes a través de la red. Determina la ruta que deben seguir los datos desde el origen hasta el destino a través de múltiples redes.",
  2: "2. Capa de Enlace de Datos (Data Link): Proporciona la transferencia de datos de nodo a nodo, incluyendo la detección y corrección de errores que puedan ocurrir en la capa física. Organiza los bits en tramas de datos y controla el acceso al medio de transmisión.",
  1: "1. Capa Física (Physical): Se encarga de la transmisión y recepción de bits sin procesar a través de un medio físico. Define las características eléctricas, mecánicas, de procedimiento y funcionales para activar, mantener y desactivar la conexión física entre sistemas.",
};

const examples = {
  7: "Ejemplos de esta capa: Navegadores web (HTTP), clientes de correo (SMTP, POP3), clientes FTP.",
  6: "Ejemplos de esta capa: Compresión de datos (JPEG, MPEG), cifrado de datos (SSL, TLS).",
  5: "Ejemplos de esta capa: Control de sesión (RPC, NetBIOS, PPTP).",
  4: "Ejemplos de esta capa: Protocolo de Control de Transmisión (TCP), Protocolo de Datagramas de Usuario (UDP).",
  3: "Ejemplos de esta capa: Protocolo de Internet (IP), Protocolo de Mensajes de Control de Internet (ICMP), Protocolo de Seguridad de Internet (IPSec).",
  2: "Ejemplos de esta capa: Ethernet, Protocolo Punto a Punto (PPP), Switches.",
  1: "Ejemplos de esta capa: RS232, Wi-Fi, DSL.",
};

const ModeloOSI = ({ expandApplicationLayer }) => {
  const [expandedLayer, setExpandedLayer] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentExample, setCurrentExample] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

  const handleExpand = (id) => {
    setExpandedLayer(expandedLayer === id ? null : id);
  };

  const openModal = (example, title) => {
    setCurrentExample(example);
    setCurrentTitle(title);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentExample("");
    setCurrentTitle("");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden">
      {layers.map((layer) => (
        <div key={layer.id} className="w-full">
          <div
            className={`w-full ${
              expandApplicationLayer && layer.id === 7 ? "h-84" : "h-28"
            } ${
              layer.bgColor
            } text-white flex items-center relative px-4 py-4 transition transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
            onClick={() => handleExpand(layer.id)}
          >
            <div className="absolute left-12 top-4 text-2xl font-bold">
              {layer.id}
            </div>
            <div className="absolute left-12 top-12 w-20 h-2 bg-gray-300"></div>
            <div className="text-left flex-1 relative ml-24 overflow-hidden">
              <h2 className="text-4xl font-bold px-4 py-2 rounded-full inline-block transform translate-x-10 shadow-lg">
                {layer.title}
              </h2>
              <p
                className={`mt-2 text-left font-sans text-lg ml-12 ${layer.textColor} font-bold`}
              >
                PROTOCOLOS: {layer.protocols}
              </p>
            </div>
            <div
              className="absolute top-1/2 transform -translate-y-1/2 right-28 px-4 text-center"
              onClick={() => openModal(examples[layer.id], layer.title)}
            >
              <img
                src={layer.imgSrc}
                alt={layer.title}
                className="w-16 h-16 mx-auto cursor-pointer"
              />
              <p className="mt-2 text-white text-sm cursor-pointer">
                Ver Ejemplos
              </p>
            </div>
          </div>
          {expandedLayer === layer.id && (
            <div className="p-4 text-lg bg-gray-200 text-black">
              <p className="whitespace-pre-wrap">{layerDetails[layer.id]}</p>
            </div>
          )}
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ejemplos"
        className="bg-white p-4 rounded shadow-lg"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        style={{ content: { height: "80vh", overflow: "auto" } }}
      >
        <div
          className="p-4 rounded shadow-lg h-full flex flex-col justify-between"
          style={{
            backgroundImage: "url('/network-background.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <h2 className="text-xl font-bold mb-4 text-black">{currentTitle}</h2>
            <p className="text-lg text-black">{currentExample}</p>
            <EjemplosOSI layerTitle={currentTitle} />
          </div>
          <button
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-500"
            onClick={closeModal}
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ModeloOSI;

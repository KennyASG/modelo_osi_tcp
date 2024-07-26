// modelotcpip.jsx
import React, { useState } from "react";
import Modal from "react-modal";

const layers = [
  {
    id: 4,
    title: "APLICACION",
    protocols: "DNS, FTP, POP3/IMAP, HTTP",
    bgColor: "bg-gradient-to-r from-purple-800 to-purple-500",
    textColor: "text-[#ba76f9]",
    imgSrc: "/aplicaciontcp.svg",
  },
  {
    id: 3,
    title: "TRANSPORTE",
    protocols: "TCP, UDP",
    bgColor: "bg-gradient-to-r from-yellow-600 to-yellow-400",
    textColor: "text-[#facc15]",
    imgSrc: "/transporttcp.svg",
  },
  {
    id: 2,
    title: "INTERNET",
    protocols: "IPv4, IPv6, BGP, ICMP",
    bgColor: "bg-gradient-to-r from-teal-700 to-teal-500",
    textColor: "text-[#14B7A6]",
    imgSrc: "/internettcp.svg",
  },
  {
    id: 1,
    title: "ACCESO DE DATOS",
    protocols: "ETHERNET, Wi-Fi",
    bgColor: "bg-gradient-to-r from-blue-600 to-blue-400",
    textColor: "text-[#60A5FA]",
    imgSrc: "/datalinktcp.svg",
  }
];

const layerDetails = {
  4: "Modelo TCP/IP\n1. Capa de Aplicación (Application): Proporciona servicios de red directamente a las aplicaciones del usuario final. Esta capa permite que las aplicaciones accedan a los servicios de red y define los protocolos utilizados por las aplicaciones para comunicarse.",
  3: "Modelo TCP/IP\n2. Capa de Transporte (Transport): Asegura la transmisión confiable de datos entre dispositivos mediante el control de flujo, corrección de errores y segmentación de datos. Gestiona la comunicación de extremo a extremo y la retransmisión de datos perdidos o dañados.",
  2: "Modelo TCP/IP\n3. Capa de Internet (Network): Se encarga del direccionamiento lógico y el enrutamiento de paquetes de datos a través de diferentes redes. Determina la mejor ruta para que los datos lleguen a su destino y maneja la fragmentación y reensamblaje de paquetes.",
  1: "Modelo TCP/IP\n4. Capa de Acceso a la Red (Network Interface): Define los métodos para la transmisión de datos a través del medio físico de la red. Esto incluye especificaciones sobre los formatos de tramas de datos, protocolos de acceso al medio y transmisión física."
};

const examples = {
  4: "Ejemplos de Capa de Aplicación: Navegadores web (HTTP), clientes de correo (SMTP, POP3), clientes FTP.",
  3: "Ejemplos de Capa de Transporte: Protocolo de Control de Transmisión (TCP), Protocolo de Datagramas de Usuario (UDP).",
  2: "Ejemplos de Capa de Internet: Protocolo de Internet (IP), Protocolo de Mensajes de Control de Internet (ICMP), Protocolo de Pasarela Exterior (BGP).",
  1: "Ejemplos de Capa de Acceso a la Red: Ethernet, Wi-Fi, DSL."
};

const Modelotcpip = ({ expandApplicationLayer, expandDataAccessLayer }) => {
  const [expandedLayer, setExpandedLayer] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentExample, setCurrentExample] = useState("");

  const handleExpand = (id) => {
    setExpandedLayer(expandedLayer === id ? null : id);
  };

  const openModal = (example) => {
    setCurrentExample(example);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentExample("");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden">
      {layers.map((layer) => (
        <div key={layer.id} className="w-full">
          <div
            className={`w-full ${expandApplicationLayer && layer.id === 4 ? 'h-[21.8rem]' : expandDataAccessLayer && layer.id === 1 ? 'h-56' : 'h-28'} ${layer.bgColor} text-white flex items-center relative px-4 py-4 transition transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer`}
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
              <p className={`mt-2 text-left font-sans text-lg ml-12 ${layer.textColor} font-bold`}>
                PROTOCOLOS: {layer.protocols}
              </p>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 right-28 px-4 text-center" onClick={() => openModal(examples[layer.id])}>
              <img src={layer.imgSrc} alt={layer.title} className="w-16 h-16 mx-auto cursor-pointer" />
              <p className="mt-2 text-white text-sm cursor-pointer">Ver Ejemplos</p>
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
      >
        <h2 className="text-xl font-bold mb-4">Ejemplos</h2>
        <p className="text-lg">{currentExample}</p>
        <button
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded shadow hover:bg-red-500"
          onClick={closeModal}
        >
          Cerrar
        </button>
      </Modal>
    </div>
  );
};

export default Modelotcpip;

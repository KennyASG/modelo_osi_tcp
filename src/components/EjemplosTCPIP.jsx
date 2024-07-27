import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./transitions.css";

const ejemplosPorCapaTCPIP = {
  "APLICACIÓN": [
    { src: "/http.jpeg", alt: "HTTP", definition: "HTTP es un protocolo de la capa de aplicación usado para la transmisión de información en la web.", reason: "Pertenece a la capa de aplicación porque facilita la comunicación entre aplicaciones web.", useCases: "Navegadores web, servidores web." },
    { src: "/ftp.webp", alt: "FTP", definition: "FTP es un protocolo de red utilizado para la transferencia de archivos entre un cliente y un servidor.", reason: "Pertenece a la capa de aplicación porque se encarga de la gestión de archivos a nivel de usuario.", useCases: "Clientes FTP, servidores FTP." },
    { src: "/dns.webp", alt: "DNS", definition: "DNS es un sistema que traduce nombres de dominio a direcciones IP.", reason: "Pertenece a la capa de aplicación porque facilita la resolución de nombres de dominio para aplicaciones.", useCases: "Servidores DNS." },
    
  ],
  "TRANSPORTE": [
    { src: "/tcp.gif", alt: "TCP", definition: "TCP es un protocolo de comunicación que permite la transmisión de datos de manera fiable entre dos dispositivos.", reason: "Pertenece a la capa de transporte porque garantiza la entrega correcta de datos entre dispositivos.", useCases: "Transmisión de datos, conexiones de red." },
    { src: "/UDP-gif.gif", alt: "UDP", definition: "UDP es un protocolo de comunicación que permite la transmisión de datos sin establecer una conexión previa.", reason: "Pertenece a la capa de transporte porque permite la transmisión rápida de datos sin verificación.", useCases: "Transmisiones en vivo, juegos en línea." },
  ],
  "INTERNET": [
    { src: "/ipv4.png", alt: "IPv4", definition: "IPv4 es una versión del Protocolo de Internet utilizado para identificar dispositivos en una red mediante una dirección IP.", reason: "Pertenece a la capa de internet porque gestiona el direccionamiento y enrutamiento de paquetes.", useCases: "Conexiones de red, enrutamiento de paquetes." },
    { src: "/ipv6.jpg", alt: "IPv6", definition: "IPv6 es una versión más reciente del Protocolo de Internet con un mayor espacio de direcciones.", reason: "Pertenece a la capa de internet porque gestiona el direccionamiento y enrutamiento de paquetes con un espacio de direcciones ampliado.", useCases: "Conexiones de red, enrutamiento de paquetes." },
    { src: "/bgp.png", alt: "BGP", definition: "BGP es un protocolo de enrutamiento utilizado para intercambiar información de enrutamiento entre sistemas autónomos en Internet.", reason: "Pertenece a la capa de internet porque gestiona el enrutamiento entre redes diferentes.", useCases: "Enrutamiento de Internet, gestión de redes." },
    { src: "/icmp.png", alt: "ICMP", definition: "ICMP es un protocolo utilizado para enviar mensajes de control y error en la red.", reason: "Pertenece a la capa de internet porque se utiliza para diagnosticar problemas de red.", useCases: "Ping, traceroute." },
  ],
  "ACCESO DE RED": [
    { src: "/ethernet.webp", alt: "Ethernet", definition: "Ethernet es una tecnología de red utilizada para la comunicación de datos en redes locales (LAN).", reason: "Pertenece a la capa de acceso de red porque define la forma en que los dispositivos en una red local se comunican.", useCases: "Redes locales, comunicación de datos." },
    { src: "/wifirouter.jpg", alt: "Wi-Fi", definition: "Wi-Fi es una tecnología de red inalámbrica que permite a los dispositivos comunicarse sin cables.", reason: "Pertenece a la capa de acceso de red porque define la comunicación inalámbrica en redes locales.", useCases: "Conexiones inalámbricas, redes domésticas." },
    { src: "/dsl.jpg", alt: "DSL", definition: "DSL es una tecnología que proporciona acceso a Internet mediante la transmisión de datos digitales a través de líneas telefónicas.", reason: "Pertenece a la capa de acceso de red porque define la forma en que los datos se transmiten a través de líneas telefónicas.", useCases: "Acceso a Internet, comunicaciones digitales." },
  ],
};


const EjemplosTCPIP = ({ layerTitle }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const imagenes = ejemplosPorCapaTCPIP[layerTitle] || [];

  const handleImageClick = (image) => {
    setSelectedImage(selectedImage === image ? null : image);
  };

  return (
    <div className="flex flex-wrap justify-center w-full h-full">
      {imagenes.map((image, index) => (
        <div
          key={index}
          className="p-2 w-full sm:w-1/2 lg:w-1/3 cursor-pointer relative flex flex-col items-center justify-center"
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
                <p className="mb-2">{image.reason}</p>
                <p className="mb-2">{image.useCases}</p>
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

export default EjemplosTCPIP;
import React from "react";

const layers = [
  {
    id: 5,
    title: "APLICACION",
    protocols: "DNS, FTP, POP3/IMAP, HTTP",
    bgColor: "bg-gradient-to-r from-purple-800 to-purple-500",
    textColor: "text-[#ba76f9]",
    imgSrc: "/aplicaciontcp.svg",
  },
  {
    id: 4,
    title: "TRANSPORTE",
    protocols: "TCP, UDP",
    bgColor: "bg-gradient-to-r from-yellow-600 to-yellow-400",
    textColor: "text-[#facc15]",
    imgSrc: "/transporttcp.svg",
  },
  {
    id: 3,
    title: "INTERNET",
    protocols: "IPv4, IPv6, BGP, ICMP",
    bgColor: "bg-gradient-to-r from-teal-700 to-teal-500",
    textColor: "text-[#14B7A6]",
    imgSrc: "/internettcp.svg",
  },
  {
    id: 2,
    title: "VINCULO DE DATOS",
    protocols: "ETHERNET, Wi-Fi",
    bgColor: "bg-gradient-to-r from-blue-600 to-blue-400",
    textColor: "text-[#60A5FA]",
    imgSrc: "/datalinktcp.svg",
  },
  {
    id: 1,
    title: "FISICA",
    protocols: "10 BASE T, 802.11",
    bgColor: "bg-gradient-to-r from-gray-600 to-gray-400",
    textColor: "text-[#9AA1AD]",
    imgSrc: "/physicaltcp.svg",
  },
];

const Modelotcpip = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full overflow-hidden">
      {layers.map((layer) => (
        <div
          key={layer.id}
          className={`w-full h-28 ${layer.bgColor} text-white flex items-center relative px-4 py-4 transition transform duration-300 hover:scale-105 hover:shadow-2xl`}
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
          <div className="absolute top-1/2 transform -translate-y-1/2 right-28 px-4">
            <img src={layer.imgSrc} alt={layer.title} className="w-16 h-16" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Modelotcpip;

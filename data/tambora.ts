export const WHATSAPP = "573222340850";

const CDN = "https://skema.co/wp-content/uploads/2026/04";

export const proyecto = {
  nombre: "Tamborá Apartamentos",
  tipo: "Apartamento VIS",
  ciudad: "Cali / Puerto Tejada",
  area: "45,56 m²",
  distribucion: "2 hab + espacio inteligente",
  banos: "1 baño",
  cocina: "Cocina abierta",
  precio: "$167.318.000",
  financiacion: "Cuota inicial 10% + subsidio",
  plazo: "28 meses",
  conjunto: "Conjunto cerrado · 600 unidades · 30 torres",
  aviso:
    "Los apartamentos se entregan en obra gris. Esta personalización es una visualización de referencia y no forma parte del acabado incluido. Precios sujetos a cambio.",
};

export type Opcion = {
  id: string;
  nombre: string;
  hex: string;
};

export type GrupoAcabado = {
  id: "pintura" | "piso" | "cocina";
  nombre: string;
  opciones: Opcion[];
};

export const acabados: GrupoAcabado[] = [
  {
    id: "pintura",
    nombre: "Pintura",
    opciones: [
      { id: "algodon", nombre: "Blanco algodón", hex: "#F4F1EA" },
      { id: "arena", nombre: "Arena", hex: "#C4A574" },
      { id: "salvia", nombre: "Verde salvia", hex: "#8FA38A" },
    ],
  },
  {
    id: "piso",
    nombre: "Piso",
    opciones: [
      { id: "porcelanato", nombre: "Porcelanato claro", hex: "#E7E2D8" },
      { id: "madera", nombre: "Madera", hex: "#A67C52" },
      { id: "cemento", nombre: "Cemento pulido", hex: "#B7B7B7" },
    ],
  },
  {
    id: "cocina",
    nombre: "Cocina",
    opciones: [
      { id: "blanco", nombre: "Blanco", hex: "#F7F7F5" },
      { id: "roble", nombre: "Roble", hex: "#C49A6C" },
      { id: "grafito", nombre: "Grafito", hex: "#3E4246" },
    ],
  },
];

export type Estilo = {
  id: string;
  nombre: string;
  uso: string;
};

export const estilos: Estilo[] = [
  { id: "primera", nombre: "Primera vivienda", uso: "Zona social" },
  { id: "familia", nombre: "Familia", uso: "Family room" },
  { id: "estudio", nombre: "Estudio / trabajo", uso: "Zona de trabajo" },
];

export type Espacio = {
  id: string;
  nombre: string;
  foto: string;
  propia: boolean;
};

const SALA = "/media/hero-4.jpg";

export const espacios: Espacio[] = [
  { id: "sala", nombre: "Sala comedor", foto: SALA, propia: true },
  { id: "cocina", nombre: "Cocina", foto: SALA, propia: false },
  { id: "habitacion", nombre: "Habitación", foto: SALA, propia: false },
  { id: "inteligente", nombre: "Espacio inteligente", foto: SALA, propia: false },
  { id: "bano", nombre: "Baño", foto: SALA, propia: false },
  { id: "ropas", nombre: "Zona de ropas", foto: SALA, propia: false },
];

export const planta = {
  src: `${CDN}/V-362-PLANTA_APTO-2-1024x818.png`,
  alt: "Planta del apartamento Tamborá",
};

export const portada = {
  foto: "/media/hero-4.jpg",
  logo: "/media/Logo-Tambora.png",
  marca: "/media/LOGO-SKEMA-WEB.png",
};

export type Foto = { src: string; alt: string };

const modelo = [4, 5, 14, 2, 16, 7, 12, 6, 11, 8, 22, 3, 15, 13];

export const recorrido: Foto[] = [
  { src: "/media/hero-4.jpg", alt: "Sala de Tamborá" },
  { src: "/media/V-362-APTO_4-1024x614.jpg", alt: "Apartamento modelo" },
  { src: `${CDN}/60216-rotated.jpg`, alt: "Vista del proyecto" },
  { src: `${CDN}/25036.jpg`, alt: "Vista del proyecto" },
  ...modelo.map((n, i) => ({
    src: `${CDN}/780x780_${n}.png.png`,
    alt: `Apartamento modelo ${i + 1}`,
  })),
];

export type Zona = {
  id: string;
  nombre: string;
  texto: string;
  icono: string;
  x: number;
  y: number;
};

const zonasBase: Omit<Zona, "x" | "y">[] = [
  {
    id: "piscina-adultos",
    nombre: "Piscina para adultos",
    texto: "Zona social del conjunto para residentes.",
    icono: `${CDN}/Piscina-para-adultos.png-copia.png`,
  },
  {
    id: "piscina-ninos",
    nombre: "Piscina para niños",
    texto: "Piscina infantil con juegos acuáticos.",
    icono: `${CDN}/Piscina-para-ninos-con-juegos-acuaticos.png-copia.png`,
  },
  {
    id: "bbq",
    nombre: "Zona BBQ",
    texto: "Espacio para reuniones al aire libre.",
    icono: `${CDN}/Zona-BBQ.png-copia.png`,
  },
  {
    id: "bombo",
    nombre: "Salón del Bombo",
    texto: "Salón social del conjunto.",
    icono: `${CDN}/Salon-del-bombo.png-copia.png`,
  },
  {
    id: "timbales",
    nombre: "Salón de los Timbales",
    texto: "Salón social del conjunto.",
    icono: `${CDN}/Salon-de-los-Timbales.png-copia.png`,
  },
  {
    id: "gimnasio",
    nombre: "Gimnasio TRX",
    texto: "Gimnasio para los residentes.",
    icono: `${CDN}/Gimnasio-TRX.png-copia.png`,
  },
  {
    id: "cancha",
    nombre: "Cancha recreativa múltiple",
    texto: "Cancha para actividades recreativas.",
    icono: `${CDN}/Cancha-recreativa-multiple-1.png-copia-1.png`,
  },
  {
    id: "senderos",
    nombre: "Senderos para trote",
    texto: "Recorridos peatonales dentro del conjunto.",
    icono: `${CDN}/Senderos-para-trote.png-copia.png`,
  },
  {
    id: "biosalud",
    nombre: "Zonas bio saludables",
    texto: "Espacios al aire libre para bienestar.",
    icono: `${CDN}/Zonas-bio-Saludables.png-copia.png`,
  },
  {
    id: "infantil",
    nombre: "Parque de juegos infantiles",
    texto: "Juegos para niños en el conjunto.",
    icono: `${CDN}/Parque-de-juegos-infantiles-1.png-copia-1.png`,
  },
  {
    id: "mesa",
    nombre: "Sala de juegos de mesa",
    texto: "Sala cubierta para juego y encuentro.",
    icono: `${CDN}/Sala-de-juegos-de-mesa.png-copia.png`,
  },
  {
    id: "mascotas",
    nombre: "Parque para mascotas",
    texto: "Zona destinada a las mascotas del conjunto.",
    icono: `${CDN}/Parque-para-mascotas.png-copia.png`,
  },
  {
    id: "porteria",
    nombre: "Portería vigilada",
    texto: "Acceso controlado del conjunto cerrado.",
    icono: `${CDN}/Porteria-vigilada.png-copia.png`,
  },
  {
    id: "parqueaderos",
    nombre: "Parqueaderos comunales",
    texto: "Parqueaderos comunales de vehículos y motos.",
    icono: `${CDN}/Parqueaderos-comunales.png-copia.png`,
  },
  {
    id: "basuras",
    nombre: "Zona de basuras",
    texto: "Punto de disposición de residuos.",
    icono: `${CDN}/Zona-de-basuras.png-copia.png`,
  },
  {
    id: "cerrado",
    nombre: "Conjunto cerrado",
    texto: "30 torres de 5 pisos, 4 apartamentos por piso.",
    icono: `${CDN}/Conjunto-Cerrado.png-copia.png`,
  },
];

export const zonas: Zona[] = zonasBase.map((zona, index) => {
  const col = index % 4;
  const row = Math.floor(index / 4);
  return { ...zona, x: 54 + col * 11, y: 18 + row * 18 };
});

export type Seleccion = {
  pintura: string;
  piso: string;
  cocina: string;
  estilo: string;
};

export const seleccionInicial: Seleccion = {
  pintura: "algodon",
  piso: "porcelanato",
  cocina: "blanco",
  estilo: "primera",
};

export function opcionDe(grupoId: GrupoAcabado["id"], opcionId: string) {
  const grupo = acabados.find((item) => item.id === grupoId);
  return grupo?.opciones.find((item) => item.id === opcionId) ?? grupo!.opciones[0];
}

export function estiloDe(id: string) {
  return estilos.find((item) => item.id === id) ?? estilos[0];
}

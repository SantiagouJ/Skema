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
  id: "pintura" | "piso";
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

export const fotosConjunto: Foto[] = [
  { src: "/media/hero-4.jpg", alt: "Tamborá Apartamentos" },
  { src: "/media/conjunto/piscina.jpg", alt: "Zona de piscina" },
  { src: "/media/conjunto/acceso.jpg", alt: "Llegada al conjunto" },
  { src: "/media/V-362-APTO_4-1024x614.jpg", alt: "Apartamento modelo" },
  ...[4, 5, 14, 2, 16, 7, 12, 6, 11, 8, 22, 3, 15, 13].map((n, i) => ({
    src: `/media/conjunto/foto-${n}.png`,
    alt: `Vista del conjunto ${i + 1}`,
  })),
];

const modelo = [4, 5, 14, 2, 16, 7, 12, 6, 11, 8, 22, 3, 15, 13];

export const galeriaApto: Foto[] = modelo.map((n, i) => ({
  src: `/media/apto/modelo-${n}.png`,
  alt: `Apartamento modelo ${i + 1}`,
}));

export const planosApto: Foto[] = [
  { src: "/media/apto/planta.png", alt: "Planta del apartamento Tamborá" },
  { src: "/media/apto/planta-conjunto.png", alt: "Planta del conjunto Tamborá" },
  { src: "/media/apto/distribucion.png", alt: "Distribución del apartamento Tamborá" },
];

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
    icono: "/media/zonas/piscina-adultos.png",
  },
  {
    id: "piscina-ninos",
    nombre: "Piscina para niños",
    texto: "Piscina infantil con juegos acuáticos.",
    icono: "/media/zonas/piscina-ninos.png",
  },
  {
    id: "bbq",
    nombre: "Zona BBQ",
    texto: "Espacio para reuniones al aire libre.",
    icono: "/media/zonas/bbq.png",
  },
  {
    id: "bombo",
    nombre: "Salón del Bombo",
    texto: "Salón social del conjunto.",
    icono: "/media/zonas/bombo.png",
  },
  {
    id: "timbales",
    nombre: "Salón de los Timbales",
    texto: "Salón social del conjunto.",
    icono: "/media/zonas/timbales.png",
  },
  {
    id: "gimnasio",
    nombre: "Gimnasio TRX",
    texto: "Gimnasio para los residentes.",
    icono: "/media/zonas/gimnasio.png",
  },
  {
    id: "cancha",
    nombre: "Cancha recreativa múltiple",
    texto: "Cancha para actividades recreativas.",
    icono: "/media/zonas/cancha.png",
  },
  {
    id: "senderos",
    nombre: "Senderos para trote",
    texto: "Recorridos peatonales dentro del conjunto.",
    icono: "/media/zonas/senderos.png",
  },
  {
    id: "biosalud",
    nombre: "Zonas bio saludables",
    texto: "Espacios al aire libre para bienestar.",
    icono: "/media/zonas/biosalud.png",
  },
  {
    id: "infantil",
    nombre: "Parque de juegos infantiles",
    texto: "Juegos para niños en el conjunto.",
    icono: "/media/zonas/infantil.png",
  },
  {
    id: "mesa",
    nombre: "Sala de juegos de mesa",
    texto: "Sala cubierta para juego y encuentro.",
    icono: "/media/zonas/mesa.png",
  },
  {
    id: "mascotas",
    nombre: "Parque para mascotas",
    texto: "Zona destinada a las mascotas del conjunto.",
    icono: "/media/zonas/mascotas.png",
  },
  {
    id: "porteria",
    nombre: "Portería vigilada",
    texto: "Acceso controlado del conjunto cerrado.",
    icono: "/media/zonas/porteria.png",
  },
  {
    id: "parqueaderos",
    nombre: "Parqueaderos comunales",
    texto: "Parqueaderos comunales de vehículos y motos.",
    icono: "/media/zonas/parqueaderos.png",
  },
  {
    id: "basuras",
    nombre: "Zona de basuras",
    texto: "Punto de disposición de residuos.",
    icono: "/media/zonas/basuras.png",
  },
  {
    id: "cerrado",
    nombre: "Conjunto cerrado",
    texto: "30 torres de 5 pisos, 4 apartamentos por piso.",
    icono: "/media/zonas/cerrado.png",
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
  estilo: string;
};

export const seleccionInicial: Seleccion = {
  pintura: "algodon",
  piso: "porcelanato",
  estilo: "primera",
};

export function opcionDe(grupoId: GrupoAcabado["id"], opcionId: string) {
  const grupo = acabados.find((item) => item.id === grupoId);
  return grupo?.opciones.find((item) => item.id === opcionId) ?? grupo!.opciones[0];
}

export function estiloDe(id: string) {
  return estilos.find((item) => item.id === id) ?? estilos[0];
}

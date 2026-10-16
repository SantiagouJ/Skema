export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const focus =
  "focus-visible:outline-[3px] focus-visible:outline-solid focus-visible:outline-nara focus-visible:outline-offset-2";

export const ui = {
  shell:
    "flex h-dvh flex-col overflow-hidden bg-white font-readex text-gris [&_button]:font-[inherit] [&_input]:font-[inherit] max-[900px]:h-auto max-[900px]:min-h-dvh max-[900px]:overflow-visible",
  topbar:
    "z-[2] flex min-h-[52px] shrink-0 items-center gap-4 border-b border-solid border-linea bg-white px-6 py-1.5 max-[900px]:flex-wrap max-[900px]:px-4 max-[900px]:py-3",
  marca: "flex min-w-0 items-center gap-3.5 text-inherit no-underline",
  marcaImg: "h-auto w-24",
  ciudad: "ml-auto text-[13px] font-semibold text-azul max-[900px]:hidden",
  portada: "relative min-h-0 flex-1 overflow-hidden bg-[#1c1c25]",
  portadaFoto: "absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[600ms] ease-[ease]",
  portadaFotoActiva: "opacity-100!",
  portadaVelo:
    "pointer-events-none absolute inset-0 z-[1] bg-[rgba(28,28,37,0.42)] [clip-path:polygon(0_0,100%_0,62%_100%,0_100%)]",
  portadaCuna:
    "pointer-events-none absolute right-0 bottom-0 z-[2] hidden h-[min(420px,42vw)] w-[min(420px,42vw)] bg-nara [clip-path:polygon(100%_0,18%_100%,100%_100%)] min-[1100px]:block",
  portadaCuerpo:
    "relative z-[3] flex h-full items-center gap-7 px-[8vw] py-12 max-[900px]:flex-col max-[900px]:items-start max-[900px]:justify-center max-[900px]:py-8 max-[900px]:pr-6 max-[900px]:pl-16",
  portadaLogo:
    "aspect-square h-[min(280px,34vw)] w-[min(280px,34vw)] rounded-2xl bg-white object-contain p-7 shadow-[0_12px_30px_rgba(0,0,0,0.2)] max-[900px]:h-[min(180px,52vw)] max-[900px]:w-[min(180px,52vw)] max-[900px]:p-4",
  portadaTexto: "max-w-[520px] text-white text-shadow-[0_4px_14px_rgba(0,0,0,0.35)]",
  portadaTitulo: "mx-0 mt-0 mb-2 text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.1] font-[650]",
  portadaLinea: "mx-0 mt-0 mb-2 text-[1.05rem]",
  portadaCiudad: "mx-0 mt-0 mb-[22px] text-[0.95rem]",
  portadaPuntos:
    "absolute top-1/2 left-[22px] z-[4] flex -translate-y-1/2 flex-col gap-2 rounded-full border border-solid border-white/25 bg-white/15 px-2.5 py-3.5 backdrop-blur-[5px]",
  portadaPunto: `h-2 w-2 cursor-pointer rounded-full border-0 bg-white p-0 opacity-70 ${focus}`,
  portadaPuntoActivo: "h-6! opacity-100!",
  boton: `inline-flex cursor-pointer items-center justify-center gap-2 rounded-[15px] border border-solid border-nara bg-nara px-[1.6rem] py-[0.85rem] text-base font-semibold text-white no-underline hover:bg-[#e2650d] hover:text-white ${focus}`,
  botonBloque: "w-full",
  apto: "grid min-h-0 flex-1 grid-cols-[minmax(300px,400px)_1fr] max-[900px]:flex max-[900px]:min-h-auto max-[900px]:flex-col",
  aside:
    "min-h-0 overflow-auto border-r border-solid border-linea bg-white p-0 max-[900px]:overflow-visible max-[900px]:border-t max-[900px]:border-r-0",
  fichaFoto: "block h-[168px] w-full object-cover",
  vistas: "grid grid-cols-4 gap-1 px-3 pt-2.5 pb-1",
  vista: `flex cursor-pointer flex-col items-center gap-1 rounded-xl border-0 bg-transparent px-1 pt-2 pb-[7px] text-[0.72rem] font-medium text-[#8a8f98] [&_svg]:h-[22px] [&_svg]:w-[22px] [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:[stroke-width:1.6] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round] ${focus}`,
  vistaActiva: "bg-[#fff1e8]! font-[650]! text-nara!",
  fichaCuerpo: "px-[18px] pt-2 pb-6",
  fichaTitulo: "mx-0 mt-2 mb-0 text-[1.35rem] leading-[1.15] font-[650] text-azul",
  fichaTipo: "mx-0 mt-1 mb-0 text-[0.92rem] text-[#6d727a]",
  seccionKicker: "mx-0 mt-4 mb-1.5 text-[0.68rem] font-bold tracking-[0.08em] text-[#9aa0a8] uppercase",
  texto: "mx-0 mt-3 mb-0 text-[0.88rem]",
  aviso: "mx-0 mt-0 mb-4 text-[0.78rem] leading-[1.45] text-[#5c5c5c]",
  specs: "mx-0 my-3.5 grid list-none grid-cols-2 gap-x-3 gap-y-2 p-0",
  specItem: "text-[0.88rem]",
  specLabel: "block text-[0.72rem] font-semibold text-azul uppercase",
  listaZonas: "mx-0 mt-2 mb-4 grid min-h-0 flex-1 list-none gap-1.5 overflow-auto p-0 max-[900px]:max-h-[220px]",
  zonaItem: "flex items-center gap-2.5 text-[0.92rem] font-medium text-[#4b5160]",
  iconoZona:
    "grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-solid border-[#ece7e2] bg-white text-[0.95rem] text-nara",
  panel: "mx-0 mt-4 mb-1.5",
  panelCabeza: "flex items-center justify-between gap-3",
  panelKicker: "m-0 text-[0.68rem] font-bold tracking-[0.08em] text-[#9aa0a8] uppercase",
  panelEtiqueta:
    "rounded-full border-[1.5px] border-solid border-nara px-2.5 py-[3px] text-[0.68rem] font-bold tracking-[0.04em] text-nara uppercase",
  panelTitulo: "mx-0 mt-2 mb-3 text-[1.15rem] font-[650] text-azul",
  grupos: "mb-3 flex flex-wrap gap-2",
  grupoChip: `inline-flex cursor-pointer items-center gap-2 rounded-full border-[1.5px] border-solid border-[#e4e4e4] bg-white py-[7px] pr-3.5 pl-2 text-[0.92rem] text-[#4b5160] ${focus}`,
  grupoChipActivo: "border-nara! font-semibold text-[#1f2430]!",
  radio: "h-4 w-4 rounded-full border-[1.5px] border-solid border-[#d0d0d0] bg-white",
  radioActivo: "border-[5px]! border-nara!",
  opciones: "flex flex-wrap gap-2",
  opcion: `inline-flex cursor-pointer items-center gap-2 rounded-full border-[1.5px] border-solid border-transparent bg-transparent py-1 pr-3 pl-1 text-[0.92rem] text-[#3a3f48] ${focus}`,
  opcionActiva: "border-nara! font-semibold",
  muestra: "h-7 w-7 shrink-0 rounded-full border border-solid border-black/8 shadow-[inset_0_0_0_2px_#fff]",
  visor: "relative flex min-h-0 min-w-0 flex-col bg-[#f4f4f4] max-[900px]:order-[-1] max-[900px]:h-[68vh] max-[900px]:min-h-[420px]",
  canvasHost: "relative min-h-0 flex-1 bg-[#f4f4f4] [&_canvas]:block [&_canvas]:h-full [&_canvas]:w-full",
  cargando: "pointer-events-none absolute inset-0 m-0 grid place-items-center font-[650] text-azul",
  medio: "relative min-h-0 flex-1 bg-[#111]",
  medioImg: "absolute inset-0 h-full w-full object-cover",
  medioPlano: "bg-[#f4f4f4]",
  medioPlanoImg: "object-contain!",
  videoMarco: "grid min-h-0 flex-1 place-items-center bg-[#111] px-6 pt-[72px] pb-6",
  video: "h-auto w-[min(960px,100%)] border-0 bg-black aspect-video",
  contador:
    "absolute top-4 left-4 z-[2] rounded-[15px] border border-solid border-linea bg-white px-3 py-2 text-[0.8rem] font-[650] text-azul max-[900px]:static max-[900px]:mx-3 max-[900px]:mt-2.5 max-[900px]:mb-0",
  recorridoNav: "pointer-events-none absolute inset-0 z-[2]",
  recorridoBoton: `pointer-events-auto absolute top-1/2 h-11 w-11 -translate-y-1/2 cursor-pointer rounded-full border border-solid border-linea bg-white text-[1.4rem] leading-none text-gris hover:border-nara hover:bg-nara hover:text-white ${focus}`,
  vrCaja: "absolute top-4 right-4 z-[3] flex flex-col items-end gap-2",
  vrBoton: `cursor-pointer rounded-full border-0 bg-nara px-4 py-2 text-[0.85rem] font-bold tracking-[0.04em] text-white ${focus}`,
  vrPanel:
    "flex w-[min(560px,calc(100vw-48px))] items-center gap-3.5 rounded-[18px] bg-white px-4 py-3.5 text-left text-azul shadow-[0_10px_28px_rgba(16,24,40,0.12)]",
  vrOjo:
    "grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-[#fff1e8] text-nara [&_svg]:h-[22px] [&_svg]:w-[22px] [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:[stroke-width:1.7]",
  vrTexto: "min-w-0 flex-1",
  vrTitulo: "block text-[0.95rem] leading-[1.25]",
  vrDescripcion: "mx-0 mt-0.5 mb-0 text-[0.78rem] leading-[1.35] text-[#667085]",
  vrVisita: `shrink-0 cursor-pointer border-y-0 border-r-0 border-l border-solid border-[#ececec] bg-transparent py-2 pr-3 pl-4 text-[0.95rem] font-bold whitespace-nowrap text-nara ${focus}`,
  vrCerrar: `shrink-0 cursor-pointer border-0 bg-transparent p-1 text-[1.4rem] leading-none text-[#98a2b3] ${focus}`,
  hojaFondo: "fixed inset-0 z-20 flex justify-end bg-[rgba(0,52,122,0.28)]",
  hoja: "flex h-full w-[min(420px,100%)] flex-col overflow-auto bg-white px-[22px] pt-5 pb-7 shadow-[-8px_0_24px_rgba(0,0,0,0.08)]",
  hojaCabeza: "flex items-start justify-between gap-3",
  hojaTitulo: "m-0 text-[1.35rem] leading-[1.2] font-bold text-azul",
  cerrar: `h-9 w-9 shrink-0 cursor-pointer rounded-[10px] border-0 bg-suave text-[1.2rem] leading-none text-gris ${focus}`,
  hojaIntro: "mx-0 mt-2 mb-[18px] text-[0.92rem] leading-[1.4] text-[#5c6570]",
  campo: "mb-3 flex flex-col gap-1.5 text-[0.8rem] font-semibold text-azul",
  campoInput: `rounded-[10px] border border-solid border-linea p-3 text-base text-gris ${focus}`,
  configuracion: "mx-0 mt-1 mb-3.5 list-disc rounded-xl border border-solid border-linea bg-suave py-3 pr-3.5 pl-7 text-[#3a4150]",
  configuracionItem: "my-1 text-[0.9rem] leading-[1.35]",
  error: "mx-0 mt-0 mb-3 text-[0.88rem] leading-[1.35] text-[#9a3412]",
  stage:
    "relative flex min-h-0 flex-1 items-center justify-center max-[900px]:flex-col [&_img]:h-full [&_img]:w-full [&_img]:object-cover max-[900px]:[&_img]:h-auto max-[900px]:[&_img]:min-h-0 max-[900px]:[&_img]:flex-1",
  stageContener: "[&_img]:bg-suave [&_img]:object-contain!",
  stageBar:
    "absolute right-4 bottom-4 left-4 flex flex-wrap items-center gap-x-4 gap-y-2.5 rounded-[10px] border border-solid border-linea bg-white px-3.5 py-3 max-[900px]:static max-[900px]:m-0 max-[900px]:rounded-none max-[900px]:border-x-0",
  paleta: "flex flex-wrap gap-2.5",
  paletaItem: "inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-azul",
  etiqueta: "m-0 text-[0.85rem] font-bold text-nara",
  nota: "m-0 flex-[1_1_180px] text-[0.75rem] text-[#5c5c5c]",
};

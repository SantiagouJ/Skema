export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const focus =
  "focus-visible:outline-[3px] focus-visible:outline-solid focus-visible:outline-nara focus-visible:outline-offset-2";

export const ui = {
  shell:
    "flex h-dvh flex-col overflow-hidden bg-white font-readex text-gris [&_button]:font-[inherit] [&_input]:font-[inherit] max-[900px]:h-auto max-[900px]:min-h-dvh max-[900px]:overflow-x-hidden max-[900px]:overflow-y-visible",
  topbar:
    "z-[2] flex min-h-[52px] shrink-0 items-center gap-4 border-b border-solid border-linea bg-white px-6 py-1.5 max-[900px]:flex-wrap max-[900px]:px-4 max-[900px]:py-3",
  marca: "flex min-w-0 items-center gap-3.5 text-inherit no-underline",
  marcaImg: "h-auto w-24",
  ciudad: "ml-auto text-[13px] font-semibold text-azul max-[900px]:hidden",
  portada:
    "relative min-h-0 flex-1 overflow-hidden bg-[#1c1c25] max-[900px]:h-dvh! max-[900px]:max-h-dvh! max-[900px]:min-h-0! max-[900px]:flex-none",
  portadaFoto: "absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-[600ms] ease-[ease]",
  portadaFotoActiva: "opacity-100!",
  portadaVelo:
    "pointer-events-none absolute inset-0 z-[1] bg-[rgba(28,28,37,0.42)] [clip-path:polygon(0_0,100%_0,62%_100%,0_100%)] max-[900px]:[clip-path:none] max-[900px]:bg-[linear-gradient(180deg,rgba(28,28,37,0.28)_0%,rgba(28,28,37,0.18)_34%,rgba(28,28,37,0.72)_100%)]",
  portadaCuna:
    "pointer-events-none absolute right-0 bottom-0 z-[2] hidden h-[min(420px,42vw)] w-[min(420px,42vw)] bg-nara [clip-path:polygon(100%_0,18%_100%,100%_100%)] min-[1100px]:block",
  portadaCuerpo:
    "relative z-[3] flex h-full items-center gap-7 px-[8vw] py-12 max-[900px]:box-border max-[900px]:h-dvh! max-[900px]:max-h-dvh! max-[900px]:min-h-0 max-[900px]:flex-col max-[900px]:items-start max-[900px]:justify-end max-[900px]:gap-3.5 max-[900px]:overflow-hidden max-[900px]:px-5 max-[900px]:pt-6 max-[900px]:pb-20",
  portadaLogo:
    "aspect-square h-[min(280px,34vw)] w-[min(280px,34vw)] rounded-2xl bg-white object-contain p-7 shadow-[0_12px_30px_rgba(0,0,0,0.2)] max-[900px]:h-[min(132px,38vw)] max-[900px]:w-[min(132px,38vw)] max-[900px]:rounded-xl max-[900px]:p-3.5",
  portadaTexto: "max-w-[520px] text-white text-shadow-[0_4px_14px_rgba(0,0,0,0.35)]",
  portadaTitulo:
    "mx-0 mt-0 mb-2 text-[clamp(1.8rem,3vw,2.8rem)] leading-[1.1] font-[650] max-[900px]:text-[clamp(1.55rem,6.4vw,2.05rem)]",
  portadaLinea: "mx-0 mt-0 mb-2 text-[1.05rem]",
  portadaCiudad: "mx-0 mt-0 mb-[22px] text-[0.95rem]",
  portadaPuntos:
    "absolute top-1/2 left-[22px] z-[4] flex -translate-y-1/2 flex-col gap-2 rounded-full border border-solid border-white/25 bg-white/15 px-2.5 py-3.5 backdrop-blur-[5px] max-[900px]:top-auto max-[900px]:bottom-5 max-[900px]:left-1/2 max-[900px]:w-fit max-[900px]:-translate-x-1/2 max-[900px]:translate-y-0 max-[900px]:flex-row max-[900px]:px-3.5 max-[900px]:py-2.5",
  portadaPunto: `h-2 w-2 cursor-pointer rounded-full border-0 bg-white p-0 opacity-70 ${focus}`,
  portadaPuntoActivo: "h-6! opacity-100! max-[900px]:h-2! max-[900px]:w-6!",
  boton: `inline-flex cursor-pointer items-center justify-center gap-2 rounded-[15px] border border-solid border-nara bg-nara px-[1.6rem] py-[0.85rem] text-base font-semibold text-white no-underline hover:bg-[#e2650d] hover:text-white ${focus}`,
  conjunto:
    "relative flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[#121418] [container-type:size] max-[900px]:h-dvh! max-[900px]:max-h-dvh! max-[900px]:min-h-0! max-[900px]:flex-none",
  conjuntoMarco: "relative h-[min(100cqh,calc(100cqw*571/1024))] w-[min(100cqw,calc(100cqh*1024/571))]",
  conjuntoFoto: "absolute inset-0 h-full w-full",
  conjuntoVolver: `absolute top-4 left-4 z-[3] cursor-pointer rounded-full border border-solid border-white/30 bg-black/35 px-4 py-2 text-[0.85rem] font-semibold text-white backdrop-blur-[6px] hover:bg-black/50 max-[900px]:top-3 max-[900px]:left-3 ${focus}`,
  conjuntoAviso:
    "pointer-events-none absolute top-4 left-1/2 z-[3] m-0 -translate-x-1/2 text-[0.95rem] font-semibold text-white text-shadow-[0_2px_10px_rgba(0,0,0,0.55)] max-[900px]:top-3 max-[900px]:max-w-[58vw] max-[900px]:text-center max-[900px]:text-[0.82rem]",
  punto:
    "absolute z-[2] grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center border-0 bg-transparent p-0",
  puntoActivo: `cursor-pointer ${focus}`,
  puntoOff: "cursor-not-allowed",
  puntoNucleo:
    "relative h-4 w-4 rounded-full border-2 border-solid border-white bg-[#8b919c] shadow-[0_2px_8px_rgba(0,0,0,0.45)]",
  puntoNucleoActivo: "h-4 w-4 bg-nara shadow-[0_0_0_6px_rgba(252,116,22,0.28)]",
  puntoPulso:
    "pointer-events-none absolute h-4 w-4 animate-ping rounded-full bg-nara motion-reduce:animate-none",
  puntoNombre:
    "pointer-events-none absolute bottom-[calc(100%+2px)] left-1/2 -translate-x-1/2 rounded-full bg-white px-2.5 py-1 text-[0.72rem] font-bold whitespace-nowrap text-azul shadow-[0_4px_14px_rgba(0,0,0,0.18)]",
  botonBloque: "w-full",
  apto: "grid min-h-0 flex-1 grid-cols-[minmax(300px,400px)_1fr] max-[900px]:flex max-[900px]:min-h-auto max-[900px]:flex-col",
  aside:
    "min-h-0 overflow-auto border-r border-solid border-linea bg-white p-0 max-[900px]:overflow-visible max-[900px]:border-t max-[900px]:border-r-0",
  fichaFoto: "block h-[168px] w-full object-cover max-[900px]:h-[108px]",
  pills: "mt-3 flex flex-wrap gap-2",
  pill: "rounded-full bg-[#f2f4f7] px-3 py-1.5 text-[0.8rem] font-medium text-[#4a5160]",
  entregaCaja: "mt-5 overflow-hidden rounded-[10px] bg-[#fff4ec]",
  entrega: `flex w-full cursor-pointer items-center justify-between gap-3 border-0 bg-transparent px-3.5 py-3 text-left ${focus}`,
  entregaTexto: "min-w-0",
  entregaTitulo: "block text-[0.98rem] font-semibold text-[#3a4150]",
  entregaHint: "mt-0.5 block text-[0.78rem] leading-snug font-normal text-[#8b919a]",
  entregaMas:
    "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-nara text-[1.25rem] leading-none font-medium text-white",
  entregaAviso: "mx-0 mt-0 mb-0 px-3.5 pb-3.5 text-[0.82rem] leading-[1.45] text-[#5c5c5c]",
  precioCaja: "mt-3 flex overflow-hidden rounded-[10px] bg-[#fff6f1]",
  precioAcento: "w-1 shrink-0 bg-nara",
  precioCuerpo: "px-4 py-3.5",
  precioLabel: "block text-[0.82rem] text-[#8b919a]",
  precioValor: "mt-0.5 block text-[1.65rem] leading-none font-bold tracking-[-0.02em] text-azul",
  compraGrid: "mt-2.5 grid grid-cols-2 gap-2.5",
  compraItem: "rounded-[10px] bg-[#f3f5f8] px-3.5 py-3",
  compraLabel: "block text-[0.82rem] text-[#8b919a]",
  compraValor: "mt-1 block text-[1.35rem] leading-none font-bold text-azul",
  datoValor: "mt-1 block text-[1.15rem] leading-tight font-bold break-words text-azul",
  financia: "mt-2.5 flex items-center gap-3 rounded-[10px] border border-solid border-[#eceff3] bg-white px-3.5 py-3",
  financiaIcono:
    "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#fff1e8] text-[0.95rem] font-bold text-nara",
  financiaTitulo: "block text-[0.95rem] font-bold text-azul",
  financiaDetalle: "m-0 text-[0.82rem] text-[#8b919a]",
  zonasCabeza: "mt-6 mb-1 flex items-baseline justify-between gap-3",
  zonasCuenta: "text-[0.78rem] text-[#a0a6ae]",
  listaZonasNueva: "m-0 list-none p-0",
  zonaFila:
    "flex items-center gap-3 border-x-0 border-t-0 border-b border-solid border-[#eceff3] py-2.5 text-[0.95rem] text-[#3a4150] last:border-b-0",
  planoItem: "border-x-0 border-t-0 border-b border-solid border-[#eceff3] last:border-b-0",
  planoBoton: `flex w-full cursor-pointer items-center gap-3 border-0 bg-transparent px-0 py-2.5 text-left text-[0.95rem] text-[#3a4150] ${focus}`,
  planoBotonActivo: "font-semibold text-azul",
  zonaIcono:
    "grid h-8 w-8 shrink-0 place-items-center text-nara [&_svg]:h-[18px] [&_svg]:w-[18px] [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:[stroke-width:1.7] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round]",
  zonasMas: `mt-3 flex w-full cursor-pointer items-center justify-center gap-2 rounded-[14px] border border-solid border-[#f6d0b0] bg-[#fff8f3] px-4 py-3 text-[0.95rem] font-semibold text-nara ${focus}`,
  vistas:
    "grid grid-cols-4 gap-1 px-3 pt-2.5 pb-1 max-[900px]:sticky max-[900px]:top-0 max-[900px]:z-[3] max-[900px]:bg-white max-[900px]:px-2 max-[900px]:shadow-[0_1px_0_#ececec]",
  vista: `flex cursor-pointer flex-col items-center gap-1 rounded-xl border-0 bg-transparent px-1 pt-2 pb-[7px] text-[0.72rem] font-medium text-[#8a8f98] max-[380px]:text-[0.64rem] [&_svg]:h-[22px] [&_svg]:w-[22px] [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:[stroke-width:1.6] [&_svg]:[stroke-linecap:round] [&_svg]:[stroke-linejoin:round] ${focus}`,
  vistaActiva: "bg-[#fff1e8]! font-[650]! text-nara!",
  fichaCuerpo: "px-5 pt-4 pb-6",
  fichaTitulo: "mx-0 mt-1 mb-0 text-[1.55rem] leading-[1.15] font-bold text-azul",
  fichaTipo: "mx-0 mt-1 mb-0 text-[0.95rem] text-[#8b919a]",
  seccionKicker: "mx-0 mt-[22px] mb-0 text-[0.68rem] font-semibold tracking-[0.12em] text-[#a0a6ae] uppercase",
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
  visor:
    "relative flex min-h-0 min-w-0 flex-col bg-[#f4f4f4] max-[900px]:box-border max-[900px]:order-[-1] max-[900px]:h-[min(46dvh,420px)] max-[900px]:min-h-[220px] max-[900px]:shrink-0",
  canvasHost: "relative min-h-0 flex-1 bg-[#f4f4f4] [&_canvas]:block [&_canvas]:h-full [&_canvas]:w-full",
  cargando: "pointer-events-none absolute inset-0 m-0 grid place-items-center font-[650] text-azul",
  medio: "relative min-h-0 flex-1 bg-[#111]",
  medioImg: "absolute inset-0 h-full w-full object-cover",
  medioPlano: "bg-[#f4f4f4]",
  medioPlanoImg: "object-contain!",
  videoMarco:
    "grid min-h-0 flex-1 place-items-center bg-[#111] px-6 pt-[72px] pb-6 max-[900px]:box-border max-[900px]:px-3 max-[900px]:py-3",
  video: "h-auto w-[min(960px,100%)] border-0 bg-black aspect-video",
  contador:
    "absolute top-4 left-4 z-[2] rounded-[15px] border border-solid border-linea bg-white px-3 py-2 text-[0.8rem] font-[650] text-azul max-[900px]:top-3 max-[900px]:left-3",
  recorridoNav: "pointer-events-none absolute inset-0 z-[2]",
  recorridoBoton: `pointer-events-auto absolute top-1/2 h-11 w-11 -translate-y-1/2 cursor-pointer rounded-full border border-solid border-linea bg-white text-[1.4rem] leading-none text-gris hover:border-nara hover:bg-nara hover:text-white max-[900px]:h-10 max-[900px]:w-10 ${focus}`,
  vrCaja: "absolute top-4 right-4 z-[3] flex flex-col items-end gap-2 max-[900px]:top-3 max-[900px]:right-3 max-[900px]:left-3",
  vrBoton: `cursor-pointer rounded-full border-0 bg-nara px-4 py-2 text-[0.85rem] font-bold tracking-[0.04em] text-white ${focus}`,
  vrPanel:
    "flex w-[min(560px,calc(100vw-48px))] items-center gap-3.5 rounded-[18px] bg-white px-4 py-3.5 text-left text-azul shadow-[0_10px_28px_rgba(16,24,40,0.12)] max-[900px]:box-border max-[900px]:w-full max-[900px]:flex-col max-[900px]:items-stretch max-[900px]:gap-2.5 max-[900px]:p-3.5",
  vrOjo:
    "grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-[#fff1e8] text-nara [&_svg]:h-[22px] [&_svg]:w-[22px] [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:[stroke-width:1.7]",
  vrTexto: "min-w-0 flex-1",
  vrTitulo: "block text-[0.95rem] leading-[1.25]",
  vrDescripcion: "mx-0 mt-0.5 mb-0 text-[0.78rem] leading-[1.35] text-[#667085]",
  vrVisita: `shrink-0 cursor-pointer border-y-0 border-r-0 border-l border-solid border-[#ececec] bg-transparent py-2 pr-3 pl-4 text-[0.95rem] font-bold whitespace-nowrap text-nara max-[900px]:border-t max-[900px]:border-l-0 max-[900px]:px-0 max-[900px]:pt-2.5 max-[900px]:pb-1 max-[900px]:text-left ${focus}`,
  vrCerrar: `shrink-0 cursor-pointer border-0 bg-transparent p-1 text-[1.4rem] leading-none text-[#98a2b3] ${focus}`,
  hojaFondo: "fixed inset-0 z-20 flex justify-end bg-[rgba(0,52,122,0.28)] max-[900px]:items-end",
  hoja: "flex h-full w-[min(420px,100%)] flex-col overflow-auto bg-white px-[22px] pt-5 pb-7 shadow-[-8px_0_24px_rgba(0,0,0,0.08)] max-[900px]:h-auto max-[900px]:max-h-[92dvh] max-[900px]:w-full max-[900px]:rounded-t-[22px] max-[900px]:pb-[max(1.75rem,env(safe-area-inset-bottom))]",
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

import { type ReactNode } from "react";
import { planosApto, proyecto, zonas } from "@/data/tambora";
import styles from "./experiencia.module.css";

export type VistaApto = "galeria" | "planta" | "planos" | "video";

type FichaProps = {
  vista: VistaApto;
  onVista: (vista: VistaApto) => void;
  onSolicitar: () => void;
  children?: ReactNode;
};

const vistas: { id: VistaApto; label: string }[] = [
  { id: "galeria", label: "Galería" },
  { id: "planta", label: "Planta 3D" },
  { id: "planos", label: "Planos" },
  { id: "video", label: "Video" },
];

function IconoVista({ id }: { id: VistaApto }) {
  if (id === "galeria") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="10" r="1.6" />
        <path d="M3 16l5-4 4 3 3-2 6 5" />
      </svg>
    );
  }
  if (id === "planta") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
      </svg>
    );
  }
  if (id === "planos") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="1.5" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M10 9.5v5l5-2.5-5-2.5z" />
    </svg>
  );
}

const renderSala = "/media/V-362-APTO_4-1024x614.jpg";

const fotosFicha: Record<VistaApto, { src: string; alt: string }> = {
  galeria: { src: renderSala, alt: "Render de la sala de Tamborá" },
  planta: { src: renderSala, alt: "Render de la sala de Tamborá" },
  planos: planosApto[0],
  video: { src: "/media/portada/inversion.jpg", alt: "Video de Tamborá" },
};

const iconosZona: Record<string, string> = {
  "piscina-adultos": "fa-water-ladder",
  "piscina-ninos": "fa-water",
  bbq: "fa-fire",
  bombo: "fa-glass-cheers",
  timbales: "fa-music",
  gimnasio: "fa-dumbbell",
  cancha: "fa-basketball-ball",
  senderos: "fa-running",
  biosalud: "fa-leaf",
  infantil: "fa-shapes",
  mesa: "fa-chess",
  mascotas: "fa-paw",
  porteria: "fa-shield-alt",
  parqueaderos: "fa-parking",
  basuras: "fa-trash",
  cerrado: "fa-lock",
};

export function FichaProyecto({ vista, onVista, onSolicitar, children }: FichaProps) {
  const foto = fotosFicha[vista];

  return (
    <section className={styles.ficha}>
      <img className={styles.fichaFoto} src={foto.src} alt={foto.alt} />
      <div className={styles.vistas} role="tablist" aria-label="Vistas del apartamento">
        {vistas.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={vista === item.id}
            className={`${styles.vista} ${vista === item.id ? styles.vistaActiva : ""}`}
            onClick={() => onVista(item.id)}
          >
            <IconoVista id={item.id} />
            {item.label}
          </button>
        ))}
      </div>

      <div className={styles.fichaCuerpo}>
        <h2>{proyecto.nombre}</h2>
        <p className={styles.fichaTipo}>
          {proyecto.tipo} · {proyecto.ciudad}
        </p>

        {vista === "galeria" ? (
          <>
            <p className={styles.seccionKicker}>Información general</p>
            <p className={styles.acordeonTexto}>{proyecto.conjunto}</p>
            <p className={styles.aviso}>{proyecto.aviso}</p>
            <p className={styles.seccionKicker}>Opciones de compra</p>
            <ul className={styles.specs}>
              <li>
                <span>Precio fijo</span>
                {proyecto.precio}
              </li>
              <li>
                <span>Financiación</span>
                {proyecto.financiacion}
              </li>
              <li>
                <span>Cuota inicial</span>
                {proyecto.plazo}
              </li>
            </ul>
            <p className={styles.seccionKicker}>Zonas sociales</p>
            <ul className={styles.listaZonas}>
              {zonas.map((zona) => (
                <li key={zona.id}>
                  <span className={styles.iconoZona} aria-hidden="true">
                    <i className={`fa-solid ${iconosZona[zona.id] ?? "fa-circle"}`} />
                  </span>
                  {zona.nombre}
                </li>
              ))}
            </ul>
            <button type="button" className={`${styles.boton} ${styles.botonBloque}`} onClick={onSolicitar}>
              Solicitar información
            </button>
          </>
        ) : null}

        {vista === "planta" ? children : null}

        {vista === "planos" ? (
          <>
            <p className={styles.seccionKicker}>Distribución</p>
            <p className={styles.acordeonTexto}>
              Tres planos del proyecto: el apartamento, el conjunto y la distribución interior de 2 habitaciones más el
              espacio inteligente.
            </p>
            <ul className={styles.specs}>
              <li>
                <span>Área construida</span>
                {proyecto.area}
              </li>
              <li>
                <span>Distribución</span>
                {proyecto.distribucion}
              </li>
              <li>
                <span>Cocina</span>
                {proyecto.cocina}
              </li>
              <li>
                <span>Zona de ropas</span>
                Independiente
              </li>
            </ul>
          </>
        ) : null}

        {vista === "video" ? (
          <>
            <p className={styles.seccionKicker}>Recorrido</p>
            <p className={styles.acordeonTexto}>
              Video de presentación de Tamborá Apartamentos, grabado para la sala de ventas.
            </p>
          </>
        ) : null}
      </div>
    </section>
  );
}

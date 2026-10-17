"use client";

import { useState, type ReactNode } from "react";
import { planosApto, proyecto, zonas } from "@/data/tambora";
import { cx, ui } from "./ui";

export type VistaApto = "galeria" | "planta" | "planos" | "video";

type FichaProps = {
  vista: VistaApto;
  onVista: (vista: VistaApto) => void;
  onSolicitar: () => void;
  indicePlano: number;
  onPlano: (indice: number) => void;
  children?: ReactNode;
};

const nombresPlano = ["Apartamento amoblado", "Planta arquitectónica", "Plano del conjunto"];

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

const fotoFija = {
  src: "/media/V-362-APTO_4-1024x614.jpg",
  alt: "Render de la sala de Tamborá",
};

const zonasDestacadas = ["piscina-adultos", "piscina-ninos", "gimnasio", "cancha", "senderos"];

function IconoZona({ id }: { id: string }) {
  if (id === "piscina-adultos" || id === "piscina-ninos") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 16c1.4 1.1 2.4 1.1 3.6 0s2.2-1.1 3.6 0 2.4 1.1 3.6 0 2.2-1.1 3.6 0" />
        <path d="M8 16V9.5M8 9.5h4" />
        <circle cx="8" cy="7.2" r="1.3" />
        {id === "piscina-ninos" ? <path d="M15 13.5v2.5M13.8 14.6h2.4" /> : null}
      </svg>
    );
  }
  if (id === "bbq") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 14h10M8 14c0 3 1.6 5 4 5s4-2 4-5" />
        <path d="M9 8c.4 1.2 1.2 1.2 1.6 0M13.4 8c.4 1.2 1.2 1.2 1.6 0" />
      </svg>
    );
  }
  if (id === "gimnasio" || id === "cancha" || id === "senderos" || id === "biosalud") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="13" cy="5.2" r="1.5" />
        <path d="M8 11.5l3.2-2.2 2.2 2.2 3.2-1.2" />
        <path d="M11.2 11.5l-2.4 7M13.4 11.5l3.2 6.2" />
      </svg>
    );
  }
  if (id === "porteria" || id === "cerrado") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 11V8.5a5 5 0 0 1 10 0V11" />
        <rect x="6" y="11" width="12" height="8" rx="1.5" />
      </svg>
    );
  }
  if (id === "parqueaderos") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M9 16V8h3.2a2.4 2.4 0 0 1 0 4.8H9" />
      </svg>
    );
  }
  if (id === "mascotas") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="7.5" cy="9" r="1.5" />
        <circle cx="12" cy="7.2" r="1.5" />
        <circle cx="16.5" cy="9" r="1.5" />
        <path d="M8 14.5c.8 2.4 2.2 3.5 4 3.5s3.2-1.1 4-3.5c-1.2-.6-2.5-.9-4-.9s-2.8.3-4 .9z" />
      </svg>
    );
  }
  if (id === "infantil" || id === "mesa") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="6" r="1.6" />
        <path d="M12 8.2v5M9 11h6M10 18.5l2-5.3 2 5.3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20s-6-4.2-6-9a6 6 0 0 1 12 0c0 4.8-6 9-6 9z" />
      <circle cx="12" cy="11" r="1.6" />
    </svg>
  );
}

export function FichaProyecto({ vista, onVista, onSolicitar, indicePlano, onPlano, children }: FichaProps) {
  const [entregaAbierta, setEntregaAbierta] = useState(false);
  const [zonasAbiertas, setZonasAbiertas] = useState(false);
  const pills = proyecto.conjunto.split(" · ");
  const destacadas = zonasDestacadas
    .map((id) => zonas.find((zona) => zona.id === id))
    .filter((zona) => zona !== undefined);
  const resto = zonas.filter((zona) => !zonasDestacadas.includes(zona.id));
  const visibles = zonasAbiertas ? [...destacadas, ...resto] : destacadas;

  return (
    <section>
      <img className={ui.fichaFoto} src={fotoFija.src} alt={fotoFija.alt} />
      <div className={ui.vistas} role="tablist" aria-label="Vistas del apartamento">
        {vistas.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={vista === item.id}
            className={`${ui.vista} ${vista === item.id ? ui.vistaActiva : ""}`}
            onClick={() => onVista(item.id)}
          >
            <IconoVista id={item.id} />
            {item.label}
          </button>
        ))}
      </div>

      <div className={ui.fichaCuerpo}>
        <h2 className={ui.fichaTitulo}>{proyecto.nombre}</h2>
        <p className={ui.fichaTipo}>
          {proyecto.tipo} · {proyecto.ciudad}
        </p>

        {vista === "galeria" ? (
          <>
            <p className={ui.seccionKicker}>Información del proyecto</p>
            <div className={ui.pills}>
              {pills.map((item) => (
                <span key={item} className={ui.pill}>
                  {item}
                </span>
              ))}
            </div>

            <div className={ui.entregaCaja}>
              <button
                type="button"
                className={ui.entrega}
                aria-expanded={entregaAbierta}
                onClick={() => setEntregaAbierta((abierta) => !abierta)}
              >
                <span className={ui.entregaTexto}>
                  <span className={ui.entregaTitulo}>Entrega y condiciones</span>
                  {entregaAbierta ? null : (
                    <span className={ui.entregaHint}>Se entrega en obra gris</span>
                  )}
                </span>
                <span className={ui.entregaMas} aria-hidden="true">
                  {entregaAbierta ? "–" : "+"}
                </span>
              </button>
              {entregaAbierta ? <p className={ui.entregaAviso}>{proyecto.aviso}</p> : null}
            </div>

            <p className={ui.seccionKicker}>Opciones de compra</p>
            <div className={ui.precioCaja}>
              <span className={ui.precioAcento} aria-hidden="true" />
              <div className={ui.precioCuerpo}>
                <span className={ui.precioLabel}>Precio fijo</span>
                <strong className={ui.precioValor}>{proyecto.precio}</strong>
              </div>
            </div>
            <div className={ui.compraGrid}>
              <div className={ui.compraItem}>
                <span className={ui.compraLabel}>Cuota inicial</span>
                <strong className={ui.compraValor}>{proyecto.cuota}</strong>
              </div>
              <div className={ui.compraItem}>
                <span className={ui.compraLabel}>Plazo</span>
                <strong className={ui.compraValor}>{proyecto.plazo}</strong>
              </div>
            </div>
            <div className={ui.financia}>
              <span className={ui.financiaIcono} aria-hidden="true">
                i
              </span>
              <div>
                <strong className={ui.financiaTitulo}>Financiación disponible</strong>
                <p className={ui.financiaDetalle}>{proyecto.financiacion}</p>
              </div>
            </div>

            <div className={ui.zonasCabeza}>
              <p className={`${ui.seccionKicker} mt-0!`}>Zonas sociales</p>
              <span className={ui.zonasCuenta}>{zonas.length} espacios</span>
            </div>
            <ul className={ui.listaZonasNueva}>
              {visibles.map((zona) => (
                <li key={zona.id} className={ui.zonaFila}>
                  <span className={ui.zonaIcono} aria-hidden="true">
                    <IconoZona id={zona.id} />
                  </span>
                  {zona.nombre}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className={ui.zonasMas}
              aria-expanded={zonasAbiertas}
              onClick={() => setZonasAbiertas((abiertas) => !abiertas)}
            >
              {zonasAbiertas ? "Ver menos" : `Ver ${resto.length} zonas más`}
            </button>
            <button type="button" className={`${ui.boton} ${ui.botonBloque} mt-3`} onClick={onSolicitar}>
              Solicitar información
            </button>
          </>
        ) : null}

        {vista === "planta" ? children : null}

        {vista === "planos" ? (
          <>
            <p className={ui.seccionKicker}>Distribución</p>
            <div className={ui.pills}>
              <span className={ui.pill}>2 habitaciones</span>
              <span className={ui.pill}>{proyecto.banos}</span>
              <span className={ui.pill}>Cocina abierta</span>
            </div>
            <div className={ui.precioCaja}>
              <span className={ui.precioAcento} aria-hidden="true" />
              <div className={ui.precioCuerpo}>
                <span className={ui.precioLabel}>Área construida</span>
                <strong className={ui.precioValor}>{proyecto.area}</strong>
              </div>
            </div>
            <div className="mt-2.5 grid gap-2.5">
              <div className={ui.compraItem}>
                <span className={ui.compraLabel}>Espacio inteligente</span>
                <strong className={ui.datoValor}>Incluido</strong>
              </div>
              <div className={ui.compraItem}>
                <span className={ui.compraLabel}>Zona de ropas</span>
                <strong className={ui.datoValor}>Independiente</strong>
              </div>
            </div>
            <div className={ui.financia}>
              <span className={ui.financiaIcono} aria-hidden="true">
                i
              </span>
              <div>
                <strong className={ui.financiaTitulo}>Distribución</strong>
                <p className={ui.financiaDetalle}>{proyecto.distribucion}</p>
              </div>
            </div>

            <div className={ui.zonasCabeza}>
              <p className={`${ui.seccionKicker} mt-0!`}>Planos</p>
              <span className={ui.zonasCuenta}>{planosApto.length} planos</span>
            </div>
            <ul className={ui.listaZonasNueva}>
              {planosApto.map((plano, indice) => {
                const activo = indice === indicePlano;
                return (
                  <li key={plano.src} className={ui.planoItem}>
                    <button
                      type="button"
                      className={cx(ui.planoBoton, activo && ui.planoBotonActivo)}
                      aria-current={activo ? "true" : undefined}
                      onClick={() => onPlano(indice)}
                    >
                      <span className={ui.zonaIcono} aria-hidden="true">
                        <svg viewBox="0 0 24 24">
                          <rect x="4" y="4" width="16" height="16" rx="1.5" />
                          <path d="M4 10h16M10 10v10" />
                        </svg>
                      </span>
                      {nombresPlano[indice] ?? plano.alt}
                    </button>
                  </li>
                );
              })}
            </ul>
            <button type="button" className={`${ui.boton} ${ui.botonBloque} mt-3`} onClick={onSolicitar}>
              Solicitar información
            </button>
          </>
        ) : null}

        {vista === "video" ? (
          <>
            <p className={ui.seccionKicker}>Recorrido</p>
            <p className={ui.texto}>
              Video de presentación de Tamborá Apartamentos, grabado para la sala de ventas.
            </p>
          </>
        ) : null}
      </div>
    </section>
  );
}

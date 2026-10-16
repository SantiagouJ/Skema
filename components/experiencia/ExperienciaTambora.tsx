"use client";

import { useEffect, useState } from "react";
import {
  galeriaApto,
  planosApto,
  portada,
  proyecto,
  seleccionInicial,
  type Seleccion,
} from "@/data/tambora";
import { ApartmentViewer } from "./ApartmentViewer";
import { FichaProyecto, type VistaApto } from "./FichaProyecto";
import { LeadSheet } from "./LeadSheet";
import { PanelAcabados } from "./PanelAcabados";
import styles from "./experiencia.module.css";

type Pantalla = "portada" | "apartamento";

const videoTambora = "https://www.youtube-nocookie.com/embed/cGK6sYd5nSA?rel=0&modestbranding=1";

const diapositivas = [
  {
    src: "/media/V-362-APTO_4-1024x614.jpg",
    titulo: "Tamborá Apartamentos",
    linea: "Apartamento VIS en conjunto cerrado",
  },
  {
    src: "/media/portada/inversion.jpg",
    titulo: "¡La inversión inteligente de tu vida!",
    linea: "16 zonas sociales",
  },
  {
    src: "/media/portada/parqueaderos.jpg",
    titulo: "Parqueaderos comunales de vehículos y motos",
    linea: "Privado y seguro",
  },
];

export function ExperienciaTambora() {
  const [pantalla, setPantalla] = useState<Pantalla>("portada");
  const [vista, setVista] = useState<VistaApto>("planta");
  const [indice, setIndice] = useState(0);
  const [indicePlano, setIndicePlano] = useState(0);
  const [seleccion, setSeleccion] = useState<Seleccion>(seleccionInicial);
  const [leadAbierta, setLeadAbierta] = useState(false);
  const [vrAbierta, setVrAbierta] = useState(false);
  const [diapositiva, setDiapositiva] = useState(0);

  useEffect(() => {
    if (pantalla !== "portada") return;
    const timer = window.setInterval(() => {
      setDiapositiva((actual) => (actual + 1) % diapositivas.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [pantalla]);

  const slide = diapositivas[diapositiva] ?? diapositivas[0];

  const foto = galeriaApto[indice] ?? galeriaApto[0];
  const plano = planosApto[indicePlano] ?? planosApto[0];

  return (
    <div className={styles.shell}>
      {pantalla !== "portada" ? (
        <header className={styles.topbar}>
          <a className={styles.marca} href="/">
            <img src={portada.marca} alt="Skema" />
          </a>
          <span className={styles.ciudad}>{proyecto.ciudad}</span>
        </header>
      ) : null}

      {pantalla === "portada" ? (
        <section className={styles.portada} aria-label="Tamborá Apartamentos">
          {diapositivas.map((item, indiceSlide) => (
            <img
              key={item.src}
              className={`${styles.portadaFoto} ${indiceSlide === diapositiva ? styles.portadaFotoActiva : ""}`}
              src={item.src}
              alt=""
            />
          ))}
          <div className={styles.portadaVelo} aria-hidden="true" />
          <div className={styles.portadaCuna} aria-hidden="true" />
          <div className={styles.portadaCuerpo}>
            <img className={styles.portadaLogo} src={portada.logo} alt="Tamborá Apartamentos" />
            <div className={styles.portadaTexto}>
              <h1>{slide.titulo}</h1>
              <p>{slide.linea}</p>
              <p className={styles.portadaCiudad}>{proyecto.ciudad}</p>
              <button type="button" className={styles.boton} onClick={() => setPantalla("apartamento")}>
                Entrar
              </button>
            </div>
          </div>
          <div className={styles.portadaPuntos} role="tablist" aria-label="Diapositivas">
            {diapositivas.map((item, indiceSlide) => (
              <button
                key={item.src}
                type="button"
                role="tab"
                aria-label={item.titulo}
                aria-selected={indiceSlide === diapositiva}
                className={indiceSlide === diapositiva ? styles.portadaPuntoActivo : ""}
                onClick={() => setDiapositiva(indiceSlide)}
              />
            ))}
          </div>
        </section>
      ) : null}

      {pantalla === "apartamento" ? (
        <section className={styles.apto}>
          <aside className={styles.aside}>
            <FichaProyecto
              vista={vista}
              onVista={setVista}
              onSolicitar={() => setLeadAbierta(true)}
            >
              <PanelAcabados seleccion={seleccion} onCambio={setSeleccion} />
            </FichaProyecto>
          </aside>
          <div className={styles.visor}>
            {vista === "planta" ? (
              <div className={styles.vrCaja}>
                <button
                  type="button"
                  className={styles.vrBoton}
                  aria-expanded={vrAbierta}
                  onClick={() => setVrAbierta((abierta) => !abierta)}
                >
                  VR
                </button>
                {vrAbierta ? (
                  <div className={styles.vrPanel}>
                    <span className={styles.vrOjo} aria-hidden="true">
                      <svg viewBox="0 0 24 24">
                        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" />
                        <circle cx="12" cy="12" r="2.5" />
                      </svg>
                    </span>
                    <div className={styles.vrTexto}>
                      <strong>Vive la experiencia con gafas VR</strong>
                      <p>
                        Si tienes gafas en casa, puedes usarlas aquí.
                        <br />
                        Si no, visítanos en nuestra sala de ventas.
                      </p>
                    </div>
                    <button
                      type="button"
                      className={styles.vrVisita}
                      onClick={() => setLeadAbierta(true)}
                    >
                      Agendar visita
                    </button>
                    <button
                      type="button"
                      className={styles.vrCerrar}
                      aria-label="Cerrar aviso de VR"
                      onClick={() => setVrAbierta(false)}
                    >
                      ›
                    </button>
                  </div>
                ) : null}
              </div>
            ) : null}
            {vista === "planta" ? (
              <ApartmentViewer seleccion={seleccion} modo="espacios" espacioId="sala" recorridoIndex={0} />
            ) : null}
            {vista === "galeria" ? (
              <div className={styles.medio}>
                <img src={foto.src} alt={foto.alt} />
                <p className={styles.contador}>
                  {indice + 1} / {galeriaApto.length}
                </p>
                <div className={styles.recorridoNav}>
                  <button
                    type="button"
                    aria-label="Foto anterior"
                    onClick={() => setIndice((actual) => (actual === 0 ? galeriaApto.length - 1 : actual - 1))}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Foto siguiente"
                    onClick={() => setIndice((actual) => (actual + 1) % galeriaApto.length)}
                  >
                    ›
                  </button>
                </div>
              </div>
            ) : null}
            {vista === "planos" ? (
              <div className={`${styles.medio} ${styles.medioPlano}`}>
                <img src={plano.src} alt={plano.alt} />
                <p className={styles.contador}>
                  {indicePlano + 1} / {planosApto.length}
                </p>
                <div className={styles.recorridoNav}>
                  <button
                    type="button"
                    aria-label="Plano anterior"
                    onClick={() => setIndicePlano((actual) => (actual === 0 ? planosApto.length - 1 : actual - 1))}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Plano siguiente"
                    onClick={() => setIndicePlano((actual) => (actual + 1) % planosApto.length)}
                  >
                    ›
                  </button>
                </div>
              </div>
            ) : null}
            {vista === "video" ? (
              <div className={styles.videoMarco}>
                <iframe
                  src={videoTambora}
                  title="Video de Tamborá Apartamentos"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <LeadSheet abierta={leadAbierta} seleccion={seleccion} onCerrar={() => setLeadAbierta(false)} />
    </div>
  );
}

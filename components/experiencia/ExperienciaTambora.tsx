"use client";

import { useMemo, useState } from "react";
import {
  espacios,
  opcionDe,
  portada,
  proyecto,
  recorrido,
  seleccionInicial,
  zonas,
  type Seleccion,
} from "@/data/tambora";
import { ApartmentViewer } from "./ApartmentViewer";
import { FichaProyecto } from "./FichaProyecto";
import { CarruselConjunto, ListaConjunto } from "./HotspotsConjunto";
import { LeadSheet } from "./LeadSheet";
import { PanelAcabados } from "./PanelAcabados";
import styles from "./experiencia.module.css";

type Pantalla = "portada" | "conjunto" | "apartamento";
type Modo = "planta" | "espacios" | "recorrido";

export function ExperienciaTambora() {
  const [pantalla, setPantalla] = useState<Pantalla>("portada");
  const [modo, setModo] = useState<Modo>("espacios");
  const [espacioId, setEspacioId] = useState(espacios[0].id);
  const [indice, setIndice] = useState(0);
  const [zonaId, setZonaId] = useState(zonas[0].id);
  const [seleccion, setSeleccion] = useState<Seleccion>(seleccionInicial);
  const [leadAbierta, setLeadAbierta] = useState(false);

  const espacio = espacios.find((item) => item.id === espacioId) ?? espacios[0];
  const muestras = useMemo(
    () => [
      { grupo: "Pintura", ...opcionDe("pintura", seleccion.pintura) },
      { grupo: "Piso", ...opcionDe("piso", seleccion.piso) },
      { grupo: "Cocina", ...opcionDe("cocina", seleccion.cocina) },
    ],
    [seleccion],
  );

  return (
    <div className={styles.shell}>
      {pantalla !== "portada" ? (
        <header className={styles.topbar}>
          <a className={styles.marca} href="/">
            <img src={portada.marca} alt="Skema" />
          </a>
          <p className={styles.marcaNombre}>{proyecto.nombre}</p>
          <nav className={styles.nav} aria-label="Experiencia">
            <button
              type="button"
              className={pantalla === "conjunto" ? styles.navActivo : ""}
              onClick={() => setPantalla("conjunto")}
            >
              Conjunto
            </button>
            <button
              type="button"
              className={pantalla === "apartamento" ? styles.navActivo : ""}
              onClick={() => setPantalla("apartamento")}
            >
              Apartamento
            </button>
          </nav>
          <span className={styles.ciudad}>{proyecto.ciudad}</span>
        </header>
      ) : null}

      {pantalla === "portada" ? (
        <section className={styles.portada} style={{ backgroundImage: `url(${portada.foto})` }}>
          <a className={styles.portadaMarca} href="/">
            <img src={portada.marca} alt="Skema" />
          </a>
          <div className={styles.heroCard}>
            <img className={styles.heroLogo} src={portada.logo} alt="Tamborá" />
            <h1>{proyecto.nombre}</h1>
            <p className={styles.heroTipo}>{proyecto.tipo} en conjunto cerrado</p>
            <p className={styles.heroCiudad}>{proyecto.ciudad}</p>
            <button type="button" className={styles.boton} onClick={() => setPantalla("conjunto")}>
              Entrar
            </button>
          </div>
        </section>
      ) : null}

      {pantalla === "conjunto" ? (
        <section className={styles.conjunto}>
          <aside className={styles.zonaPanel}>
            <h2>El conjunto</h2>
            <p className={styles.zonaIntro}>{proyecto.conjunto}. 16 zonas sociales.</p>
            <ListaConjunto activaId={zonaId} onSelect={setZonaId} />
            <button type="button" className={`${styles.boton} ${styles.botonBloque}`} onClick={() => setPantalla("apartamento")}>
              Ver el apartamento
            </button>
          </aside>
          <CarruselConjunto />
        </section>
      ) : null}

      {pantalla === "apartamento" ? (
        <section className={styles.apto}>
          <aside className={styles.aside}>
            <FichaProyecto onSolicitar={() => setLeadAbierta(true)} />
            <PanelAcabados seleccion={seleccion} onCambio={setSeleccion} />
          </aside>
          <div className={styles.visor}>
            <div className={styles.modos}>
              <button
                type="button"
                className={`${styles.modo} ${modo === "planta" ? styles.modoActivo : ""}`}
                onClick={() => setModo("planta")}
              >
                Planta
              </button>
              <button
                type="button"
                className={`${styles.modo} ${modo === "espacios" ? styles.modoActivo : ""}`}
                onClick={() => setModo("espacios")}
              >
                Espacios
              </button>
              <button
                type="button"
                className={`${styles.modo} ${modo === "recorrido" ? styles.modoActivo : ""}`}
                onClick={() => setModo("recorrido")}
              >
                Recorrido
              </button>
            </div>
            <p className={styles.vr}>
              Para vivir la experiencia completa usa gafas VR o ven a la sala de ventas
            </p>
            {modo === "espacios" ? (
              <div className={styles.espacios}>
                {espacios.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`${styles.espacio} ${item.id === espacio.id ? styles.espacioActivo : ""}`}
                    onClick={() => setEspacioId(item.id)}
                  >
                    {item.nombre}
                  </button>
                ))}
              </div>
            ) : null}
            {modo === "recorrido" ? (
              <>
                <p className={styles.contador}>
                  {indice + 1} / {recorrido.length}
                </p>
                <div className={styles.recorridoNav}>
                  <button
                    type="button"
                    aria-label="Foto anterior"
                    onClick={() => setIndice((actual) => (actual === 0 ? recorrido.length - 1 : actual - 1))}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Foto siguiente"
                    onClick={() => setIndice((actual) => (actual + 1) % recorrido.length)}
                  >
                    ›
                  </button>
                </div>
              </>
            ) : null}
            <ApartmentViewer
              seleccion={seleccion}
              modo={modo}
              espacioId={espacio.id}
              recorridoIndex={indice}
            />
            <div className={styles.stageBar}>
              <div className={styles.paleta}>
                {muestras.map((muestra) => (
                  <span key={muestra.grupo} className={styles.paletaItem}>
                    <span className={styles.muestra} style={{ background: muestra.hex }} aria-hidden="true" />
                    {muestra.grupo}: {muestra.nombre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <LeadSheet abierta={leadAbierta} seleccion={seleccion} onCerrar={() => setLeadAbierta(false)} />
    </div>
  );
}

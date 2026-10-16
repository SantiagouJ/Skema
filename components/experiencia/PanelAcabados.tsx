import { useState } from "react";
import { acabados, type GrupoAcabado, type Seleccion } from "@/data/tambora";
import styles from "./experiencia.module.css";

type PanelProps = {
  seleccion: Seleccion;
  onCambio: (seleccion: Seleccion) => void;
};

export function PanelAcabados({ seleccion, onCambio }: PanelProps) {
  const [grupoId, setGrupoId] = useState<GrupoAcabado["id"]>("pintura");
  const grupo = acabados.find((item) => item.id === grupoId) ?? acabados[0];

  return (
    <section className={styles.panel} aria-label="Personalización">
      <div className={styles.panelCabeza}>
        <p>Hazlo a tu estilo</p>
        <span>Interactivo</span>
      </div>
      <h3>Personaliza los acabados</h3>
      <div className={styles.grupos} role="tablist" aria-label="Tipo de acabado">
        {acabados.map((item) => {
          const activo = item.id === grupo.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={activo}
              className={`${styles.grupoChip} ${activo ? styles.grupoChipActivo : ""}`}
              onClick={() => setGrupoId(item.id)}
            >
              <span className={styles.radio} aria-hidden="true" />
              {item.nombre}
            </button>
          );
        })}
      </div>
      <div className={styles.opciones} role="listbox" aria-label={grupo.nombre}>
        {grupo.opciones.map((opcion) => {
          const activa = seleccion[grupo.id] === opcion.id;
          return (
            <button
              key={opcion.id}
              type="button"
              role="option"
              aria-selected={activa}
              className={`${styles.opcion} ${activa ? styles.opcionActiva : ""}`}
              onClick={() => onCambio({ ...seleccion, [grupo.id]: opcion.id })}
            >
              <span className={styles.muestra} style={{ background: opcion.hex }} aria-hidden="true" />
              {opcion.nombre}
            </button>
          );
        })}
      </div>
    </section>
  );
}

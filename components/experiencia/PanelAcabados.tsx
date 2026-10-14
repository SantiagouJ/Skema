import { acabados, opcionDe, type Seleccion } from "@/data/tambora";
import styles from "./experiencia.module.css";

type PanelProps = {
  seleccion: Seleccion;
  onCambio: (seleccion: Seleccion) => void;
};

export function PanelAcabados({ seleccion, onCambio }: PanelProps) {
  const resumen = [
    opcionDe("pintura", seleccion.pintura).nombre,
    opcionDe("piso", seleccion.piso).nombre,
    opcionDe("cocina", seleccion.cocina).nombre,
  ].join(" · ");

  return (
    <section className={styles.panel} aria-label="Personalización">
      <h3>Acabados</h3>
      {acabados.map((grupo) => (
        <div key={grupo.id} className={styles.grupo}>
          <p>{grupo.nombre}</p>
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
        </div>
      ))}

      <p className={styles.resumen}>{resumen}</p>
    </section>
  );
}

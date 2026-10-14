import { acabados, estilos, opcionDe, estiloDe, type Seleccion } from "@/data/tambora";
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
    estiloDe(seleccion.estilo).nombre,
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

      <h3>Estilo de vida</h3>
      <div className={styles.estilos}>
        {estilos.map((estilo) => {
          const activo = seleccion.estilo === estilo.id;
          return (
            <button
              key={estilo.id}
              type="button"
              className={`${styles.estilo} ${activo ? styles.estiloActivo : ""}`}
              aria-pressed={activo}
              onClick={() => onCambio({ ...seleccion, estilo: estilo.id })}
            >
              <strong>{estilo.nombre}</strong>
              <span>Espacio inteligente: {estilo.uso}</span>
            </button>
          );
        })}
      </div>
      <p className={styles.resumen}>{resumen}</p>
    </section>
  );
}

import { proyecto } from "@/data/tambora";
import styles from "./experiencia.module.css";

type FichaProps = {
  onSolicitar: () => void;
};

export function FichaProyecto({ onSolicitar }: FichaProps) {
  return (
    <section className={styles.ficha}>
      <h2>{proyecto.nombre}</h2>
      <p className={styles.fichaTipo}>
        {proyecto.tipo} · {proyecto.ciudad}
      </p>
      <p className={styles.precio}>
        <span className={styles.precioLabel}>Precio fijo</span>
        {proyecto.precio}
      </p>
      <ul className={styles.specs}>
        <li>
          <span>Área</span>
          {proyecto.area}
        </li>
        <li>
          <span>Distribución</span>
          {proyecto.distribucion}
        </li>
        <li>
          <span>Baño</span>
          {proyecto.banos}
        </li>
        <li>
          <span>Cocina</span>
          {proyecto.cocina}
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
      <p className={styles.aviso}>{proyecto.aviso}</p>
      <button type="button" className={`${styles.boton} ${styles.botonBloque}`} onClick={onSolicitar}>
        Solicitar información
      </button>
    </section>
  );
}

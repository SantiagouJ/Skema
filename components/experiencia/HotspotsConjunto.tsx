import { zonas } from "@/data/tambora";
import styles from "./experiencia.module.css";

type HotspotsProps = {
  activaId: string;
  onSelect: (id: string) => void;
};

export function HotspotsConjunto({ activaId, onSelect }: HotspotsProps) {
  return (
    <>
      {zonas.map((zona) => (
        <button
          key={zona.id}
          type="button"
          className={`${styles.punto} ${zona.id === activaId ? styles.puntoActivo : ""}`}
          style={{ left: `${zona.x}%`, top: `${zona.y}%` }}
          aria-label={zona.nombre}
          aria-pressed={zona.id === activaId}
          onClick={() => onSelect(zona.id)}
        />
      ))}
    </>
  );
}

export function ListaConjunto({ activaId, onSelect }: HotspotsProps) {
  const activa = zonas.find((zona) => zona.id === activaId) ?? zonas[0];

  return (
    <>
      <ul className={styles.listaZonas}>
        {zonas.map((zona) => (
          <li key={zona.id}>
            <button
              type="button"
              className={zona.id === activaId ? styles.zonaActiva : ""}
              onClick={() => onSelect(zona.id)}
            >
              {zona.nombre}
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.detalleZona}>
        <img src={activa.icono} alt="" />
        <div>
          <h3>{activa.nombre}</h3>
          <p>{activa.texto}</p>
        </div>
      </div>
    </>
  );
}

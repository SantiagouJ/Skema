import styles from "./experiencia.module.css";

export type Muestra = {
  grupo: string;
  nombre: string;
  hex: string;
};

type StageProps = {
  src: string;
  alt: string;
  ajustar?: "cover" | "contain";
  muestras: Muestra[];
  etiqueta?: string;
  nota?: string;
};

export function Stage({ src, alt, ajustar = "cover", muestras, etiqueta, nota }: StageProps) {
  return (
    <div className={`${styles.stage} ${ajustar === "contain" ? styles.stageContener : ""}`} data-stage="photo">
      <img src={src} alt={alt} />
      <div className={styles.stageBar}>
        <div className={styles.paleta}>
          {muestras.map((muestra) => (
            <span key={muestra.grupo} className={styles.paletaItem}>
              <span className={styles.muestra} style={{ background: muestra.hex }} aria-hidden="true" />
              {muestra.grupo}: {muestra.nombre}
            </span>
          ))}
        </div>
        {etiqueta ? <p className={styles.etiqueta}>{etiqueta}</p> : null}
        {nota ? <p className={styles.nota}>{nota}</p> : null}
      </div>
    </div>
  );
}

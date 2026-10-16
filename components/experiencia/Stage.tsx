import { cx, ui } from "./ui";

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
    <div className={cx(ui.stage, ajustar === "contain" && ui.stageContener)} data-stage="photo">
      <img src={src} alt={alt} />
      <div className={ui.stageBar}>
        <div className={ui.paleta}>
          {muestras.map((muestra) => (
            <span key={muestra.grupo} className={ui.paletaItem}>
              <span className={ui.muestra} style={{ background: muestra.hex }} aria-hidden="true" />
              {muestra.grupo}: {muestra.nombre}
            </span>
          ))}
        </div>
        {etiqueta ? <p className={ui.etiqueta}>{etiqueta}</p> : null}
        {nota ? <p className={ui.nota}>{nota}</p> : null}
      </div>
    </div>
  );
}

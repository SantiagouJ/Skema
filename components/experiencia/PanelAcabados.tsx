import { acabados, type Seleccion } from "@/data/tambora";
import { cx, ui } from "./ui";

type PanelProps = {
  seleccion: Seleccion;
  onCambio: (seleccion: Seleccion) => void;
};

export function PanelAcabados({ seleccion, onCambio }: PanelProps) {
  return (
    <section className={ui.panel} aria-label="Personalización">
      <h3 className={ui.exploraTitulo}>Explora acabados disponibles</h3>
      {acabados.map((grupo) => (
        <div key={grupo.id} className={ui.exploraGrupo}>
          <div className={ui.exploraCabeza}>
            <p className={ui.exploraNombre}>
              {grupo.nombre} <span className={ui.exploraGuion}>–</span> {grupo.aliado}
            </p>
            <button type="button" className={ui.exploraMas}>
              Ver más <span aria-hidden="true">›</span>
            </button>
          </div>
          <div className={ui.exploraGrid} role="listbox" aria-label={grupo.nombre}>
            {grupo.opciones.map((opcion) => {
              const activa = seleccion[grupo.id] === opcion.id;
              return (
                <button
                  key={opcion.id}
                  type="button"
                  role="option"
                  aria-selected={activa}
                  className={cx(ui.tarjeta, activa && ui.tarjetaActiva)}
                  onClick={() => onCambio({ ...seleccion, [grupo.id]: opcion.id })}
                >
                  <span className={ui.tarjetaMuestra} style={{ background: opcion.hex }} aria-hidden="true">
                    {activa ? <span className={ui.tarjetaCheck}>✓</span> : null}
                  </span>
                  <span className={ui.tarjetaTexto}>
                    <span className={ui.tarjetaNombre}>{opcion.nombre}</span>
                    <span className={ui.tarjetaCodigo}>{opcion.codigo}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ))}
      <div className={ui.aliados}>
        <p className={ui.aliadosTitulo}>Aliados de acabados</p>
        <div className={ui.aliadosGrid}>
          {acabados.map((grupo) => (
            <div key={grupo.aliado} className={ui.aliadoLogo} aria-label={`Espacio para el logo de ${grupo.aliado}`}>
              <span className={ui.aliadoMarca}>{grupo.aliado}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

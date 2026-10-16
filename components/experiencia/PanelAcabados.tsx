import { useState } from "react";
import { acabados, type GrupoAcabado, type Seleccion } from "@/data/tambora";
import { cx, ui } from "./ui";

type PanelProps = {
  seleccion: Seleccion;
  onCambio: (seleccion: Seleccion) => void;
};

export function PanelAcabados({ seleccion, onCambio }: PanelProps) {
  const [grupoId, setGrupoId] = useState<GrupoAcabado["id"]>("pintura");
  const grupo = acabados.find((item) => item.id === grupoId) ?? acabados[0];

  return (
    <section className={ui.panel} aria-label="Personalización">
      <div className={ui.panelCabeza}>
        <p className={ui.panelKicker}>Hazlo a tu estilo</p>
        <span className={ui.panelEtiqueta}>Interactivo</span>
      </div>
      <h3 className={ui.panelTitulo}>Personaliza los acabados</h3>
      <div className={ui.grupos} role="tablist" aria-label="Tipo de acabado">
        {acabados.map((item) => {
          const activo = item.id === grupo.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={activo}
              className={cx(ui.grupoChip, activo && ui.grupoChipActivo)}
              onClick={() => setGrupoId(item.id)}
            >
              <span className={cx(ui.radio, activo && ui.radioActivo)} aria-hidden="true" />
              {item.nombre}
            </button>
          );
        })}
      </div>
      <div className={ui.opciones} role="listbox" aria-label={grupo.nombre}>
        {grupo.opciones.map((opcion) => {
          const activa = seleccion[grupo.id] === opcion.id;
          return (
            <button
              key={opcion.id}
              type="button"
              role="option"
              aria-selected={activa}
              className={cx(ui.opcion, activa && ui.opcionActiva)}
              onClick={() => onCambio({ ...seleccion, [grupo.id]: opcion.id })}
            >
              <span className={ui.muestra} style={{ background: opcion.hex }} aria-hidden="true" />
              {opcion.nombre}
            </button>
          );
        })}
      </div>
    </section>
  );
}

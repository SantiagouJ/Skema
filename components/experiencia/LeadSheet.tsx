"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { WHATSAPP, opcionDe, proyecto, type Seleccion } from "@/data/tambora";
import { ui } from "./ui";

type LeadProps = {
  abierta: boolean;
  seleccion: Seleccion;
  onCerrar: () => void;
};

export function LeadSheet({ abierta, seleccion, onCerrar }: LeadProps) {
  const tituloId = useId();
  const [nombre, setNombre] = useState("");
  const [celular, setCelular] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!abierta) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onCerrar();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierta, onCerrar]);

  if (!abierta) return null;

  const pintura = opcionDe("pintura", seleccion.pintura);
  const piso = opcionDe("piso", seleccion.piso);

  function enviar(event: FormEvent) {
    event.preventDefault();
    const tel = celular.replace(/\D/g, "");
    if (nombre.trim().length < 2 || tel.length < 7) {
      setError("Escribe tu nombre y un celular válido.");
      return;
    }
    const texto = [
      `Hola, quiero información de ${proyecto.nombre}.`,
      `Nombre: ${nombre.trim()}`,
      `Celular: ${celular.trim()}`,
      `Pintura: ${pintura.nombre}`,
      `Piso: ${piso.nombre}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank", "noopener,noreferrer");
    onCerrar();
  }

  return (
    <div className={ui.hojaFondo} onClick={onCerrar}>
      <form
        className={ui.hoja}
        role="dialog"
        aria-modal="true"
        aria-labelledby={tituloId}
        onClick={(event) => event.stopPropagation()}
        onSubmit={enviar}
      >
        <div className={ui.hojaCabeza}>
          <h2 id={tituloId} className={ui.hojaTitulo}>
            Solicitar información
          </h2>
          <button type="button" className={ui.cerrar} onClick={onCerrar} aria-label="Cerrar">
            ×
          </button>
        </div>
        <p className={ui.hojaIntro}>Se abre WhatsApp con tu nombre y la configuración elegida.</p>
        <label className={ui.campo}>
          Nombre completo
          <input
            className={ui.campoInput}
            value={nombre}
            onChange={(event) => {
              setNombre(event.target.value);
              setError("");
            }}
            autoComplete="name"
          />
        </label>
        <label className={ui.campo}>
          Celular
          <input
            className={ui.campoInput}
            value={celular}
            onChange={(event) => {
              setCelular(event.target.value);
              setError("");
            }}
            inputMode="tel"
            autoComplete="tel"
          />
        </label>
        <ul className={ui.configuracion}>
          <li className={ui.configuracionItem}>Pintura: {pintura.nombre}</li>
          <li className={ui.configuracionItem}>Piso: {piso.nombre}</li>
        </ul>
        {error ? <p className={ui.error}>{error}</p> : null}
        <button type="submit" className={`${ui.boton} ${ui.botonBloque}`}>
          Enviar por WhatsApp
        </button>
      </form>
    </div>
  );
}

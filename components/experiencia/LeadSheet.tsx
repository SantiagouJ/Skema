"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { WHATSAPP, opcionDe, proyecto, type Seleccion } from "@/data/tambora";
import styles from "./experiencia.module.css";

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
    <div className={styles.hojaFondo} onClick={onCerrar}>
      <form
        className={styles.hoja}
        role="dialog"
        aria-modal="true"
        aria-labelledby={tituloId}
        onClick={(event) => event.stopPropagation()}
        onSubmit={enviar}
      >
        <div className={styles.hojaCabeza}>
          <h2 id={tituloId}>Solicitar información</h2>
          <button type="button" className={styles.cerrar} onClick={onCerrar} aria-label="Cerrar">
            ×
          </button>
        </div>
        <p className={styles.hojaIntro}>Se abre WhatsApp con tu nombre y la configuración elegida.</p>
        <label className={styles.campo}>
          Nombre completo
          <input
            value={nombre}
            onChange={(event) => {
              setNombre(event.target.value);
              setError("");
            }}
            autoComplete="name"
          />
        </label>
        <label className={styles.campo}>
          Celular
          <input
            value={celular}
            onChange={(event) => {
              setCelular(event.target.value);
              setError("");
            }}
            inputMode="tel"
            autoComplete="tel"
          />
        </label>
        <ul className={styles.configuracion}>
          <li>Pintura: {pintura.nombre}</li>
          <li>Piso: {piso.nombre}</li>
        </ul>
        {error ? <p className={styles.error}>{error}</p> : null}
        <button type="submit" className={`${styles.boton} ${styles.botonBloque}`}>
          Enviar por WhatsApp
        </button>
      </form>
    </div>
  );
}

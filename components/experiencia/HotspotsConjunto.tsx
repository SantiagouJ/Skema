"use client";

import { useState } from "react";
import { fotosConjunto, zonas } from "@/data/tambora";
import styles from "./experiencia.module.css";

type ListaProps = {
  activaId: string;
  onSelect: (id: string) => void;
};

export function CarruselConjunto() {
  const [indice, setIndice] = useState(0);
  const foto = fotosConjunto[indice] ?? fotosConjunto[0];

  function mover(delta: number) {
    setIndice((actual) => (actual + delta + fotosConjunto.length) % fotosConjunto.length);
  }

  return (
    <div className={styles.carrusel}>
      <img src={foto.src} alt={foto.alt} />
      <p className={styles.contadorCarrusel}>
        {indice + 1} / {fotosConjunto.length}
      </p>
      <div className={styles.carruselNav}>
        <button type="button" aria-label="Foto anterior" onClick={() => mover(-1)}>
          ‹
        </button>
        <button type="button" aria-label="Foto siguiente" onClick={() => mover(1)}>
          ›
        </button>
      </div>
      <div className={styles.carruselPie}>
        <strong>{foto.alt}</strong>
      </div>
    </div>
  );
}

export function ListaConjunto({ activaId, onSelect }: ListaProps) {
  return (
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
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import type { Seleccion } from "@/data/tambora";
import styles from "./experiencia.module.css";

type Modo = "planta" | "espacios" | "recorrido";

type ViewerHandle = {
  setFinishes: (seleccion: Seleccion) => void;
  setView: (modo: Modo, espacioId: string, index: number) => void;
  dispose: () => void;
};

type Props = {
  seleccion: Seleccion;
  modo: Modo;
  espacioId: string;
  recorridoIndex: number;
};

export function ApartmentViewer({ seleccion, modo, espacioId, recorridoIndex }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const viewer = useRef<ViewerHandle | null>(null);
  const [estado, setEstado] = useState<"cargando" | "listo" | "error">("cargando");

  useEffect(() => {
    const node = host.current;
    if (!node) return;
    let activo = true;
    let handle: ViewerHandle | null = null;

    import("@/lib/visor/createViewer").then((mod) => {
      if (!activo) return;
      handle = mod.createViewer(node, {
        onReady: () => {
          if (activo) setEstado("listo");
        },
        onError: () => {
          if (activo) setEstado("error");
        },
      });
      viewer.current = handle;
      handle.setFinishes(seleccion);
      handle.setView(modo, espacioId, recorridoIndex);
    });

    return () => {
      activo = false;
      handle?.dispose();
      viewer.current = null;
    };
    // The viewer is created once; later props sync in the effects below.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    viewer.current?.setFinishes(seleccion);
  }, [seleccion]);

  useEffect(() => {
    viewer.current?.setView(modo, espacioId, recorridoIndex);
  }, [modo, espacioId, recorridoIndex]);

  return (
    <div className={styles.canvasHost} data-stage="model" ref={host}>
      {estado === "cargando" ? <p className={styles.cargando}>Cargando apartamento…</p> : null}
      {estado === "error" ? <p className={styles.cargando}>No se pudo cargar el modelo.</p> : null}
    </div>
  );
}

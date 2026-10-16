import type { Metadata } from "next";
import { ExperienciaTambora } from "@/components/experiencia/ExperienciaTambora";

export const metadata: Metadata = {
  title: "Tamborá Apartamentos – Experiencia | Skema",
  description:
    "Recorre Tamborá Apartamentos, elige acabados y solicita información.",
};

export default function TamboraExperienciaPage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />
      <ExperienciaTambora />
    </>
  );
}

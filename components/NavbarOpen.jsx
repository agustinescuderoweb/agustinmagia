import React, { useEffect } from 'react';

function Query() {
  useEffect(() => {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    abrir.addEventListener("click", () => {
      nav.classList.add("visible");
    });

    cerrar.addEventListener("click", () => {
      nav.classList.remove("visible");
    });

    // Asegúrate de eliminar los event listeners cuando el componente se desmonta
    return () => {
      abrir.removeEventListener("click", () => {
        nav.classList.add("visible");
      });

      cerrar.removeEventListener("click", () => {
        nav.classList.remove("visible");
      });
    }
  }, []); // El segundo argumento del useEffect es un array de dependencias, déjalo vacío si no tienes dependencias.

}

export default Query;




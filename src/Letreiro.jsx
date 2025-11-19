import React, { useState, useEffect } from "react";

function Letreiro() {
  const texto = "Conheça a FATEC";
  const [indice, setIndice] = useState(0);
  const [direcao, setDirecao] = useState(1); // 1 = escrevendo, -1 = apagando
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const intervalo = setInterval(() => {
      setDisplay(texto.slice(0, indice));

      if (direcao === 1 && indice < texto.length) {
        setIndice(indice + 1);
      } else if (direcao === -1 && indice > 0) {
        setIndice(indice - 1);
      } else if (indice === texto.length) {
        setDirecao(-1);
      } else if (indice === 0 && direcao === -1) {
        setDirecao(1);
      }
    }, 150);

    return () => clearInterval(intervalo);
  }, [indice, direcao, texto]);

  return (
    <h2>
      {display}
      <span className="cursor">|</span>
    </h2>
  );
}

export default Letreiro;

import React, { useState, useEffect } from "react";

function Relogio() {
  const [horaAtual, setHoraAtual] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraAtual(new Date());
    }, 1000);

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(intervalo);
  }, []);

  // Formata a hora no formato HH:MM:SS
  const horaFormatada = horaAtual.toLocaleTimeString("pt-BR", {
    hour12: false,
  });

  return (
    <div style={{ fontSize: "2rem", fontFamily: "monospace" }}>
      {horaFormatada}
    </div>
  );
}

export default Relogio;

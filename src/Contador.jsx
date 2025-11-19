import React, { useState } from "react";

function ContadorPessoas() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const total = homens + mulheres;

  const adicionarHomem = () => setHomens(homens + 1);
  const removerHomem = () => setHomens(homens > 0 ? homens - 1 : 0);

  const adicionarMulher = () => setMulheres(mulheres + 1);
  const removerMulher = () => setMulheres(mulheres > 0 ? mulheres - 1 : 0);

  const resetar = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Total</h2>
      <h3>{total}</h3>
      <button onClick={resetar}>🔄 Resetar</button>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {/* Homens */}
        <div style={{ margin: "20px" }}>
          <h3>👨 Homens</h3>
          <button onClick={adicionarHomem}>➕</button>
          <button onClick={removerHomem}>➖</button>
          <p>{homens}</p>
        </div>

        {/* Mulheres */}
        <div style={{ margin: "20px" }}>
          <h3>👩 Mulheres</h3>
          <button onClick={adicionarMulher}>➕</button>
          <button onClick={removerMulher}>➖</button>
          <p>{mulheres}</p>
        </div>
      </div>
    </div>
  );
}

export default ContadorPessoas;

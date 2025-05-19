import React, { useState } from 'react';

function App() {
  const [mostrarSegundaTela, setMostrarSegundaTela] = useState(false);

  const irParaSegundaTela = () => {
    setMostrarSegundaTela(true);
  };

  return (
    <div>
      {mostrarSegundaTela ? (
        <h2>Esta é a segunda tela!</h2>
      ) : (
        <div>
          <h1>Bem-vindo à PatchEco!</h1>
          <button onClick={irParaSegundaTela}>Entrar</button>
        </div>
      )}
    </div>
  );
}

export default App;

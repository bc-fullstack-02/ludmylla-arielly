import { useState } from "react"

function Contador() {
    const [ contador, setContador] = useState(0);
    return (
        <div className="contador">

        <h1>Contador</h1>
        <h2>{contador}</h2>
        <button onClick={() => setContador((valorAnterior) => valorAnterior + 1)}>Aumentar</button>
        <button onClick={() => setContador((valorAnterior) => valorAnterior - 1)}>Diminur</button>
    
      </div>
    
    );
}

export default Contador;
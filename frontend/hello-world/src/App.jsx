import { useState } from "react"
import Contador from "./contador";

function App() {
  const [ contador, setContador] = useState(0);

  return (
    <div className="main">
      <Contador />
    </div>
  )
}

export default App

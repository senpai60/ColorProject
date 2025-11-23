import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import ColorGenPage from "./pages/ColorGenPage";

function App() {
  const [algoMode, setAlgoMode] = useState('combinational')
  return (
    <main className="w-full h-screen bg-zinc-950 font-sans flex flex-col">
      <Navbar setAlgoMode={setAlgoMode}/>
      <ColorGenPage algoMode={algoMode} />
    </main>
  );
}

export default App;

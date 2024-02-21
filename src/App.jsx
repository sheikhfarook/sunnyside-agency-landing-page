import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SunnySide from "./components/header/sunnyside";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <SunnySide />
    </div>
  );
}

export default App;

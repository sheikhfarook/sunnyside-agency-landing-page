import "./App.css";
import SunnySide from "./components/header/sunnyside";
import ClientTestimonials from "./components/main/clientTestimonials";
import Contain from "./components/main/contain";

function App() {
  return (
    <div>
      <SunnySide />
      <Contain />
      <ClientTestimonials />
    </div>
  );
}

export default App;

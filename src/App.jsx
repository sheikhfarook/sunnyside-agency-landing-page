import "./App.css";
import FooterContact from "./components/footer/footercontact";
import SunnySide from "./components/header/sunnyside";
import ClientTestimonials from "./components/main/clientTestimonials";
import Contain from "./components/main/contain";

function App() {
  return (
    <div>
      <SunnySide />
      <Contain />
      <ClientTestimonials />
      <FooterContact />
    </div>
  );
}

export default App;

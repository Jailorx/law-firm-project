import "./App.css";
import ChooseUs from "./components/ChooseUs/ChooseUs";
import HeroSection from "./components/HeroSection/HeroSection";
import Introduction from "./components/Introduction/Introduction";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Introduction />
      <ChooseUs />
    </>
  );
}

export default App;

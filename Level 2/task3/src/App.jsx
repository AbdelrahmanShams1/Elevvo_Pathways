import Contact from "./components/Contact";
import Features from "./components/Features";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Landing from "./components/landing";
import UsersSay from "./components/usersSay";

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <Features />
      <UsersSay />
      <Pricing />
      <Contact />
    </>
  );
};

export default App;

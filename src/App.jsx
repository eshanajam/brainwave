// app.jsx will be our home page
import Button from "./Componenets/Button";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./Componenets/Header";
import HEERROOO from "./Componenets/HEERROOO";
import Benefits from "./Componenets/Benefits";
import Collaboration from "./Componenets/Collaboration";
import Services from "./Componenets/Services";
import Pricing from "./Componenets/Pricing";
import Roadmap from "./Componenets/Roadmap";
function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <div className="pt-[4.75rem lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <HEERROOO />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        {/* <Button
          className="mt-20"
          // if we remove href we will get normal button
          // href="#login"
        ></Button> */}
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;

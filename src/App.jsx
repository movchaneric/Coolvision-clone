import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./componenets/AppLayout";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Navbar from "./componenets/Navbar";
import Contact from "./features/Contact/Contact";
import styled from "styled-components";
import Footer from "./features/Footer/footer";
import LifeAtCoolvision from "./features/LifeAtCoolvision/LifeAtCoolvision";
import CoolTeam from "./features/CoolTeam/CoolTeam";
import Careers from "./features/Careers/Careers";


function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Show nav bar on everypage */}
        <Navbar />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="life-at-coolvision" element={<LifeAtCoolvision />} />
            <Route path="coolteam" element={<CoolTeam />} />
            <Route path="careers" element={<Careers />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./componenets/AppLayout";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Navbar from "./componenets/Navbar";
import Contact from "./features/Contact/Contact";
import styled from "styled-components";
import Footer from "./features/Footer/footer";

const StyledApp = styled.div`
  display: grid;
  grid-template-rows: 65px 1fr 65px;
`;

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        {/* Show nav bar on everypage */}
        <Navbar />
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;

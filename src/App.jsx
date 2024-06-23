import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Location from "./components/Location/Location";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

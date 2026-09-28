import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Freelancers from "./pages/Freelancers";
import FreelancerDetails from "./pages/FreelancerDetails";
import FindMatch from "./pages/FindMatch";
import About from "./pages/About";
import SavedFreelancers from "./pages/SavedFreelancers";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelancers" element={<Freelancers />} />
        <Route path="/freelancer/:id" element={<FreelancerDetails />} />
        <Route path="/find-match" element={<FindMatch />} />
        <Route path="/saved" element={<SavedFreelancers />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
import Home from "./pages/Home";
import Construction from "./pages/Construction";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Construction />} />
        <Route path="/jobs" element={<Construction />} />
        <Route path="/login" element={<Construction />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

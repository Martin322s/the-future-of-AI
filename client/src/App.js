import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Headers";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Catalog from "./components/Catalog/Catalog";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/catalog" element={<Catalog />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
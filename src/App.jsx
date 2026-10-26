import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router";

import Header from "./components/Header";
import BottomNav from "./components/BottomNav";

import Home from "./pages/Home";
import Stores from "./pages/Stores";
import FAQ from "./pages/FAQ";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tiendas" element={<Stores />} />
          <Route
            path="/preguntas-frecuentes"
            element={<FAQ />}
          />
        </Routes>

        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
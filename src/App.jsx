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
import AddProduct from "./pages/AddProduct";
import Inventory from "./pages/Inventory";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-slate-100 pb-24 text-slate-900">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/carrito" element={<Cart />} />

          <Route path="/inventario/:id" element={<ProductDetail />} />

          <Route
            path="/inventario"
            element={<Inventory />}
          />

          <Route
            path="/agregar"
            element={<AddProduct />}
          />

          <Route
            path="/tiendas"
            element={<Stores />}
          />

          <Route
            path="/preguntas-frecuentes"
            element={<FAQ />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>

        <BottomNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
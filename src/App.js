import "./App.css";
import ModificarTarea from "./Components/ModificarTarea";
import NuevaTarea from "./Components/NuevaTarea";
import Login from "./Components/Login";
import ListaTareas from "./Components/ListaTareas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registro from "./Components/Registro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/verTareas/:ID" element={<ListaTareas />} exact />
        <Route path="/" element={<Login />} exact />
        <Route path="/nuevaTarea/:ID" element={<NuevaTarea />} exact />
        <Route path="/modificarTarea/:ID" element={<ModificarTarea />} exact />
        <Route path="/registro" element={<Registro />} exact />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

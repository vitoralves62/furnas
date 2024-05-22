import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingUP from "./pages/SingUp/singUpForm.js";
import Login from "./pages/Login/loginForm.js";
import DataConfirmPage from "./pages/DataConfirm/index.js";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Cadastro" element={<SingUP />}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/confirmar-dados" element={<DataConfirmPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

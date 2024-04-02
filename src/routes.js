import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingUP from "./pages/SingUp/singUpForm.js";
import Login from "./pages/Login/loginForm.js";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Cadastro" element={<SingUP />}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingUP from "./pages/SingUp/singUpForm.js";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingUP />}/>  
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;

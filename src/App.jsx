import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ResetPasswordPage from "./pages/ResetPasswordPage/ResetPasswordPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import Error404 from "./pages/Error404/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/error-404" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

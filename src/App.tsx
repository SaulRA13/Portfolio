// filepath: c:\git\Folio\Folio\Portafolio\src\App.tsx
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Home } from "./pages/Home"
import { NotAPage } from "./pages/NotAPage"

function RedirectHandler() {
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);
  return null;
}

function App() {
  return (
    <BrowserRouter basename="/Portfolio">
      <RedirectHandler />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotAPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
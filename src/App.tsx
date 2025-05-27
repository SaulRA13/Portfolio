import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotAPage } from "./pages/NotAPage"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotAPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

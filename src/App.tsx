import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ResultPage, MainPage, NoMatchPage } from "@/pages"
import { LogoHeader } from "@/components"
import { AppRoutes } from "@/types"


function App() {
  return (
    <BrowserRouter>
      <LogoHeader />
      <Routes>
        <Route path={AppRoutes.MAIN} element={<MainPage />} />
        <Route path={AppRoutes.RESULT} element={<ResultPage />} />
        <Route path="*" element={<NoMatchPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

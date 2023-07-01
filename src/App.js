import { Route, Routes } from "react-router"
import RootLayOut from "./components/RootLayout"
import HomePage from "./pages/HomePage"
import Header from "./components/Header"

const App = () => {






  return (
    <div>
      <Routes>
        <Route element={<Header />} />
        <Route path="/" element={<RootLayOut />} />
        <Route index element={<HomePage />} />


      </Routes>

    </div>
  )
}

export default App
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import DashBoard from "./pages/DashBoard/DashBoard";
import CoinPage from "./pages/CoinPage/CoinPage";
import HomePage from "./pages/IntroductionPage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/crypto-app" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="coin/:id" element={<CoinPage />} />
      </Route>
    </Routes>
  );
}

export default App;

import { useState } from "react";
import s from "./App.module.scss";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import DashBoard from "./pages/DashBoard/DashBoard";
import CoinPage from "./pages/CoinPage/CoinPage";
import IntroductionPage from "./pages/IntroductionPage/IntroductionPage";

function App() {
  return (
    <Routes>
      <Route path="/crypto-app" element={<MainLayout />}>
        <Route index element={<IntroductionPage />} />
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="coin/:id" element={<CoinPage />} />
      </Route>
    </Routes>
  );
}

export default App;

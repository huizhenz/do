// App.tsx
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BillisanPage from "./pages/BillisanPage";
import AftertastePage from "./pages/AftertastePage";

function App() {
  return (
    <BrowserRouter basename="/do">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/billisan" element={<BillisanPage />} />
        <Route path="/projects/aftertaste" element={<AftertastePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
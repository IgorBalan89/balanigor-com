import { createRoot } from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/balanigor-com">
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

import { Routes, Route, Navigate } from "react-router-dom";
import ChapterScreen from "./pages/ChapterScreen";
import DetailScreen from "./pages/DetailScreen";
import "./styles.css";

export default function App() {
  return (
    <>
      <header className="header">
        <h1>EASE LEARN</h1>
        <p>Smart Learning • Class 5 EVS</p>
      </header>

      <Routes>

        <Route path="/" element={<Navigate to="/class5/chapter/1" />} />

        <Route path="/class5/chapter/:id" element={<ChapterScreen />} />

        <Route path="/class5/chapter/:id/:type" element={<DetailScreen />} />

      </Routes>

      <footer className="footer">
        Made with ❤️ | Ease Learn
      </footer>
    </>
  );
}

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Classes from "./pages/Classes";
import Subjects from "./pages/Subjects";
import ChapterScreen from "./pages/ChapterScreen";
import DetailScreen from "./pages/DetailScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./styles/styles.css";

export const LanguageContext = React.createContext();

export default function App() {
  const [lang, setLang] = useState("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Header />

      <Routes>
        <Route path="/" element={<Classes />} />
        <Route path="/class/:classId/subjects" element={<Subjects />} />
        <Route
  path="/class/:classId/:subject/chapter/:id"
  element={<ChapterScreen />}
/>

<Route
  path="/class/:classId/:subject/chapter/:id/:type"
  element={<DetailScreen />}
/>
      </Routes>

      <Footer />
    </LanguageContext.Provider>
  );
}

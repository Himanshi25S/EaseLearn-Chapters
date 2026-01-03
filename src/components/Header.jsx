import { useContext } from "react";
import { LanguageContext } from "../App";

export default function Header() {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <header className="header sky-header">
      {/* Background Moving Clouds */}
      <div className="cloud-container">
        <div className="cloud c1"></div>
        <div className="cloud c2"></div>
        <div className="cloud c3"></div>
      </div>

      {/* Main Visible Card */}
      <div className="header-card">
        <h1>EASE LEARN</h1>
        <p>Smart Learning for Kids</p>

        <div className="lang-switch">
          <button
            className={`lang-btn ${lang === "en" ? "active" : ""}`}
            onClick={() => setLang("en")}
          >
            English
          </button>

          <button
            className={`lang-btn ${lang === "hi" ? "active" : ""}`}
            onClick={() => setLang("hi")}
          >
            हिंदी
          </button>
        </div>
      </div>
    </header>
  );
}
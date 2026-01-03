import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../App";

import { getSubjectData } from "../utils/getSubjectData";

export default function DetailScreen() {
  const { classId, subject, id, type } = useParams();
  const data = getSubjectData(subject);
  const navigate = useNavigate();
  const { lang } = useContext(LanguageContext);
  const chapterId = Number(id);
  const chapter = data.chapters.find(ch => ch.id === chapterId);

  if (!chapter) return <h2>Data Not Found</h2>;

  const raw = chapter[type];

if (!raw) {
  return <h2 style={{ textAlign: "center" }}>Content Coming Soon</h2>;
}

let content = [];

// ✅ CASE 1: Array of { en, hi }
if (Array.isArray(raw)) {
  content = raw.map(item =>
    typeof item === "string" ? item : item[lang]
  );
}

// ✅ CASE 2: { en: [], hi: [] }
else if (raw[lang] && Array.isArray(raw[lang])) {
  content = raw[lang];
}

// ✅ CASE 3: { en: "...", hi: "..." }
else if (raw[lang] && typeof raw[lang] === "string") {
  content = raw[lang];
}

// ✅ CASE 4: plain string
else if (typeof raw === "string") {
  content = raw;
}

// ❌ Unknown format
else {
  return <h2>Invalid content format</h2>;
}


  return (
    <div className="main">
      <div className="back-btn" onClick={() => navigate(-1)}>⬅ Back</div>

      <div className="detail-card-container">
        <div className="detail-header">
           <span className="lesson-icon">📚</span>
           <h2>{typeof chapter.title === "string" ? chapter.title : chapter.title[lang]}</h2>
        </div>

        <div className="content-area">
          {Array.isArray(content) ? (
            <div className="kids-list">
              {content.map((item, i) => (
                <div key={i} className="kids-item">
                  <div className="kids-number">{i + 1}</div>
                  <div className="kids-text">{item}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="kids-plain-box">
              <p className="kids-plain-text">{content}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

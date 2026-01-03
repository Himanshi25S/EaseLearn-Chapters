import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../App";

import { getSubjectData } from "../utils/getSubjectData";

import img3d from "../assets/3d.png";
import imgSummary from "../assets/summary.png";
import imgPoints from "../assets/points.png";
import imgWords from "../assets/words.png";
import imgFun from "../assets/fun.png";
import imgHistory from "../assets/history.png";
import imgUse from "../assets/use.png";
import imgExamples from "../assets/examples.png";

export default function ChapterScreen() {
  const { classId, subject, id } = useParams();
  const navigate = useNavigate();
  const { lang } = useContext(LanguageContext);
  const data = getSubjectData(subject);

  const chapterId = Number(id);

  const chapter = data.chapters.find(ch => ch.id === chapterId);

  if (!chapter)
    return <h2 style={{ textAlign: "center" }}>Chapter Not Found</h2>;

  return (
    <div className="main">
      <div className="back-btn" onClick={() => navigate(-1)}>⬅ Back</div>

      <div className="chapter-selector">
        {data.chapters.map(ch => (
          <button
            key={ch.id}
            className={`chapter-btn ${ch.id === chapterId ? "active" : ""}`}
            onClick={() =>
              navigate(`/class/${classId}/${subject}/chapter/${ch.id}`)
            }
          >
            Chapter {ch.id}
          </button>
        ))}
      </div>

      <h2 className="section-title">
        {typeof chapter.title === "string"
          ? chapter.title
          : chapter.title[lang]}
      </h2>

      <div className="feature-grid">
        <Card img={img3d} title="3D Video" go="videoTopic" />
        <Card img={imgSummary} title="Summary" go="summary" />
        <Card img={imgPoints} title="Important Points" go="points" />
        <Card img={imgWords} title="Word Meanings" go="wordMeanings" />
        <Card img={imgFun} title="Fun Facts" go="funFacts" />
        <Card img={imgHistory} title="History" go="history" />
        <Card img={imgUse} title="Future & Uses" go="use" />
        <Card img={imgExamples} title="Examples" go="examples" />
      </div>
    </div>
  );

  function Card({ img, title, go }) {
    return (
      <div
        className="feature-card"
        onClick={() =>
          navigate(`/class/${classId}/${subject}/chapter/${id}/${go}`)
        }
      >
        <img src={img} />
        <h3>{title}</h3>
      </div>
    );
  }
}

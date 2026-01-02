import { useParams, useNavigate } from "react-router-dom";
import data from "../data/class5.json";

export default function DetailScreen() {

  const { id, type } = useParams();
  const navigate = useNavigate();

  const chapter = data.chapters.find(ch => ch.id == id);

  if (!chapter)
    return <h2 style={{ textAlign: "center" }}>Chapter Not Found</h2>;

  const titles = {
    videoTopic: "3D Video",
    summary: "Summary",
    points: "Important Points",
    wordMeanings: "Word Meanings",
    funFacts: "Fun Facts",
    history: "History",
    use: "Future & Uses",
    examples: "Examples"
  };

  const content = chapter[type];

  return (
    <div className="main">

      <div className="back-btn" onClick={() => navigate(`/class5/chapter/${id}`)}>
        ⬅ Back
      </div>

      <h2 className="section-title">
        {chapter.title} — {titles[type]}
      </h2>

      <div className="detail-box">
        {Array.isArray(content) ? (
          <ul>
            {content.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>

    </div>
  );
}

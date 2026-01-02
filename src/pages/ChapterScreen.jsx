import { useParams, useNavigate } from "react-router-dom";
import data from "../data/class5.json";
import img3d from "../assets/3d.png";
import imgSummary from "../assets/summary.png";
import imgPoints from "../assets/points.png";
import imgWords from "../assets/words.png";
import imgFun from "../assets/fun.png";
import imgHistory from "../assets/history.png";
import imgUse from "../assets/use.png";
import imgExamples from "../assets/examples.png";



export default function ChapterScreen() {

  const { id } = useParams();
  const navigate = useNavigate();

  const chapter = data.chapters.find(ch => ch.id == id);

  if (!chapter)
    return <h2 style={{ textAlign: "center" }}>Chapter Not Found</h2>;

  return (
    <div className="main">

      {/* Back Button */}
      <div className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </div>

      {/* Chapter Buttons */}
      <div className="chapter-selector">
        {data.chapters.map(ch => (
          <button
            key={ch.id}
            className={`chapter-btn ${ch.id == id ? "active" : ""}`}
            onClick={() => navigate(`/class5/chapter/${ch.id}`)}
          >
            Chapter {ch.id}
          </button>
        ))}
      </div>

      <h2 className="section-title">{chapter.title}</h2>

      {/* Feature Cards */}
      <div className="feature-grid">

        <div className="feature-card" onClick={() => navigate(`/class5/chapter/${id}/videoTopic`)}>
          <img src={img3d} />
          <h3>3D Video</h3>
          <p>Interactive animated learning</p>
        </div>

        <div className="feature-card" onClick={() => navigate(`/class5/chapter/${id}/summary`)}>
          <img src={imgSummary} />
          <h3>Summary</h3>
          <p>Understand chapter easily</p>
        </div>

        <div className="feature-card" onClick={() => navigate(`/class5/chapter/${id}/points`)}>
          <img src={imgPoints} />
          <h3>Important Points</h3>
          <p>Main highlights of topic</p>
        </div>

        <div className="feature-card" onClick={() => navigate(`/class5/chapter/${id}/wordMeanings`)}>
          <img src={imgWords} />
          <h3>Word Meanings</h3>
          <p>Know every meaning</p>
        </div>

        <div className="feature-card" onClick={() => navigate(`/class5/chapter/${id}/funFacts`)}>
          <img src={imgFun} />
          <h3>Fun Facts</h3>
          <p>Exciting science wonders</p>
        </div>

        <div className="feature-card" onClick={() => navigate(`/class5/chapter/${id}/history`)}>
          <img src={imgHistory} />
          <h3>History</h3>
          <p>How it all started</p>
        </div>

        <div className="feature-card" onClick={() => navigate(`/class5/chapter/${id}/use`)}>
          <img src={imgUse} />
          <h3>Future & Uses</h3>
          <p>Real life applications</p>
        </div>

        <div className="feature-card" onClick={() => navigate(`/class5/chapter/${id}/examples`)}>
          <img src={imgExamples} />
          <h3>Examples</h3>
          <p>Easy real world examples</p>
        </div>

      </div>

    </div>
  );
}

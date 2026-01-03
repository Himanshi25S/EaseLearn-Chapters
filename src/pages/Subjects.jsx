import { useNavigate, useParams } from "react-router-dom";

export default function Subjects() {
  const { classId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="back-btn" onClick={() => navigate(-1)}>⬅ Back</div>
      <h2 className="section-title">Select Subject</h2>

      <div className="feature-grid">
        <div
          className="feature-card"
          onClick={() => navigate(`/class/${classId}/evs/chapter/1`)}
        >
          <h3>EVS</h3>
        </div>

        <div
          className="feature-card"
          onClick={() => navigate(`/class/${classId}/maths/chapter/1`)}
        >
          <h3>Maths</h3>
        </div>

        <div
          className="feature-card"
          onClick={() => navigate(`/class/${classId}/hindi/chapter/1`)}
        >
          <h3>Hindi</h3>
        </div>

        <div
          className="feature-card"
          onClick={() => navigate(`/class/${classId}/english/chapter/1`)}
        >
          <h3>English</h3>
        </div>
      </div>
    </div>
  );
}

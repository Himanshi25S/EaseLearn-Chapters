import { useNavigate } from "react-router-dom";

export default function Classes() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <h2 className="section-title">Select Class</h2>

      <div className="feature-grid">
        <div
          className="feature-card"
          onClick={() => navigate("/class/4/subjects")}
        >
          <h3>Class 4</h3>
        </div>
        <div
          className="feature-card"
          onClick={() => navigate("/class/5/subjects")}
        >
          <h3>Class 5</h3>
        </div>

      </div>
    </div>
  );
}

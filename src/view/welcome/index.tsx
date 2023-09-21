import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();
  return <>
    <h1>Welcome</h1>
    <button onClick={() => navigate("/admin")}>Admin</button>
    <button onClick={() => navigate("/family")}>Family</button>
    <button onClick={() => navigate("/forbidden")}>Forbidden</button>
  </>
}

export default WelcomePage;

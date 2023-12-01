import { useNavigate } from "react-router-dom";
import Button from "../../Components/design-patterns/Button/Button";
import "./Error404.scss";

function Error404() {
  const router = useNavigate();

  return (
    <div className="error-404-page-container">
      <p className="top-text">Whoops! That page doesn’t exist.</p>
      <p className="top-sub-text">The page you requested could not be found</p>
      <Button onClick={() => router(-1)}>Back to home</Button>
    </div>
  );
}

export default Error404;

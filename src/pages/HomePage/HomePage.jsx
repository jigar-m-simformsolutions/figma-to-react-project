import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const router = useNavigate();

  useEffect(() => {
    router("/pricing");
  }, []);

  return <></>;
}

export default HomePage;

import { useEffect } from "react";
import { withLayout } from "../../Components/Layout/WithLayout/WithLayout";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const router = useNavigate();

  useEffect(() => {
    router("/pricing");
  }, []);

  return <div>Home</div>;
}

const hoc = withLayout({ shouldNavbarShow: true, shouldFooterShow: true })(
  HomePage
);

export default hoc;

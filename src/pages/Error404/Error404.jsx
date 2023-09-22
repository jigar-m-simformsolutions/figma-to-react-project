import { useNavigate } from "react-router-dom";
import { withLayout } from "../../Components/Layout/WithLayout/WithLayout";
import Button from "../../Components/design-patterns/Button/Button";
import "./Error404.scss";

function Error404() {
  const router = useNavigate();
  return (
    <div className="error__404__container">
      <p className="font-extrabold text-4xl text-center">
        Whoops! That page doesn’t exist.
      </p>
      <p className="font-extralight text-base text-center">
        The page you requested could not be found
      </p>
      <Button onClick={() => router(-1)}>Back to home</Button>
    </div>
  );
}

const hoc = withLayout({ shouldNavbarShow: false, shouldFooterShow: false })(
  Error404
);

export default hoc;

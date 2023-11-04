import { withLayout } from "../../Components/Layout/WithLayout/WithLayout";

function HomePage() {
  return <div>Home</div>;
}

const hoc = withLayout({ shouldNavbarShow: true, shouldFooterShow: true })(
  HomePage
);

export default hoc;

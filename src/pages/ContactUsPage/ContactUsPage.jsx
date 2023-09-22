import { withLayout } from "../../Components/Layout/WithLayout/WithLayout";

function ContactUsPage() {
  return <div>ContactUs</div>;
}

const hoc = withLayout({ shouldNavbarShow: true, shouldFooterShow: true })(
  ContactUsPage
);
export default hoc;

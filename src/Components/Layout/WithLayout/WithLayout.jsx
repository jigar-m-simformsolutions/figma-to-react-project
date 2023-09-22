import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./withLayout.scss";

export const withLayout = (props) => (Component) => {
  return function WithLayout() {
    const { shouldNavbarShow = true, shouldFooterShow = true } = props;

    return (
      <div className="layout__container">
        {shouldNavbarShow && <Navbar />}
        <main>
          <Component {...props} />
        </main>
        {shouldFooterShow && <Footer />}
      </div>
    );
  };
};

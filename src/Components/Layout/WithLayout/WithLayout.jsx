import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export const withLayout = (props) => (Component) => {
  return function WithLayout() {
    const { shouldNavbarShow = true, shouldFooterShow = true } = props;

    return (
      <div>
        {shouldNavbarShow && <Navbar />}
        <main>
          <Component {...props} />
        </main>
        {shouldFooterShow && <Footer />}
      </div>
    );
  };
};

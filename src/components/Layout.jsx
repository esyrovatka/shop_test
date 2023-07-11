import PropTypes from "prop-types";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;

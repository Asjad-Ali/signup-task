import logo from "../assets/images/logo.webp"; // Import the logo
import "../assets/css/loader.css"; // Import the CSS file

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="logo-loader">
        <img src={logo} alt="Loading..." className="logo" />
      </div>
    </div>
  );
};

export default Loader;

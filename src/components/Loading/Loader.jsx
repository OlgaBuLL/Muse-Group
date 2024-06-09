import logo from "../../assets/images/icons/logo.svg";

export default function Loader() {
  return (
    <div className="loading">
      <div className="loading__content">
        <img className="loading__logo" src={logo} alt="Logo" />
        <div className="loading__loader">
          <div className="loading__dot" id="d1"></div>
          <div className="loading__dot" id="d2"></div>
          <div className="loading__dot" id="d3"></div>
          <div className="loading__dot" id="d4"></div>
          <div className="loading__dot" id="d5"></div>
        </div>
      </div>
    </div>
  );
}

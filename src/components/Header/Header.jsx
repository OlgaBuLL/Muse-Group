import logo from "../../assets/images/icons/logo.svg";
import "../../assets/styles/style.sass";

export default function Header() {
  return (
    <header className="header section">
      <div className="content">
        <div className="header__container container">
          <img src={logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
}

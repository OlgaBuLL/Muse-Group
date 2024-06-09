import "../../assets/styles/style.sass";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="footer__container container">
          <div className="footer__links">
            <a
              className="footer__link body-small"
              href="https://support.animaapp.com/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Help Center
            </a>
            <a
              className="footer__link body-small"
              href="https://forum.animaapp.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              className="footer__link body-small"
              href="https://forum.animaapp.com/tos"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

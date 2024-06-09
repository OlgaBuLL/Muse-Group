export default function Contacts() {
  return (
    <section className="contacts">
      <div className="content">
        <div className="contacts__container container">
          <div className="contacts__info">
            <div className="contacts__socials">
              <a
                href="https://www.instagram.com/wearemusegroup/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="icon">
                  <use xlinkHref="/src/assets/images/icons/sprite.svg#icon-instagram"></use>
                </svg>
              </a>

              <svg className="icon">
                <use xlinkHref="/src/assets/images/icons/sprite.svg#icon-telegram"></use>
              </svg>

              <a
                href="https://www.linkedin.com/company/muse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="icon">
                  <use xlinkHref="/src/assets/images/icons/sprite.svg#icon-linked-in"></use>
                </svg>
              </a>

              <a
                href="https://www.facebook.com/Museteamofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="icon">
                  <use xlinkHref="/src/assets/images/icons/sprite.svg#icon-facebook"></use>
                </svg>
              </a>
            </div>
            <p className="contacts__text body-standard">
              You're not just a student - you're part of a vibrant community of
              like-minded individuals united by a passion for frontend
              development. Collaborate, innovate, and grow alongside fellow
              learners and industry professionals as you embark on this exciting
              journey together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

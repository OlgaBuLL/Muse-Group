import IconInstagram from "/src/assets/images/icons/icon-instagram.svg?react";
import IconTelegram from "/src/assets/images/icons/icon-telegram.svg?react";
import IconLinkedIn from "/src/assets/images/icons/icon-linkedin.svg?react";
import IconFacebook from "/src/assets/images/icons/icon-facebook.svg?react";

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
                <IconInstagram className="icon" />
              </a>

              <IconTelegram className="icon" />

              <a
                href="https://www.linkedin.com/company/muse/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconLinkedIn className="icon" />
              </a>

              <a
                href="https://www.facebook.com/Museteamofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconFacebook className="icon" />
              </a>
            </div>
            <p className="contacts__text body-standard">
              You&apos;re not just a student - you&apos;re part of a vibrant
              community of like-minded individuals united by a passion for
              frontend development. Collaborate, innovate, and grow alongside
              fellow learners and industry professionals as you embark on this
              exciting journey together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

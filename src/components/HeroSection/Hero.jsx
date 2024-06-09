import { useState } from "react";
import CustomButton from "../UI/Button/CustomButton";
import CustomInput from "../UI/Input/CustomInput";
import ArrowRight from "../UI/ArrowRight/ArrowRight";
import image from "../../assets/images/image.png";

import "../../assets/styles/style.sass";

export default function Hero() {
  const arrowRight = ArrowRight();

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleInputChange = (event) => {
    console.log(event.target.value);

    setEmail(event.target.value);
    setIsEmailValid(
      /^[^а-яА-ЯёЁ\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value)
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");

    if (!email.trim()) {
      alert("❌Email cannot be empty");
      return;
    }

    if (!isEmailValid) {
      alert("❌Email is invalid");
      return;
    } else {
      setEmail("");
      alert("🎵 Welcome to the team!");
    }
  };

  return (
    <section className="hero">
      <div className="content">
        <div className="hero__container container">
          <h1 className="hero__title h1-title">Muse Group Frontend Academy</h1>
          <p className="hero__subtitle body-large">
            Our academy offers a transformative learning experience designed to
            empower you with the skills and knowledge needed to succeed in the
            ever-evolving field of frontend development.
          </p>
          <div className="hero__image">
            <img src={image} alt="Man playing the guitar" />
          </div>
          <p className="hero__text body-standard">
            Are you ready to turn your passion for technology into a thriving
            career?
          </p>
          <form className="hero__form" onSubmit={handleSubmit}>
            <CustomInput
              className="hero__input"
              type="text"
              value={email}
              name={email}
              id="email"
              placeholder="Email"
              onChange={handleInputChange}
            />
            <CustomButton
              type="button"
              text="Join"
              icon={arrowRight}
              onSubmit={handleSubmit}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

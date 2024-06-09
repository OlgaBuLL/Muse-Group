import ArrowFlat from "../UI/ArrowFlat/ArrowFlat";

export default function Card({ title, text, link }) {
  return (
    <div className="card">
      <div className="card__color"></div>
      <div className="card__info">
        <div>
          <h4 className="card__title h4-title">{title}</h4>
          <p className="card__text body-large">{text}</p>
        </div>
        <a
          className="card__link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Read more</span>
          <ArrowFlat />
        </a>
      </div>
    </div>
  );
}

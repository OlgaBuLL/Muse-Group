import Card from "../Card/Card";

const cards = [
  {
    title: "Ultimate Guitar",
    text: "The best platform for music makers to play songs they love. Home to the world's largest music community.",
    link: "https://www.mu.se/ultimate-guitar",
  },
  {
    title: "MuseScore",
    text: "Create, play back, and print sheet music with free open source notation software.",
    link: "https://www.mu.se/musescore",
  },
  {
    title: "audio.com",
    text: "The easiest way to share any sound online.",
    link: "https://www.mu.se/audio",
  },
  {
    title: "Audacity",
    text: "The world's most popular audio editing and recording app.",
    link: "https://www.mu.se/audacity",
  },
];

export default function OurProducts() {
  return (
    <section className="products">
      <div className="content">
        <div className="products__container  container">
          <h2 className="products__title h2-title">Our products</h2>
          <div className="products__cards-container">
            {cards.map((card, i) => (
              <Card
                key={i}
                title={card.title}
                text={card.text}
                link={card.link}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

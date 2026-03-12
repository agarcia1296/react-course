import { NewsWidget } from "../../components/NewsWidget";
import "./HomePage.css";

export function NewsSection() {
  return (
    <section>
      <h2>News Articles</h2>

      <div className="news-grid">
        <NewsWidget
          image="images/news/Grammy-Awards.jpg"
          title="Grammy Awards Highlights"
          description="Catch up on the biggest moments from this year's Grammy Awards."
          link="/news/grammy-awards"
        />
        <NewsWidget
          image="/images/news/pitchforks-albumns-of-the-year.jpg"
          title="Top Albums of 2025"
          description="The best albums that dominated the charts in 2025."
          link="/news/top-albums"
        />

        <NewsWidget
          image="/images/news/indie-artist.jpg"
          title="Indie Artists Rising"
          description="Independent artists that are reshaping the music industry."
          link="/news/indie"
        />
      </div>
    </section>
  );
}

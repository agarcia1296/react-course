import { useState } from "react";
import "./Carousel.css";

export function Carousel({ children, itemsPerPage = 5 }) {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(children.length / itemsPerPage);

  const itemWidth = 100 / itemsPerPage;

  return (
    <div className="carousel-container">
      <button
        className="new-release-arrow left"
        onClick={() => setPage(Math.max(page - 1, 0))}
      >
        ←
      </button>

      <div className="carousel-window">
        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${page * 100}%)`,
          }}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="carousel-item"
              style={{ minWidth: `${itemWidth}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        className="new-release-arrow right"
        onClick={() => setPage(Math.min(page + 1, totalPages - 1))}
      >
        →
      </button>
    </div>
  );
}

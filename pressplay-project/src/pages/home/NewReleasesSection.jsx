import { useState } from "react";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Carousel } from "../../components/Carousel/Carousel";

export function NewReleasesSection({ newReleases }) {
  const itemsPerPage = 5;
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(newReleases.length / itemsPerPage);

  const nextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <h2>New Releases</h2>
      <Carousel>
        {newReleases.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Carousel>
    </>
  );
}

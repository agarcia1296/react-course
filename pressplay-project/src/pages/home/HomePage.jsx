import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { NavbarMenu } from "../../components/NavbarMenu";
import { NewsSection } from "./NewsSection";
import { ProductsGrid } from "./ProductsGrid";
import { NewReleasesSection } from "./NewReleasesSection";
import { HelpfulLinks } from "../../components/HelpfulLinks";
import "./HomePage.css";

export function HomePage({ cart, loadCart }) {
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    const getNewReleaseData = async () => {
      const response = await axios.get("/api/products/new-releases");
      setNewReleases(response.data);
    };

    getNewReleaseData();
  }, []);

  return (
    <>
      <title>PressPlay Marketplace</title>
      <link rel="icon" type="image/svg+xml" href="pressplay-home.svg" />

      <Header cart={cart} />
      <NavbarMenu />

      <div className="home-page">
        <NewsSection />
        <NewReleasesSection newReleases={newReleases} />
      </div>
      <HelpfulLinks />
    </>
  );
}

import React from "react";
import { Hero } from "../../models/hero";
import "./FeaturedHero.scss";

interface FeaturedHeroProps {
  hero: Hero;
}

const FeaturedHero: React.FC<FeaturedHeroProps> = ({ hero }) => {
  return (
    <div className="card featured-hero">
      <div className="card-body">
        <h2 className="card-title text-center">{hero.name}</h2>
      </div>
    </div>
  );
};

export default FeaturedHero;

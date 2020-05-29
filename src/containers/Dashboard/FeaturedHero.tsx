import React from "react";
import { Hero } from "../../models/hero";
import "./FeaturedHero.scss";
import { useHistory } from "react-router-dom";

interface FeaturedHeroProps {
  hero: Hero;
}

const FeaturedHero: React.FC<FeaturedHeroProps> = ({ hero }) => {
  const history = useHistory();

  return (
    <div
      className="card featured-hero"
      onClick={() => history.push(`/heroes/${hero.id}`)}
    >
      <div className="card-body">
        <h2 className="card-title text-center">{hero.name}</h2>
      </div>
    </div>
  );
};

export default FeaturedHero;

import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "../../models/hero";

const HeroListItem: React.FC<{ hero: Hero }> = ({ hero }) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
      to={`/heroes/${hero.id}`}
      className="list-group-item list-group-item-action"
    >
      <span className="badge badge-light">{hero.id}</span>
      {hero.name}
    </Link>
  );
};

export default HeroListItem;

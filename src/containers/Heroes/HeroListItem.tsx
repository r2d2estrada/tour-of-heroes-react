import React from "react";
import { Hero } from "../../models/hero";

const HeroListItem: React.FC<{ hero: Hero }> = ({ hero }) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className="list-group-item list-group-item-action">
      <span className="badge badge-light">{hero.id}</span>
      {hero.name}
    </a>
  );
};

export default HeroListItem;

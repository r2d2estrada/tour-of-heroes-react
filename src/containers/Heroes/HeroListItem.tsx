import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "../../models/hero";

interface HeroListItemProps {
  hero: Hero;
  removeHero: any;
}

const HeroListItem: React.FC<HeroListItemProps> = ({ hero, removeHero }) => {
  return (
    <Link
      to={`/heroes/${hero.id}`}
      className="list-group-item list-group-item-action"
    >
      <div className="row">
        <div className="col-2">
          <span className="badge badge-light">{hero.id}</span>
        </div>
        <div className="col-7">{hero.name}</div>
        <div className="col-3">
          <button
            id={`${hero.id}`}
            className="btn btn-danger"
            style={{ zIndex: 2 }}
            onClick={removeHero}
          >
            Remove
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HeroListItem;

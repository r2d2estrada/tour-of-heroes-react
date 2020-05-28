import React from "react";
import { Hero } from "../../models/hero";
import HeroListItem from "./HeroListItem";

const HeroList: React.FC<{ heroes: Hero[] }> = ({ heroes }) => {
  return (
    <div className="hero-list list-group">
      {heroes.map((hero) => (
        <HeroListItem key={hero.id} hero={hero} />
      ))}
    </div>
  );
};

export default HeroList;

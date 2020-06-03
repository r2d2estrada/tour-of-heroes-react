import React, { SyntheticEvent } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Hero } from "../../models/hero";
import HeroListItem from "./HeroListItem";
import { removeHeroAction } from "../../redux/actions/hero.actions";

interface HeroListProps {
  heroes: Hero[];
  removeHero?: any;
}

const HeroList: React.FC<HeroListProps> = ({ heroes, removeHero }) => {
  const removeItem = (event: SyntheticEvent | any) => {
    event.preventDefault();
    const { id } = event.target;
    removeHero(+id).subscribe({
      next: () => {
        toast.success("Hero Removed");
      },
      error: () => {
        toast.error("Oooooops");
      },
    });
  };

  return (
    <div className="hero-list list-group">
      {heroes.map((hero) => (
        <HeroListItem key={hero.id} hero={hero} removeHero={removeItem} />
      ))}
    </div>
  );
};

const mapDispatchToProps = {
  removeHero: removeHeroAction,
};

export default connect(undefined, mapDispatchToProps)(HeroList);

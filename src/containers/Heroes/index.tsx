import React, { useEffect } from "react";
import { connect } from "react-redux";
import { State } from "../../redux";
import { Hero } from "../../models/hero";
import { getHeroesAction } from "../../redux/actions/hero.actions";
import HeroList from "./HeroList";

interface HeroesProps {
  getHeroes: any;
  heroes: Hero[];
}

const Heroes: React.FC<HeroesProps> = ({ getHeroes, heroes }) => {
  useEffect(() => {
    if (heroes.length === 0) {
      getHeroes();
    }
  }, [getHeroes, heroes]);

  return (
    <div className="heroes">
      <h2>Heroes</h2>
      <hr />
      <HeroList heroes={heroes} />
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  heroes: state.heroes,
});

const mapDispatchToProps = {
  getHeroes: getHeroesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);

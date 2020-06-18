import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { State } from "../../redux";
import { getHeroesAction } from "../../redux/actions/hero.actions";
import { Hero } from "../../models/hero";
import { Observable } from "rxjs";
import FeaturedHero from "./FeaturedHero";
import Messages from "../../components/Messages";
import { useDocumentTitle } from "../../utils/hooks";
import HeroSearch from "../../components/HeroSearch";

interface DashboardProps {
  heroes: Hero[] | any;
  getHeroes: Observable<Hero[]> | any;
}

export const Dashboard: React.FC<DashboardProps> = ({ heroes, getHeroes }) => {
  const [featuredHeroes, setFeaturedHeroes] = useState([]);

  useDocumentTitle("Dashboard");

  useEffect(() => {
    if (heroes.length === 0) getHeroes();
    else {
      setFeaturedHeroes(heroes.slice(1, 5));
    }
  }, [getHeroes, heroes]);

  return (
    <div className="Dashboard">
      <div className="row">
        <div className="col-md-12">
          <h2>Featured Heroes</h2>
        </div>
      </div>
      <hr />
      <div className="row">
        {featuredHeroes.map((hero: Hero) => (
          <div key={hero.id} className="col-md-3">
            <FeaturedHero hero={hero} />
          </div>
        ))}
      </div>
      <div className="mt-3">
        <HeroSearch heroes={heroes} />
      </div>
      <div className="mt-3">
        <Messages />
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  heroes: state.heroes,
});

const mapDispatchToProps = {
  getHeroes: getHeroesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { State } from "../../redux";
import { Hero } from "../../models/hero";
import { getHeroesAction } from "../../redux/actions/hero.actions";
import HeroList from "./HeroList";
import { useDocumentTitle } from "../../utils/hooks";
import Messages from "../../components/Messages";
import HeroListAddHero from "./HeroListAddHero";

interface HeroesProps {
  getHeroes: any;
  heroes: Hero[];
  removeHero?: any;
}

const Heroes: React.FC<HeroesProps> = ({ getHeroes, heroes, removeHero }) => {
  const [showAddModal, setShowAddModal] = useState(false);

  useDocumentTitle("Hero List");

  useEffect(() => {
    if (heroes.length === 0) {
      getHeroes();
    }
  }, [getHeroes, heroes]);

  const toggleModal = (show: boolean = false): void => {
    setShowAddModal(show);
  };

  return (
    <div className="heroes">
      <div className="row">
        <div className="col">
          <h2>Heroes</h2>
        </div>
        <div className="col text-right">
          <button className="btn btn-success" onClick={() => toggleModal(true)}>
            Add Hero
          </button>
          <HeroListAddHero toggleModal={toggleModal} showModal={showAddModal} />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col">
          <HeroList heroes={heroes} />
        </div>
        <div className="col">
          <Messages />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { State } from "../../redux";
import { Hero } from "../../models/hero";
import { getHeroesAction } from "../../redux/actions/hero.actions";
import HeroList from "./HeroList";
import { useDocumentTitle } from "../../utils/hooks";
import Messages from "../../components/Messages";
import HeroListAddHero from "./HeroListAddHero";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

interface HeroesProps {
  getHeroes: any;
  heroes: Hero[];
}

const Heroes: React.FC<HeroesProps> = ({ getHeroes, heroes }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const unsubscribe$ = new Subject<void>();

  useDocumentTitle("Hero List");

  useEffect(() => {
    if (heroes.length === 0) {
      getHeroes().pipe(takeUntil(unsubscribe$)).subscribe();
    }
    return function cleanup() {
      unsubscribe$.next();
      unsubscribe$.complete();
    };
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

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, SyntheticEvent } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Hero } from "../../models/hero";
import { State } from "../../redux";
import {
  getSelectedHeroAction,
  modifyHeroAction,
} from "../../redux/actions/hero.actions";
import HeroDetailCard from "./HeroDetailCard";
import { useDocumentTitle } from "../../utils/hooks";
import Messages from "../../components/Messages";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

interface HeroDetailProps {
  selectedHero: Hero | null;
  getSelectedHero: any;
  modifyHero: any;
}

const HeroDetail: React.FC<HeroDetailProps> = ({
  selectedHero,
  getSelectedHero,
  modifyHero,
}) => {
  const { id } = useParams();
  const [hero, setHero]: Hero | any = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const unsubscribe$ = new Subject<void>();

  useDocumentTitle(hero ? hero.name : "hero Detail");

  useEffect(() => {
    if (selectedHero === null || (selectedHero && selectedHero.id !== +id)) {
      getSelectedHero(+id)
        .pipe(takeUntil(unsubscribe$))
        .subscribe();
    }
    setHero(selectedHero);
    return function cleanup() {
      unsubscribe$.next();
      unsubscribe$.complete();
    };
  }, [selectedHero, getSelectedHero, id]);

  const handleChange = (event: SyntheticEvent | any): void => {
    const { name, value } = event.target;
    setHero({ ...hero, [name]: value });
  };

  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    setIsUpdating(true);
    modifyHero(hero).subscribe({
      next: () => {
        toast.success("Hero updated!");
        setIsUpdating(false);
      },
      error: () => {
        toast.error("Oooops!");
        setIsUpdating(false);
      },
    });
  };

  return (
    <div className="hero-detail">
      {hero && (
        <>
          <h2>Details for {hero.name}</h2>
          <hr />
          <HeroDetailCard
            hero={hero}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isUpdating={isUpdating}
          />
        </>
      )}
      <div className="mt-3">
        <Messages />
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  selectedHero: state.selectedHero,
});

const mapDispatchToProps = {
  getSelectedHero: getSelectedHeroAction,
  modifyHero: modifyHeroAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail);

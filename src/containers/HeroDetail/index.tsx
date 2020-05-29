import React, { useEffect, useState, SyntheticEvent } from "react";
import { connect } from "react-redux";
import { Hero } from "../../models/hero";
import { State } from "../../redux";
import { useParams } from "react-router-dom";
import { getSelectedHeroAction } from "../../redux/actions/hero.actions";
import HeroDetailCard from "./HeroDetailCard";
import { useDocumentTitle } from "../../utils/hooks";
import Messages from "../../components/Messages";

interface HeroDetailProps {
  selectedHero: Hero | null;
  getSelectedHero: any;
}

const HeroDetail: React.FC<HeroDetailProps> = ({
  selectedHero,
  getSelectedHero,
}) => {
  const { id } = useParams();
  const [hero, setHero]: Hero | any = useState(null);

  useDocumentTitle(hero ? hero.name : "hero Detail");

  useEffect(() => {
    if (selectedHero === null || (selectedHero && selectedHero.id !== +id)) {
      getSelectedHero(+id);
    }
    setHero(selectedHero);
  }, [selectedHero, getSelectedHero, id]);

  const handleChange = (event: SyntheticEvent | any): void => {
    const { name, value } = event.target;
    setHero({ ...hero, [name]: value });
  };

  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
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
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail);

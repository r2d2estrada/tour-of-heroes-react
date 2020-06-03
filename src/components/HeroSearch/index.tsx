import React, { SyntheticEvent, useState } from "react";
import Autocomplete from "react-autocomplete";
import { Link, useHistory } from "react-router-dom";
import { Hero } from "../../models/hero";
import "./HeroSearch.scss";

const HeroSearch: React.FC<{ heroes: Hero[] }> = ({ heroes }) => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(heroes);

  const onChange = (event: SyntheticEvent | any): void => {
    const { value } = event.target;
    setSearch(value);
    setSearchResult(
      heroes.filter(
        (hero) =>
          hero.name.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1
      )
    );
  };

  const onSelect = (val: any): void => {
    setSearch(val);
    const selectedHero = heroes.find((hero) => hero.name === val);
    history.push(`/heroes/${selectedHero?.id}`);
  };

  return (
    <div className="card hero-search">
      <div className="card-header">
        <h4>HeroSearch</h4>
      </div>
      <div className="card-body">
        <Autocomplete
          getItemValue={(hero: Hero) => hero.name}
          items={searchResult}
          renderItem={(hero: Hero, highlighted: boolean) => (
            <div
              key={hero.id}
              className="hero-search-item"
              style={{ borderBottom: "1px solid lightgray" }}
            >
              <Link
                to={`/heroes/${hero.id}`}
                style={{
                  padding: "1rem",
                  display: "block",
                  textDecoration: "none",
                  background: highlighted ? "#eee" : "transparent",
                }}
              >
                {hero.name}
              </Link>
            </div>
          )}
          value={search}
          onChange={onChange}
          onSelect={onSelect}
          menuStyle={{
            zIndex: 2,
            marginTop: 4,
            border: "1px solid lightgray",
            borderRadius: 2,
            boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
            background: "rgba(255, 255, 255)",
            fontSize: "90%",
            position: "fixed",
            overflow: "auto",
            maxHeight: "50%",
          }}
        />
      </div>
    </div>
  );
};

export default HeroSearch;

import React from "react";
import { Hero } from "../../models/hero";
import { useHistory } from "react-router-dom";

interface HeroDetailCardProps {
  hero: Hero;
  handleChange: any;
  handleSubmit: any;
  isUpdating: boolean;
}

const HeroDetailCard: React.FC<HeroDetailCardProps> = ({
  hero,
  handleChange,
  handleSubmit,
  isUpdating,
}) => {
  const history = useHistory();

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="form-inline">
            <div className="form-group">
              <label htmlFor="hero-id">ID:</label>
              <span className="text-muted ml-3">{hero.id}</span>
            </div>
            <div className="form-group ml-3">
              <label htmlFor="hero-name">NAME:</label>
              <input
                name="name"
                type="text"
                className="form-control ml-3"
                id="hero-name"
                value={hero.name}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="card-footer text-right">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => history.goBack()}
          >
            Back
          </button>
          <button
            type="submit"
            className="btn btn-primary ml-3"
            disabled={isUpdating}
          >
            {isUpdating ? "Saving..." : "SAVE"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroDetailCard;

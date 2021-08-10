import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.module.css";
import charizard from "../img-folder/charizard.gif";
import ivysaur from "../img-folder/ivysaur.gif";

const Home = () => {
  return (
    <div>
      <div className="text-center">
        <section className="section">
          <h1 className="welcome-tittle">Welcome to PokéApp</h1>
          <div className="pokemons-gif">
            <img className="charizard" src={charizard} alt="POKEMON" />
            <span className="button-text-controller">
              <NavLink
                className="home-button"
                to="/pokemons"
                activeClassName="navActive"
              >
                Find pokemons
              </NavLink>
            </span>
            <img className="ivysaur" src={ivysaur} alt="POKEMON" />
          </div>
        </section>
        <footer className="text-muted">
          <strong className="footer">Talos Digital</strong>
        </footer>
      </div>
    </div>
  );
};

export default Home;

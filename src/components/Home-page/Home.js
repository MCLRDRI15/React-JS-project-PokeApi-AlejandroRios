import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.module.css";
import Charizard from "../img-folder/Charizard.gif";
import Ivysaur from "../img-folder/ivysaur.gif";

const Home = () => {
  return (
    <div>
      <div className="text-center">
        <section className="section">
          <h1 className="welcome-tittle">Welcome to PokéApp</h1>
          <div className="pokemons-gif">
            <img className="charizard" src={Charizard} alt="POKEMON" />
            <NavLink
              className="home-button"
              to="/pokemons"
              activeClassName="navActive"
            >
              Find pokemons
            </NavLink>
            <img className="ivysaur" src={Ivysaur} alt="POKEMON" />
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

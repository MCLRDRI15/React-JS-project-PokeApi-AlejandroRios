import React from "react";
import { NavLink } from "react-router-dom";
import charizard from "../img-folder/charizard.gif";
import ivysaur  from "../img-folder/ivysaur.gif";
import Form from "../input-form-component/Form"

const Home = () => {
  return (
    <div>
      <Form isSeachActive={false} isHamburguerActive={false}/>
      <div className="text-center">
        <section className="flex flex-col items-center">
          <h1 className="text-center mt-16 mb-6 text-4xl font-extrabold text-white">Welcome to PokéApp</h1>
          <div className="m-auto laptop:mb-20 w-11/12 grid grid-col-full gap-6 laptop:grid-cols-gifs items-center">
            <img className="m-auto w-48 laptop:ml-8 mobile:w-72 h-auto" src={charizard} alt="POKEMON" />
            <span className="m-auto w-11/12 mobile:w-72 h-12 rounded-xl bg-blue-BlueButtonColor text-center hover:text-blue-BlueButtonColor hover-bg-white">
              <NavLink
                className="relative w-11/12 top-3 no-underline m-auto text-center border-none text-white font-extrabold"
                to="/pokemons"
                activeClassName="nav-active"
              >
                Find pokemons
              </NavLink>
            </span>
            <img className="m-auto mb-4 w-48 laptop:ml-8 mobile:w-72 h-auto" src={ivysaur} alt="POKEMON" />
          </div>
        </section>
        <footer className="mt-24 text-center">
          <strong className="footer">Talos Digital</strong>
        </footer>
      </div>
    </div>
  );
};

export default Home;

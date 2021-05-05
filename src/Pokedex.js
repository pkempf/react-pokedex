import Pokecard from "./Pokecard";
import defaultPokemon from "./defaultPokemon";
import "./Pokedex.css";

const Pokedex = ({ pokemon = defaultPokemon }) => {
  return (
    <div className="Pokedex">
      <h1 className="Pokedex-header">Pokedex</h1>
      <div className="Pokedex-body">
        {pokemon.map((p) => (
          <Pokecard
            id={p.id}
            name={p.name}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;

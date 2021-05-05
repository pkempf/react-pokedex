import "./Pokecard.css";

const Pokecard = (props) => {
  const imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  return (
    <div className="Pokecard">
      <p className="Pokecard-name">{props.name}</p>
      <img className="Pokecard-sprite" src={imgSrc} />
      <p className="Pokecard-type">Type: {props.type}</p>
      <p className="Pokecard-exp">EXP: {props.exp}</p>
    </div>
  );
};

export default Pokecard;

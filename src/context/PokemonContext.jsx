import { useState, createContext } from "react";

const defaultContext = {
  pokemonData: [],
  showModal: false,
  setShowModal: () => [],
  setPokemonData: () => [],
};

export const PokemonContext = createContext(defaultContext);

export const PokemonContextProvider = ({ children }) => {
  const [showModal, setToggle] = useState(false);

  const [pokemonData, setPokemonData] = useState([]);

  const setShowModal = (toggle) => {
    setToggle(toggle);
  };

  const contextValue = {
    showModal,
    setShowModal,
    pokemonData,
    setPokemonData,
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;

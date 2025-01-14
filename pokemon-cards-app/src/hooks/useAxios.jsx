import React, {useState} from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

//if isPokemon is false, will call the Deck of Cards API. If true, will call the Pokemon API.
const useAxios = (isPokemon, initialValue = []) => {
  const [cards, setCards] = useState(initialValue);
  const BASE_URL = isPokemon ? `https://pokeapi.co/api/v2/pokemon/` : "https://deckofcardsapi.com/api/deck/new/draw/";

  const addCard = async (pokemonName = "") => {
    const url = isPokemon ? BASE_URL + `${pokemonName}/` : BASE_URL;
    const response = await axios.get(url);
    setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  };

  return [cards, addCard];
};

export default useAxios;
import React, {useState} from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";
import useLocalStorage from "./useLocalStorage.jsx";

//if isPokemon is false, will call the Deck of Cards API. If true, will call the Pokemon API.
const useAxios = (isPokemon, initialValue = []) => {
  const localStorageKey = isPokemon ? "pokemonCards" : "playingCards";
  const [cards, setCards] = useLocalStorage(localStorageKey, initialValue);
  const BASE_URL = isPokemon ? `https://pokeapi.co/api/v2/pokemon/` : "https://deckofcardsapi.com/api/deck/new/draw/";

  const addCard = async (pokemonName = "") => {
    const url = isPokemon ? BASE_URL + `${pokemonName}/` : BASE_URL;
    const response = await axios.get(url);
    setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  };

  const clearCards = () => {
    setCards(initialValue);
  };

  return [cards, addCard, clearCards];
};

export default useAxios;
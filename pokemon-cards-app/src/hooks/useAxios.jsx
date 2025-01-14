import React, {useState} from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

const useAxios = (initialValue = []) => {
  const [cards, setCards] = useState(initialValue);
  const addCard = async () => {
    const response = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/draw/"
    );
    setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  };

  return [cards, addCard];
};

export default useAxios;
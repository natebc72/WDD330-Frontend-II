import {quickSearch, quickCity} from "./weather";
import Cards from "./cards";

const savedCards = new Cards('savedCities')

window.addEventListener('load', () => {
    savedCards.buildKingdoms();
    quickSearch();
  });
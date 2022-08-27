import { boatInventory } from "./fishingBoat.js";

export const mongerInventory = () => {
  //buys 10 of each inexpensive fish, if less than ten, the fishmonger doesn't buy any.
  let inventory = boatInventory().filter((obj) => obj.amount > 10);
  //the fishh monger doesn't buy any fish priced higher than $7.50
  let filteredPrice = inventory.filter((obj) => obj.price < 7.5);

  //the fishmonger lets the chef of a restaureant dictate max budget per fish
  let chefChoice = filteredPrice.filter((obj) => obj.price < 5);
  //each fish object provided by the fishmonger should have a quantity of 10 instead
  chefChoice.forEach((obj) => (obj.amount = 10));
  return chefChoice;
};

// console.log(mongerInventory());

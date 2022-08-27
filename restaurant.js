import { mongerInventory } from "./fishMonger.js";

// 1. Each day, the chef visits the monger and specifies the maximum price she is able to spedn per fish.
// 2. If the monger has any fish at that price point or less, the chef buys 50% of the existing inventory.
// 3. The chef then creates 3 different meals per fish - a soup, a grilled dinner, and sandwich. For example, if tuna was bought, the following meals will be on the menu.
//     - Tuna Soup
//     - Tuna Sandwich
//     - Grilled Tuna
// 4. Your HTML structure must match the example below. Use the same elements and the same class names.

//ALGORITHM: Iterate over mongerInventory.
//filter data to meet criteria: if fish <= x, buy 50% of existing inventory.
//put data in html section of website
const fishMenu = () => {
  let chefPrice = 5.5;
  let htmlSection = `<h1>Menu</h1><article class="menu">`;
  const fishInventory = mongerInventory();
  for (const fish of fishInventory) {
    htmlSection += `
        <h2>${fish.species}</h2>
        <section class="menu__item">${fish.species} Soup</section>
        <section class="menu__item">${fish.species} Sandwich</section>
        <section class="menu__item">Grilled ${fish.species}</section>`;
  }
  htmlSection += `</article>`;
  console.log(htmlSection);
  document.getElementById("fishMenu").innerHTML = htmlSection;
};
fishMenu();

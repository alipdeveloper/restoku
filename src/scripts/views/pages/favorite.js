import { createRestoItemTemplate } from "../templates/template-creator";
import FavoriteResoIDB from "../../data/favoriteresto-idb";

const Favorite = {
  async render() {
    return `
    <div id="query"> 
      <h2>
        <span class="title-content">Restoran Favorit</span>
      </h2>

      <div id="resto-list" class="row"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteResoIDB.getAllRestaurants();
    const restaurantsContainer = document.querySelector("#resto-list");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Favorite;

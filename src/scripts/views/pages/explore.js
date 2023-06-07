import { createRestoItemTemplate } from "../templates/template-creator";
import RestaurantSource from "../../data/resto-source";

const Explore = {
  async render() {
    return `
      <h2><span class="title-content">Find Restaurant</span></h2>
      <div class="row" id="resto-list"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getResto();
    const restaurantsContainer = document.querySelector("#resto-list");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Explore;

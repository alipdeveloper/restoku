import FavoriteRestaurantDB from "../data/favoriteresto-idb";
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from "../views/templates/template-like";

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isResgetRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isResgetRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantDB.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const LikeButton = document.querySelector("#likeButton");
    LikeButton.addEventListener("click", async () => {
      await FavoriteRestaurantDB.putRestaurant(this._restaurant);
      await this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const LikeButton = document.querySelector("#likeButton");
    LikeButton.addEventListener("click", async () => {
      await FavoriteRestaurantDB.deleteRestaurant(this._restaurant.id);
      await this._renderButton();
    });
  },
};

export default LikeButtonInitiator;

/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";
import FavoriteResoIDB from "../../src/scripts/data/favoriteresto-idb";

const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteResto: FavoriteResoIDB,
    restaurant,
  });
};

export { createLikeButtonPresenterWithResto };

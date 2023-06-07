import { itActsAsFavoriteRestoModel } from "./contract/favoriteRestoContract";
import FavoriteResoIDB from "../src/scripts/data/favoriteresto-idb";

describe("Menguji Favorite Resto Idb Contract", () => {
  afterEach(async () => {
    (await FavoriteResoIDB.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteResoIDB.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteResoIDB);
});

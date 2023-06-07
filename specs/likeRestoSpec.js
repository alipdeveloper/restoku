import FavoriteResoIDB from "../src/scripts/data/favoriteresto-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Liking A Resto", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("harus menunjukkan tombol suka ketika film belum disukai sebelumnya", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this resto"]')
    ).toBeTruthy();
  });

  it("tidak boleh menampilkan tombol unlike ketika film tersebut belum di like sebelumnya", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this resto"]')
    ).toBeFalsy();
  });

  it("harus bisa menyukai film", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const restaurant = await FavoriteResoIDB.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteResoIDB.deleteRestaurant(1);
  });

  it("sebaiknya tidak menambah film lagi ketika sudah di like", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteResoIDB.putRestaurant({ id: 1 });
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    expect(await FavoriteResoIDB.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteResoIDB.deleteRestaurant(1);
  });

  it("tidak boleh menambahkan film ketika tidak memiliki id", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriteResoIDB.getAllRestaurants()).toEqual([]);
  });
});

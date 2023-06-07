import FavoriteResoIDB from "../src/scripts/data/favoriteresto-idb";
import * as TestFactories from "./helpers/testFactories";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe("Unliking A Resto", () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteResoIDB.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteResoIDB.deleteRestaurant(1);
  });

  it("harus menampilkan widget tidak seperti ketika film telah di like", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this resto"]')
    ).toBeTruthy();
  });

  it("tidak boleh menampilkan widget like ketika film telah disukai", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this resto"]')
    ).toBeFalsy();
  });

  it("harus dapat menghapus film yang disukai dari daftar", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteResoIDB.getAllRestaurants()).toEqual([]);
  });

  it("tidak boleh menimbulkan kesalahan jika film yang tidak disukai tidak ada dalam daftar", async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteResoIDB.deleteRestaurant(1);

    document
      .querySelector('[aria-label="unlike this resto"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteResoIDB.getAllRestaurants()).toEqual([]);
  });
});

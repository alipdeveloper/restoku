/* eslint-disable import/prefer-default-export */
const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it("harus mengembalian resto yang sudah ditambahkan", async () => {
    favoriteResto.putRestaurant({ id: 1 });
    favoriteResto.putRestaurant({ id: 2 });

    expect(await favoriteResto.getRestaurant(1)).toEqual({ id: 1 });
    expect(await favoriteResto.getRestaurant(2)).toEqual({ id: 2 });
    expect(await favoriteResto.getRestaurant(3)).toEqual(undefined);
  });

  it("harus menolak resto ditambahkan jika tidak mempunyai properti yang benar", async () => {
    favoriteResto.putRestaurant({ aProperty: "property" });

    expect(await favoriteResto.getAllRestaurants()).toEqual([]);
  });

  it("dapat mengembalikan semua resto yang telah ditambahkan", async () => {
    favoriteResto.putRestaurant({ id: 1 });
    favoriteResto.putRestaurant({ id: 2 });

    expect(await favoriteResto.getAllRestaurants()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });

  it("harus menghapus resto favorite", async () => {
    favoriteResto.putRestaurant({ id: 1 });
    favoriteResto.putRestaurant({ id: 2 });
    favoriteResto.putRestaurant({ id: 3 });

    await favoriteResto.deleteRestaurant(1);

    expect(await favoriteResto.getAllRestaurants()).toEqual([
      { id: 2 },
      { id: 3 },
    ]);
  });

  it("harus menangani permintaan untuk menghapus resto meskipun resto tersebut belum ditambahkan", async () => {
    favoriteResto.putRestaurant({ id: 1 });
    favoriteResto.putRestaurant({ id: 2 });
    favoriteResto.putRestaurant({ id: 3 });

    await favoriteResto.deleteRestaurant(4);

    expect(await favoriteResto.getAllRestaurants()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });
};

export { itActsAsFavoriteRestoModel };

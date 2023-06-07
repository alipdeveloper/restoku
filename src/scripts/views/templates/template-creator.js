import CONFIG from "../../globals/config";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const createRestoItemTemplate = (resto) => `
  <div class="col" id="resto-item">
      <div class="card">
          <div class="card-img">
              <div class="city-label">
                  <span class="city-label-text">
                      Kota ${resto["city"]}
                  </span>
              </div>
              <img class="lazyload" data-src="${
                resto["pictureId"]
                  ? CONFIG.BASE_IMAGE_URL + resto["pictureId"]
                  : "images/heros/hero-image_4.jpg"
              }" crossorigin="anonymous" alt="${resto["name"]}">
          </div>
          <div class="card-body">
              <div class="rating">
                  <i class="fas fa-star"></i>
                  <span>${resto["rating"]}</span>
              </div>
              <h3 class="card-title" id="resto-title">
                  <a href="./#/detail/${resto["id"]}">
                    ${resto["name"]}
                  </a>
              </h3>
              <p class="card-text">${resto["description"].slice(0, 300)}</p>
          </div>
      </div>
  </div>
`;

const createRestoDetailTemplate = (resto) => `
  <div class="detail">
  
    <h1 class="title" id="resto-title">
      ${resto["name"]}
    </h1>
    <img class="lazyload" src="${
      CONFIG.BASE_IMAGE_URL + resto["pictureId"]
    }" crossorigin="anonymous" alt="${resto["name"]}" />

    <div class="info">
      <h2>Informasi</h2>
      <ul>
        <li>
          <h3>Kota</h3>
          <p>${resto["city"]}</p>
        </li>
        <li>
          <h3>Alamat</h3>
          <p>${resto["address"]}</p>
        </li>
        <li>
          <h3>Rating</h3>
          <p>${resto["rating"]}</p>
        </li>
        <li>
          <h3>Daftar Makanan</h3>
          <span id="food">
          <p>${resto.menus.foods.map((food) => food.name).join(", ")}</p>
          </span>
        </li>
        <li>
          <h3>Daftar Minuman</h3>
          <span id="drink">
            <p>${resto.menus.drinks.map((food) => food.name).join(", ")}</p>
          </span>
        </li>
      </ul>
    </div>

    <div class="overview">
      <h2>Ringkasan</h2>
      <p>${resto["description"]}</p>
    </div>

  </div>
`;

const createRestoReviewTemplate = (reviews) => `
  <div class="review">
    <p>
    <span class="name">${reviews["name"]}</span> &bull; <span class="date">${reviews["date"]}</span>
    </p>
    <p>${reviews["review"]}</p>
  </div>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createRestoReviewTemplate,
};

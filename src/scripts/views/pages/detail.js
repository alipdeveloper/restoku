import UrlParser from "../../routes/url-parser";
import RestaurantSource from "../../data/resto-source";
import {
  createRestoDetailTemplate,
  createRestoReviewTemplate,
} from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
  async render() {
    return `
    <resto-detail>
      <h2>
      <span class="title-content">Detail Restaurant</span>
      </h2>

      <div id="resto-detail" class="row"></div>
      <div id="likeButtonContainer"></div>
    </resto-detail>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantById = await RestaurantSource.detailResto(url.id);
    const detail = restaurantById.restaurant;
    const restoContainer = document.querySelector("#resto-detail");
    restoContainer.innerHTML = createRestoDetailTemplate(detail);

    restoContainer.innerHTML += `
      <resto-review>
        <h2>Reviews Pelanggan</h2>
        <div id="resto-review"></div>
      </resto-review>
    `;

    const restoReview = document.querySelector("resto-review");
    detail.customerReviews.forEach((review) => {
      restoReview.innerHTML += createRestoReviewTemplate(review);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: detail.id,
        name: detail.name,
        pictureId: detail.pictureId,
        city: detail.city,
        rating: detail.rating,
        description: detail.description,
      },
    });
  },
};

export default Detail;

import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/source-resto';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import FavButtonPresenter from '../../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
        <div id="resto" class="resto"></div>
        <div id="favButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestaurantDetailTemplate(resto);
    await FavButtonPresenter.init({
      favButtonContainer: document.querySelector('#favButtonContainer'),
      resto: {
        id: resto.id,
        pictureId: resto.pictureId,
        name: resto.name,
        description: resto.description,
        city: resto.city,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;

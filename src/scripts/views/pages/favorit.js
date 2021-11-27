import FavoriteRestoIdb from '../../data/RestoFavorite-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="favorite">
        <h2 class="favorite-heading">Your Liked Restaurant</h2>
        <div id="restos" class="restos">
            <span class="loadingFav" >Loading data</span>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const loading = document.querySelector('.loadingFav');
    const restaurantList = await FavoriteRestoIdb.getAllRestos();
    const data = await FavoriteRestoIdb.getAllRestos();
    if (data.length > 0) {
      restaurantList.innerHTML = '';
      data.forEach((resto) => {
        restaurantList.innerHTML += createRestaurantItemTemplate(resto);
      });
    } else {
      loading.innerHTML = 'Tidak ada restaurant untuk ditampilkan';
    }
  },
};

export default Favorite;

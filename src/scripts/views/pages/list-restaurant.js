import RestaurantSource from '../../data/source-resto';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
  async render() {
    return `
    <section class="hero">
      <div class="hero-image">
          <picture>
            <source type="image/jpeg" width="100%" media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
              <img width="100%" class ="lazyload" data-src='./images/hero-image_2-large.jpg' alt="gambar makan bersama">
              </img>
            </picture>
      </div>
    <div class="content">
        <br>
        <h2>Restaurants Apps</h2>
        <p>
            Menyediakan Kebutuhanmu dalam mencari rekomendasi tempat makanan yang wenak pol. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam facere illo commodi at beatae, non dolore soluta saepe illum, debitis sit. 
            Nostrum commodi velit maxime error dignissimos doloremque. Facilis, eos. Lorem ipsum dolor  sit amet consectetur, adipisicing elit. Pariatur aliquid quae inventore
        </p>
    </div>
    <section class="daftar-restaurant">
        <h2>Daftar Restaurant</h2>
        <div id="restaurant" class="restaurants">
        </div>
    </section>
    `;
  },

  async afterRender() {
    const resto = await RestaurantSource.daftarRestaurant();
    const restoContainer = document.querySelector('#restaurant');
    resto.forEach((dataResto) => {
      restoContainer.innerHTML += createRestaurantItemTemplate(dataResto);
    });
  },
};

export default ListRestaurant;

import FavoriteRestoIdb from '../data/RestoFavorite-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const FavButtonPresenter = {
  async init({ favButtonContainer, resto }) {
    this.favButtonContainer = favButtonContainer;
    this.resto = resto;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.resto;

    if (await this.isRestoExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  renderLike() {
    this.favButtonContainer.innerHTML = createLikeButtonTemplate();
    const favButton = document.querySelector('#likeButton');
    favButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this.resto);
      await this.renderButton();
    });
  },

  renderLiked() {
    this.favButtonContainer.innerHTML = createLikedButtonTemplate();
    const favButton = document.querySelector('#likeButton');
    favButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this.resto.id);
      await this.renderButton();
    });
  },
};

export default FavButtonPresenter;

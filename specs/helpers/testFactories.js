/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import FavButtonPresenter from '../../src/scripts/utils/like-button-presenter';

const createFavButtonPresenterWithRestaurant = async (resto) => {
  await FavButtonPresenter.init({
    favButtonContainer: document.querySelector('#favButtonContainer'),
    resto,
  });
};

export { createFavButtonPresenterWithRestaurant };

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import FavButtonInitiator from '../src/scripts/utils/like-button-presenter';
import FavoriteRestoIdb from '../src/scripts/data/RestoFavorite-idb';
import * as TestFactories from './helpers/testFactories';

const addFavButtonContainer = () => {
  document.body.innerHTML = '<div id="favButtonContainer"></div>';
};

describe('Unfavorite A restaurant', () => {
  beforeEach(async () => {
    addFavButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('should display unfavourite widget when the restaurant has been liked', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display favourite widget when the restaurant has been liked', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestoIdb.deleteResto(1);

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});

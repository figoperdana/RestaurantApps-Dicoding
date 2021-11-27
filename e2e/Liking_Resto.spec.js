/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favored restaurants', ({ I }) => {
  I.seeElement('#restaurant');
  I.see('Tidak ada restaurant untuk ditampilkan', '.loadingFav');
});

Scenario('favourite one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.loadingFav');

  I.amOnPage('/');

  I.seeElement('.restaurant .info-resto a');
  const firstRestaurantTitle = await I.grabTextFrom(locate('.restaurant .info-resto h3').first());
  I.click(locate('.restaurant .info-resto a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  const favouritedRestaurantTitle = await I.grabTextFrom('.info-resto h3');

  assert.strictEqual(firstRestaurantTitle, favouritedRestaurantTitle);
});

Scenario('unfavourite a restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.loadingFav');

  I.amOnPage('/');

  I.seeElement('.restaurant .info-resto a');
  const firstRestaurantTitle = await I.grabTextFrom(locate('.restaurant .info-resto h3').first());
  I.click(locate('.restaurant .info-resto a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant');
  const favouritedRestaurantTitle = await I.grabTextFrom('.info-resto h3');

  assert.strictEqual(firstRestaurantTitle, favouritedRestaurantTitle);

  I.seeElement('.restaurant .info-resto a');
  I.click(locate('.restaurant .info-resto a'));

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurant');
  I.see('Tidak ada restaurant untuk ditampilkan', '.loadingFav');
});

import Detail from '../views/pages/detail';
import ListRestaurant from '../views/pages/list-restaurant';
import Favorite from '../views/pages/favorit';

const routes = {
  '/': ListRestaurant,
  '/list-restaurant': ListRestaurant,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;

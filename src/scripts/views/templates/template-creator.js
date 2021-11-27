import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (resto) => `


    <div class="atas">
        <img class="gambar-resto lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}" />
        <div class="info-resto">
            <h2 class="nama-restaurant">${resto.name}</h2>
            <h3>Informasi Restaurant:</h3>
            <h4>Kota</h4>
                <p>${resto.city}</p>
            <h4>Alamat</h4>
                <p>${resto.address}</p>
            <h4>Rating</h4>
                <p>${resto.rating}</p>
            <h4>Kategori</h4>
                ${resto.categories.map((category) => `
                <div class="restaurantCategoryList">
                    <h5 tabindex="0">${category.name}</h6>
                </div>
            `).join('')}
            <div class="deskripsi">
                <h3>Deskripsi:</h3>
                <p>${resto.description}</p>
            </div>
        </div>
    </div>
    
    <div class="menus">
        <h3>Menus</h3>
        <div class="foods">
            <div class="food">
                <h4>Makanan</h4>
                <div class="makanan">
                    ${resto.menus.foods.map((food) => `
                    <div class="restaurantFoodList">
                        <p>${food.name}</p>
                    </div>
                    `).join('')}
                </div>
            </div>
            <div class="drink">
                <h4>Minuman</h4>
                <div class="minuman">
                    ${resto.menus.drinks.map((drink) => `
                    <div class="restaurantDrinkList">
                        <p>${drink.name}</p>
                    </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </div>

    <div class="reviews">
        <h3>Reviews</h3>
        <div class="all-reviews">
            ${resto.customerReviews.map((review) => `
            <div class="restaurantReviewList">
                <h5 tabindex="0">${review.name}</h6>
                <p tabindex="0" class="date-review">${review.date}</p>
                <p tabindex="0">${review.review}</p>
            </div>
            `).join('')}
        </div>
    </div>
        
    
`;

const createRestaurantItemTemplate = (resto) => `
    <article class="restaurant">
        <div class="upper">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}" width="200px">
            <div class="restaurant-content">
                <h3 class="restaurant_name"><b>${resto.name}</b></h3>
                <h4>Rating : ${resto.rating}</h4>
                <h4>Kota : ${resto.city}</h4>
            </div>
        </div>
        <div class="down">
            <h4>Description:</h4>
            <p>${resto.description}</p>
            <form class="action" action="${`/#/detail/${resto.id}`}">
                <button class="secondary-button" href="/detail/:id">Detail Restaurant</button>
            </form>
        </div>   
    </article>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};

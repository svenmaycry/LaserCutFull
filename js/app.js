import {initHeader} from "./blocks/header.js";
import {initReviews} from "./blocks/reviews.js";

import {initMainPersonalSwiper} from "./swiper/main-personal-swiper.js";
import {initMainBloggersSwiper} from "./swiper/main-bloggers-swiper.js";
import {initMainCategorisSwiper} from "./swiper/main-categories-swiper.js";
import {initBloggerVideoSwiper} from "./swiper/blogger-swiper.js";
import {initModalMistakes} from "./blocks/modal-mistakes.js";
import {initSpoilers} from "./blocks/test-spoilers.js";
import {initModalPenguin} from "./blocks/modal-penguin.js";
import {initModalPriceAlert} from "./blocks/modal-price-alert.js";

// Код спойлеров, табов, динамического адаптива в Шапке
initHeader();

// Код слайдеров секции баннеров на Главной
initMainPersonalSwiper();

// Код слайдеров секции катейгорий на Главной
initMainCategorisSwiper();

// Код слайдера секции блоггеров на Главной
initMainBloggersSwiper();

// Код слайдера на странице Блогера
initBloggerVideoSwiper();

// Код табов и слайдера на странице Отзывов
initReviews();

// Код модального окна исправление неточностей
initModalMistakes();

// Код модального окна с пингвином
initModalPenguin();

// Код модального окна заморозки цен
initModalPriceAlert();

// Тестовый код спойлеров
initSpoilers();
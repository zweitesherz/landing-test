import "./scss/main.scss";
import $ from 'jquery';
import 'bootstrap';
import Swiper , { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);


$(document).ready(function () {

    let mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        breakpoints: {
            '1200': {
                slidesPerView: 2,
                spaceBetween: 15,
            }
        }

    });
})



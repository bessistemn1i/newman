import ToTop from "./modules/toTop";
//import { tns } from '../../node_modules/tiny-slider/src/tiny-slider.js';
import CustomCarousel from "./modules/CustomCarousel";

new ToTop();

/* if(document.querySelector('.discount__slider')) {
    new tns({
        mode: "carousel",
        container: ".slider-discount",
        items: 2,
        gutter: 55,
        fixedWidth: 308
    })
} */

new CustomCarousel();
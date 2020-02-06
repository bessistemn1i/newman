import ToTop from "./modules/toTop";
import CustomCarousel from "./modules/CustomCarousel";
import TabSwitcher from './modules/TabSwitcher';
import MobileMenu from "./modules/MobileMenu";

new ToTop();

new CustomCarousel();

new TabSwitcher({
    tabs: '.services__tabs-item',
    elToOpen: '.services__tab'
});

new MobileMenu();
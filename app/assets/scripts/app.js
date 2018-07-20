import MobileMenu from './modules/MobileMenu';
import RevealOnScrol from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();

new RevealOnScrol($(".feature-item"), "85%");
new RevealOnScrol($(".testimonial"), "60%");
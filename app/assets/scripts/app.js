import MobileMenu from './modules/MobileMenu';
import RevealOnScrol from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';

var mobileMenu = new MobileMenu();

new RevealOnScrol($(".feature-item"), "85%");
new RevealOnScrol($(".testimonial"), "60%");

var stickyHeader = new StickyHeader();
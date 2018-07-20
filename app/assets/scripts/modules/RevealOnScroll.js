import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(elements, offset) {
    this.itemsToReveal = elements;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoint();
  }

  hideInitially() {
    this.itemsToReveal.addClass('reveal-item');
  }

  createWaypoint() {
    var that = this;
    this.itemsToReveal.each(function() {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        offset: that.offsetPercentage,
        handler:function(){
          $(currentItem).addClass("reveal-item--is-visible")
        }
      });
    });
  }
}

export default RevealOnScroll;
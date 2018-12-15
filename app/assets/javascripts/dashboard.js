// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(function() {

    let heatmap = h337.create({
        container: document.querySelector('.map-container'),
        maxOpacity: .7,
    });

    heatmap.setDataMin(0);
    heatmap.setDataMax(2);

    $('.map-container .heatmap-canvas').on('click', function(event) {
        heatmap.addData({ x: event.offsetX, y: event.offsetY, value: 1 });
        console.log('dgdg')
    });
});
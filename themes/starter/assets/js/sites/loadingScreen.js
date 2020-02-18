const $ = jQuery.noConflict();

('use strict'); // jshint ignore:line
const loadingScreen = {

    init: () => {
        //your code goes here
        const loadingScreen = $('#loading-screen');
        const particles = $('canvas');
        const container = $('.container');
        container.hide();
        particles.hide();
        console.log(particles);

        setTimeout(() => {
            loadingScreen.hide(200);
            setTimeout(() => {
                container.show();
                particles.show(500);
            }, 500);
        }, 3500);
    }
};

export default loadingScreen;

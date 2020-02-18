import example from './sites/example';
import loadingScreen from './sites/loadingScreen';

const $ = jQuery.noConflict();

jQuery(() => {

    //example
    example.init();

    //loading screen
    loadingScreen.init();

    $(document).ajaxComplete(() => {
        console.log('ajaxComplete')
    })
});

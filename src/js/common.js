$(document).ready(function () {

// var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    function browserDetectJS() {
        var
            browser = new Array();

//Opera
        if (window.opera) {
            browser[0] = "Opera";
            browser[1] = window.opera.version();
        }
        else
//Chrome
        if (window.chrome) {
            browser[0] = "Chrome";
        }
        else
//Firefox
        if (window.sidebar) {
            browser[0] = "Firefox";
        }
        else
//Safari
        if ((!window.external)&&(browser[0]!=="Opera")) {
            browser[0] = "Safari";
        }
        else
//IE
        if (window.ActiveXObject) {
            browser[0] = "MSIE";
            if (window.navigator.userProfile) browser[1] = "6";
            else
            if (window.Storage) browser[1] = "8";
            else
            if ((!window.Storage)&&(!window.navigator.userProfile)) browser[1] = "7";
            else browser[1] = "Unknown";
        }

        if (!browser) return(false);
        else return(browser);
    }


    var br = browserDetectJS();
    //console.log(br[0]);
    //console.log(br[1]);

    if(br[1]=="8" || br[1]=="9"){


      //  $('.item_block__wrap').css( "background-size", "cover" );



    }




});





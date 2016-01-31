$(document).ready(function() {
    $(".menu_1_main_triangle").click(function(){

        if($('.menu_1_main_mega').hasClass('displays')){
            $('.menu_1_main_mega').fadeOut();
            $('.menu_1_main_mega').removeClass('displays')
        }else{
            $('.menu_1_main_mega').fadeIn();
            $('.menu_1_main_mega').addClass('displays')
        }

    });

}); // end of ready()






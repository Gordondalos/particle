$(document).ready(function() {
    $("#men").click(function(){
        if($('.menu_1_main_mega').hasClass('displays')){
            $('.menu_1_main_mega').fadeOut();
            $('.menu_1_main_mega').removeClass('displays')
        }else{
            $('.menu_1_main_mega').fadeIn();
            $('.menu_1_main_mega').addClass('displays')
        }
    });

    $('#search').click(function(){
        $('input.search').animate({width:'toggle'}, 400);
    });


}); // end of ready()






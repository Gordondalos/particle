$(document).ready(function() {
    $("a").click(function() {
     var ul = $(this).next();
        if(ul.hasClass('displays')){
            var ob =  $('ul.menu_2_main_droppdown');
            ob.each(function(index, element){
                $(element).fadeOut();
                $(element).removeClass('displays')
            });
            ul.fadeOut();
            ul.removeClass('displays')
        }else{
            var ob =  $('ul.menu_2_main_droppdown');
            ob.each(function(index, element){
                $(element).fadeOut();
                $(element).removeClass('displays')
            });

            ul.fadeIn();
            ul.addClass('displays')
        }
    })

}); // end of ready()






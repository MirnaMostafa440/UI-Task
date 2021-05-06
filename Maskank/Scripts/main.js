
//Pre Loader
$(window).on('load', function () {
    $(".loader-content").fadeOut(1000);
    new WOW().init();
})

$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        placement: 'top',
        html: true,
        title: 'Noor Capital <a href="#" class="close" data-dismiss="alert">&times;</a>',
    });
    $(document).on("click", ".popover .close", function () {
        $(this).parents(".popover").popover('hide');
    });
});
// Mean Menu
jQuery('.mean-menu').meanmenu({
    meanScreenWidth: "991"
});





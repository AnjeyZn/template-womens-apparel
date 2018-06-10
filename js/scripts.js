$(function () {
    $('.carousel').carousel({
        interval: "5000"
    });
    
    $('.search').on('click', function () {
        $('.main-menu .navbar-form').slideToggle();
    });

    $('#elastislide').elastislide({
        interval: "5000"
    })
});

/* Вычисляем ширину картинки */
$(window).load(function () {
   var carouserCaptionWidth = $('#carousel-sidebar .active img').width();
   // принудительно задаем другим картинкам соответствующую ширину
    $('#carousel-sidebar img').each(function () {
        $(this).attr('width', carouserCaptionWidth);
    });
    // устанавливаем ширину текста
    $('#carousel-sidebar .sidebar-carousel-caption').css('max-width', carouserCaptionWidth + 'px');

    $('#carousel-sidebar .carousel-indicators').css('max-width', carouserCaptionWidth + 'px');
    $('.sidebar .banner').css('max-width', carouserCaptionWidth + 'px');
});
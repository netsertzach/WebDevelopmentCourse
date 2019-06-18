$('.girl-home').on( 'mousemove', function( evt ) {
    var x = evt.pageX - $('.girl-home').offset().left;
    var y = evt.pageY - $('.girl-home').offset().top;
    if( y < 150 ) {
        $('.girl-home').attr( 'src', 'images/girl-up.png' );
    }
    if( y > 300 ) {
        $('.girl-home').attr( 'src', 'images/girl-first.png' );
    }

    if( x < 100 ) {
        $('.girl-home').attr( 'src', 'images/girl-left.png' );
    }
    if( x > 250 ) {
        $('.girl-home').attr( 'src', 'images/girl-right.png' );
    }
});


$('.home-slide').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    rtl: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    initialSlide: 0,
    //centerMode: true,
    //fade: true,
    //cssEase: 'linear'
});


adjustWidth();
function adjustWidth() {
    var parentwidth = $(".nav-container").width();
    $(".site-nav").width( parentwidth ).show();
}

$(window).resize(
    function() {
        adjustWidth();
});
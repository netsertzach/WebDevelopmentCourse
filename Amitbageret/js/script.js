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

$(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
        /*$('.nav-logo').css({
            'visibility': 'visible'
        });
        $('.main-logo').css({
            'visibility': 'hidden'
        });*/
        $( '.main-logo img' ).css({
            'height': '50px'
        });
        $( '.top-wrapper' ).css({
           'height': '50px'
        });
    } else {
        /*$('.nav-logo').css({
            'visibility': 'hidden'
        });
        $('.main-logo').css({
            'visibility': 'visible'
        });*/
        $( '.main-logo img' ).css({
            'height': '100px'
        });
        $( '.top-wrapper' ).css({
            'height': '100px'
        });
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
    initialSlide: 0
});


$('.abstract').slick({
    dots: true,
    rtl: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    centerMode: false,
    initialSlide: 0,
    infinite: false
    /*customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<a>*' + (i+1) + '</a>';
    }*/
});


$( '.heart' ).on( 'click', function( event ) {
    if( $( this ).attr( 'src') === 'images/red-heart.png' ) {
        $(this).attr('src', 'images/black-heart-empty.png');
    } else {
        $(this).attr('src', 'images/red-heart.png');
    }
});

$( "#target" ).dblclick(function() {
    alert( "Handler for .dblclick() called." );
});


$( '.card-image' ).on( 'dblclick', function ( event ) {
    var id = $( this ).find( '.featured-image' ).data( 'id' );
    if( $( '#'+id ).attr( 'src') === 'images/red-heart.png' ) {
        $( '#'+id ).attr('src', 'images/black-heart-empty.png').css('z-index');
    } else {
        $( '#'+id ).attr('src', 'images/red-heart.png');
    }

    $( this ).find('.heart-animation').css( 'opacity', 0.8 ).css('z-index', 0);
    setTimeout( function(){
        $('.heart-animation').css( 'opacity', 0 ).css('z-index', -1);
    }, 950 );
} );

/*
adjustWidth();
function adjustWidth() {
    var parentwidth = $(".nav-container").width();
    $(".site-nav").width( parentwidth ).show();
}

$(window).resize(
    function() {
        adjustWidth();
});*/

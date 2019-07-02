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

$('.home-slide').on('init', function (event, slick) {
    $( '.my-slide' ).css( 'display', 'block' );
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
    lazyLoad: 'progressive'
});


$('.abstract').on('init', function (event, slick) {
    $( '.abstract-content' ).css( 'display', 'block' );
    $( '.first-slide' ).css( 'visibility', 'visible' );
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
    infinite: false,
    lazyLoad: 'progressive'
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


$(".card-image").click(function (e) {
    var $this = $(this);
    if ($this.hasClass('clicked')){
        $this.removeClass('clicked');
        var id = $this.find( '.featured-image' ).data( 'id' );
        if( $( '#'+id ).attr( 'src') === 'images/red-heart.png' ) {
            $( '#'+id ).attr('src', 'images/black-heart-empty.png').css('z-index');
        } else {
            $( '#'+id ).attr('src', 'images/red-heart.png');
        }

        $this.find('.heart-animation').css( 'opacity', 0.8 ).css('z-index', 0);
        setTimeout( function(){
            $('.heart-animation').css( 'opacity', 0 );
            setTimeout( function() {
                $('.heart-animation').css('z-index', -1);
            }, 750 );
        }, 750 );
        //here is your code for double click
    } else{
        $this.addClass('clicked');
        setTimeout(function() {
            if ($this.hasClass('clicked')){
                $this.removeClass('clicked');
                var info = $this.find( '.featured-image' ).data( 'id' );
                var id = info.split( '-' )[1];
                console.log( '#slick-'+ id );
                $('#slick-'+ id ).slick("slickNext");
                //your code for single click
            }
        }, 300 );
    }
});



/*$( '.card-image' ).on( 'click', function ( event ) {
    var info = $( this ).find( '.featured-image' ).data( 'id' );
    var id = info.split( '-' )[1];
    console.log( '#slick-'+ id );
    $('#slick-'+ id ).slick("slickNext");
});*/

/*$( '.card-image' ).on( 'dblclick', function ( event ) {
    var id = $( this ).find( '.featured-image' ).data( 'id' );
    if( $( '#'+id ).attr( 'src') === 'images/red-heart.png' ) {
        $( '#'+id ).attr('src', 'images/black-heart-empty.png').css('z-index');
    } else {
        $( '#'+id ).attr('src', 'images/red-heart.png');
    }

    $( this ).find('.heart-animation').css( 'opacity', 0.8 ).css('z-index', 0);
    setTimeout( function(){
        $('.heart-animation').css( 'opacity', 0 );
        setTimeout( function() {
            $('.heart-animation').css('z-index', -1);
        }, 750 );
    }, 750 );
} );*/

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

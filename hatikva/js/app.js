$(document).foundation()
$('#exampleModal1').foundation('open');

$('.close-modal').on('click', function(){
    $('#exampleModal1').foundation('close');
});

$('.title').focus();

$('.video').on('mouseenter focus', function(e) {
    $( ".video" ).each(function( index ) {
        $(this).get(0).pause();
        $(this).get(0).muted = true;
    });
    var $video = $(this);
    $video.get(0).play();
    $video.get(0).muted = false;
});

$('.video').on('mouseout blur', function(e) {
    var $video = $(this);
    $video.get(0).pause();
    $video.get(0).muted = true;
});

let isFullScreen = false;
let isPlaying = true ;

$('.video').on('click', function( event ) {
    var $video = $(this);
    let myVideo = $video.get(0);
    if( isFullScreen ) {
        isFullScreen = false;
        closeFullscreen(myVideo);
    } else {
        isFullScreen = true;
        openFullscreen(myVideo);
    }
});

function openFullscreen(myVideo) {
    let elem = myVideo
    //console.log(elem)
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
    myVideo.style.border = "none";
    myVideo.currentTime = 0;
    myVideo.play();
}

function closeFullscreen(myVideo) {
    myVideo.style.border = "3px solid #fff";
    myVideo.webkitExitFullscreen();
}

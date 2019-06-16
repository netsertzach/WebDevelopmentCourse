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
    console.log( x, y);
});


document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [
            [ "בואי נדבר", "על כל מה", "שלא סבבה"],
            [ "בואי נדבר", "אם אומרים לך", "תביני שתתבגרי"],
            [ "בואי נדבר", "אם שום דבר", "לא מסתדר..."]
        ]
    ;

    var currentText = '';
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.querySelector(".home-slogan").innerHTML = currentText + text.substring(0, i+1) +'<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback === 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
            currentText = document.querySelector(".home-slogan").innerHTML;
            currentText += '<br>';
        }
    }
    var row = 0;
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {

        if (typeof dataText[row][i] === 'undefined'){
            setTimeout(function() {
                StartTextAnimation(row, i);
                currentText = '';
                row++;
                if( row === dataText.length ) {
                    row = 0;
                }

            }, 2000);
        }
        //console.log( i );
        // check if dataText[i] exists
        if ( dataText[row][i] && i < dataText[row][i].length ) {
            // text exists! start typewriter animation
            typeWriter(dataText[row][i], 0, function(){
                // after callback (and whole text has been animated), start next text
                // console.log( 'here' );
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0 );
});
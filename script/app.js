// Write your code here!
$(document).ready(function() {
    $('.announcement').prepend("<span></span>");
    $('span').addClass("close-btn");

    $('span').on('click', function() {
        $(this).toggleClass('close-btn show-more-btn');
        $(this).parent().find('p').toggleClass('hide');
    });


    $('.gallery img').on('click', function() {

        var caption = $(this).attr('alt');
        var source = $(this).attr('src');
        $('#over-image').attr('src', source);
        $('figcaption').html(caption);
        $('.overlay').css({
            display: 'flex'
        });

    });

    $('.overlay').on('click', function() {
        $(this).css({
            display: 'none'
        });
    });


    $('#signup-form').on('submit', function(event) {
        event.preventDefault();
        var pass1 = $("form input[name=password]").val();
        var pass2 = $("form input[name=password2]").val();
        
        if (pass1 === pass2 && pass1.length() > 9) {
            return true
        }
        else {
            alert("Passwords don't match or is less than 10 characters long")
        }
        
    });

});
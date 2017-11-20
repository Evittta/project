$('form input[type="submit"]').click(sendForm);

function sendForm(e) {
    e.preventDefault();
    $.ajax({
        url: "https://formspree.io/vita.kusinya@gmail.com", 
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            subject: $('#message-subject').val(),
            message: $('#client-message').val()
        },
        dataType: "json"
    })
    .done(function(){
        $('form')[0].reset();
        $('#msg').html('Thank you!');
        setTimeout(function() {
            $('#msg').fadeOut('fast')
        },5000);
    })
    .fail(function(){
        $('#msg-er').html('Sorry, there is an error!');
        setTimeout(function() {
            $('#msg-er').fadeOut('fast')
        },5000);
    });
} 


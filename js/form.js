$('#page-loaded').html( (new Date).toLocaleTimeString() );

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
    })
    .fail(function(){
        $('msg').html('Sorry. there is an error!');
    });
} 

setTimeout(function() {
    $('#msg').fadeOut('fast')
},30000);
$(document).ready(function() {
    $('#contact-form').on('submit', function(event) {
        event.preventDefault(); 

        var $form = $(this);
        var formData = $form.serialize(); 

        $.ajax({
            url: 'https://formspree.io/f/xkgwrqbg', 
            method: 'POST',
            data: formData,
            dataType: 'json',
            success: function() {
                alert('Seu formulário foi enviado com sucesso!');
                $form[0].reset();
            },
            error: function() {
                alert('Houve um problema ao enviar seu formulário. Por favor, tente novamente.');
            }
        });
    });
});

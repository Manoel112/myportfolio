$(document).ready(function() {
    $('#contact-form').on('submit', function(event) {
        event.preventDefault(); 

        var $form = $(this);
        var formData = $form.serialize(); 

        $.ajax({
            url: 'https://formspree.io/f/xkgwrqbg', // Substitua pelo URL do seu formulário Formspree
            method: 'POST',
            data: formData,
            dataType: 'json',
            success: function() {
                alert('Seu formulário foi enviado com sucesso!');
                $form[0].reset(); // Limpa o formulário após o envio
            },
            error: function() {
                alert('Houve um problema ao enviar seu formulário. Por favor, tente novamente.');
            }
        });
    });
});

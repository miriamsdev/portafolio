const Contact = () => {
    const elementos = $('.input-box input, .input-box textarea');

    const validarInputs = () =>{
            if ($('#name').val() == "" || $('#email').val() == "" || $('#message').val() == ""){
                console.log('El campo ' + elementos.attr('name') + ' esta incompleto');
                elementos.addClass("error");
                return false;
            }else {
                elementos.removeClass("error");
                return true;
            }
    };
    // --- Eventos ---

    $('#name').on("focus",() => {
        $('#name').next().addClass("active");
        $('#name').removeClass("error");
    });
    $('#email').on("focus",() => {
        $('#email').next().addClass("active");
        $('#email').removeClass("error");
    });
    $('#message').on("focus",() => {
        $('#message').next().addClass("active");
        $('#message').removeClass("error");
    });

    $('#name').on("blur",() => {
        if($('#name').val() == "" ){
            $('#name').next().removeClass("active");
            $('#name').addClass("error");
        }
    });
    $('#email').on("blur",() => {
        if($('#email').val() == "" ){
            $('#email').next().removeClass("active");
            $('#email').addClass("error");
        }
    });
    $('#message').on("blur",() => {
        if($('#message').val() == "" ){
            $('#message').next().removeClass("active");
            $('#message').addClass("error");
        }
    });


    $('#form-contact').on("submit", (e) => {
        e.preventDefault();
        const dataForm = {
            name: $('#name').val(),
            email: $('#email').val(),
            message:$('#message').val()
        }
        if (!validarInputs()) {
            console.log('Falto validar los Input');
            e.preventDefault();
            return false;
        } else {
            $.ajax({
                method: "POST",
                url: "https://formspree.io/dtdisendes012@gmail.com",
                data: $('#contact-form').serialize(),
                data:dataForm,
                dataType: "json"
            });
            alert("Su mensaje fue enviado satisfactoriamente\nGracias!");
            console.log('Envia');
            $('#form-contact')[0].reset();
        }
    });
};
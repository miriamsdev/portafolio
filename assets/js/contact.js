const Contact = () => {
    const elementos=$('.input-box');
    console.log(elementos);

    // Funcion que se ejecuta cuando el evento click es activado

    const validarInputs = () =>{
        for (let i = 0; i < elementos.length; i++) {
            // Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
            if (elementos[i].type == "text" || elementos[i].type == "email") {
                // Si es tipo texto, email o password vamos a comprobar que esten completados los input
                if (elementos[i].val().length == 0) {
                    console.log('El campo ' + elementos[i].name + ' esta incompleto');
                    elementos[i].className = elementos[i].className + " error";
                    return false;
                } else {
                    elementos[i].className = elementos[i].className.replace(" error", "");
                }
            }
        }

        return true;
    };
    //
    const enviar = (e) => {
        if (!validarInputs()) {
            console.log('Falto validar los Input');
            e.preventDefault();
        } else {
            console.log('Envia');
            e.preventDefault();
        }
    };
    //
    // const focusInput = function() {
    //     this.parentElement.children[1].className = "label active";
    //     this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
    // };
    //
    // const blurInput = function() {
    //     if (this.value <= 0) {
    //         this.parentElement.children[1].className = "label";
    //         this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
    //     }
    // };
    //
    // // --- Eventos ---
    $('#form-contact').on("submit", enviar);

    for (let i = 0; i < elementos.length; i++) {
        if (elementos[i].type == "text" || elementos[i].type == "email") {
            elementos[i].on("focus", focusInput);
            elementos[i].on("blur", blurInput);
        }
    }

}
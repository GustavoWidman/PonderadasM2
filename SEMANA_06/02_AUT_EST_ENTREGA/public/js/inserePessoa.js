import * as bootstrap from 'bootstrap'

form.addEventListener("submit", () => {
    // console.log("clicked")

    let endereco = rua.value + ", " + numero.value + ", " + complemento.value;

    let telefone = "+55 " + ddd.value + " " + numero_telefone.value;

    let email_address = email.value;

    let descricao_texto = descricao.value;

    if ((rua.value == "") || (numero.value == "")) {
        endereco = "NULL";
    }
    if ((numero_telefone.value == "") || (ddd.value == "")) {
        telefone = "NULL";
    }

    if (email.value == "") {
        email_address = "NULL";
    }
    if (descricao.value == "") {
        descricao_texto = "NULL"
    }

    const body = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        cargo_aplicado: cargo_aplicado.value,
        endereco: endereco,
        telefone: telefone,
        email: email_address,
        descricao: descricao_texto
    }

    // METODO FETCH
    //
    // fetch("/api/insert/submit", {
    //     method: "POST",
    //     body: JSON.stringify(body),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }).then((res) => {
    //     return res.json();
    // }).catch((err) => {
    //     console.log(err);
    // }).then((json) => {
    //     console.log(json)
    //     if (json.status && json.text) {
    //         if (document.getElementById('submit-button')) {
    //             const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast'))
    //             console.log(json.status, " ", json.text)
    //             if (json.status === "success") {
    //                 document.getElementById('toast-title').innerHTML = "Sucesso!"
    //                 document.getElementById('toast-text').innerHTML = json.text
    //                 document.getElementById('toast-img').src="./assets/check.svg"
    //             }
    //             else if (json.status === "error") {
    //                 document.getElementById('toast-title').innerHTML = "Erro."
    //                 document.getElementById('toast-text').innerHTML = json.text
    //                 document.getElementById('toast-img').src="./assets/wrong.svg"
    //             }
    //             toastBootstrap.show()
    //         }
    //     }
    // });


    // METODO AJAX
    //
    // var xhttp = new XMLHttpRequest();
    // xhttp.open("POST", "/api/insert/submit", true);
    // xhttp.setRequestHeader("Content-Type", "application/json");
    // xhttp.onreadystatechange = function () {
    //     if (this.readyState == 4) {
    //         var data = JSON.parse(this.responseText);
    //         if (data.status && data.text) {
    //             if (document.getElementById('submit-button')) {
    //                 const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast'))
    //                 if (data.status === "success") {
    //                     document.getElementById('toast-title').innerHTML = "Sucesso!"
    //                     document.getElementById('toast-text').innerHTML = data.text
    //                     document.getElementById('toast-img').src="./assets/check.svg"
    //                 }
    //                 else if (data.status === "error") {
    //                     document.getElementById('toast-title').innerHTML = "Erro."
    //                     document.getElementById('toast-text').innerHTML = data.text
    //                     document.getElementById('toast-img').src="./assets/wrong.svg"
    //                 }
    //                 toastBootstrap.show()
    //             }
    //         }
    //     }
    // }
    // xhttp.send(JSON.stringify(body));

    // METODO JQUERY

    $.ajax({
        url: "/api/insert/submit",
        type: "POST",
        data: JSON.stringify(body),
        contentType: "application/json",
        success: function (data) {
            if (data.status && data.text) {
                if ($('#submit-button').length) {
                    const toastBootstrap = bootstrap.Toast.getOrCreateInstance($('#liveToast')[0])
                    if (data.status === "success") {
                        $('#toast-title').html("Sucesso!")
                        $('#toast-text').html(data.text)
                        $('#toast-img').attr('src', './assets/check.svg')
                    }
                    else if (data.status === "error") {
                        $('#toast-title').html("Erro.")
                        $('#toast-text').html(data.text)
                        $('#toast-img').attr('src', './assets/wrong.svg')
                    }
                    toastBootstrap.show()
                }
            }
        }
    });
});
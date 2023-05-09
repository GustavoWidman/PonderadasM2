import * as bootstrap from 'bootstrap'

form.addEventListener("submit", () => {
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

    fetch("/api/insert/submit", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        return res.json();
    }).catch((err) => {
        console.log(err);
    }).then((json) => {
        console.log(json)
        if (json.status && json.text) {
            if (document.getElementById('submit-button')) {
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast'))
                console.log(json.status, " ", json.text)
                if (json.status === "success") {
                    document.getElementById('toast-title').innerHTML = "Sucesso!"
                    document.getElementById('toast-text').innerHTML = json.text
                    document.getElementById('toast-img').src="./assets/check.svg"
                }
                else if (json.status === "error") {
                    document.getElementById('toast-title').innerHTML = "Erro."
                    document.getElementById('toast-text').innerHTML = json.text
                    document.getElementById('toast-img').src="./assets/wrong.svg"
                }
                toastBootstrap.show()
            }
        }
    });
});
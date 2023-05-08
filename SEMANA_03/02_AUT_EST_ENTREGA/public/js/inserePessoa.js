form.addEventListener("submit", () => {
    // compila o endereco com rua, numero e complemento
    let endereco = rua.value + ", " + numero.value + ", " + complemento.value;

    let telefone = "+55" + ddd.value + " " + numero_telefone.value;

    let email_address = email.value; // this doesnt work because email is a reserved word

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

    fetch("/insert/submit", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        return res.json();
    }).catch((err) => {
        console.log(err);
    }).then((data) => {
        if (data.status && data.text) {
            if (document.getElementById('remove_button')) {
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast'))
                console.log(data.status, " ", data.text)
                if (data.status === "success") {
                    document.getElementById('toast-title').innerHTML = "Sucesso!"
                    document.getElementById('toast-text').innerHTML = data.text
                    document.getElementById('toast-img').src="./assets/check.svg"
                }
                else if (data.status === "error") {
                    document.getElementById('toast-title').innerHTML = "Erro."
                    document.getElementById('toast-text').innerHTML = data.text
                    document.getElementById('toast-img').src="./assets/wrong.svg"
                }
                toastBootstrap.show()
            }
        }
    });



    // }).then((res) => {
    //     if (res.ok) return res.json();
    // }
    // ).then((json) => {
    //     console.log(json);
    // }
    // ).catch((err) => {
    //     console.log(err);
    // }
    // );
});
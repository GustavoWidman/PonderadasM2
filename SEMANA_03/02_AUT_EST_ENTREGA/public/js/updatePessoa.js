form.addEventListener("submit", () => {
    fetch(`/update/${id.value}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        return res.json();
    }).catch((err) => {
        console.log(err);
    }).then((json) => {
        nome.value = json.nome;
        sobrenome.value = json.sobrenome;
        cargo_aplicado.value = json.cargo_aplicado;
        // fetches the address and splits it into street, number and complement
        let endereco = json.endereco.split(", ");
        rua.value = endereco[0];
        numero.value = endereco[1];
        complemento.value = endereco[2];

        // fetches the phone number and splits it into ddd and number
        let telefone = json.telefone.split(" ");
        console.log(telefone)
        ddd.value = telefone[1];
        telefone_numero.value = telefone[2];

        email.value = json.email;
        descricao.value = json.descricao;

        if (json.status && json.text) {
            if (document.getElementById('remove_button')) {
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
    }).then(() => {
        // removes the disabled Class from all input fields
        nome.disabled = false;
        sobrenome.disabled = false;
        cargo_aplicado.disabled = false;
        rua.disabled = false;
        numero.disabled = false;
        complemento.disabled = false;
        ddd.disabled = false;
        telefone_numero.disabled = false;
        email.disabled = false;
        descricao.disabled = false;
    })
});

nome_button.addEventListener("click", () => {
    let body = {
        nome: nome.value
    }
    fetch(`/update/${id.value}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
});

sobrenome_button.addEventListener("click", () => {
    let body = {
        sobrenome: sobrenome.value
    }
    fetch(`/update/${id.value}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
});

cargo_button.addEventListener("click", () => {
    let body = {
        cargo_aplicado: cargo_aplicado.value
    }
    fetch(`/update/${id.value}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
});

endereco_button.addEventListener("click", () => {
    let body = {
        endereco: rua.value + ", " + numero.value + ", " + complemento.value
    }
    fetch(`/update/${id.value}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
});

telefone_button.addEventListener("click", () => {
    let body = {
        telefone: ddd.value + " " + telefone_numero.value
    }
    fetch(`/update/${id.value}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
});

email_button.addEventListener("click", () => {
    let body = {
        email: email.value
    }
    fetch(`/update/${id.value}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
});

descricao_button.addEventListener("click", () => {
    let body = {
        descricao: descricao.value
    }
    fetch(`/update/${id.value}`, {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });
});
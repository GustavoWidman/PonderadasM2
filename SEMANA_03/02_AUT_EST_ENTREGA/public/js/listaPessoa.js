import * as bootstrap from 'bootstrap'

form.addEventListener("submit", () => {
    fetch(`/api/list/${id.value}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        return res.json();
    }).then((json) => {
        if (json.status === "success") {
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
            ddd.value = telefone[1];
            telefone_numero.value = telefone[2];

            email.value = json.email;
            descricao.value = json.descricao;
        }

        if (json.status && json.text) {
            if (document.getElementById('list-button')) {
                const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast'))
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
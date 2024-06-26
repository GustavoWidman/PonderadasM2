import * as bootstrap from 'bootstrap'

form.addEventListener("submit", () => {
    // fetch(`/api/delete/${id.value}`, {
    //     method: "DELETE",
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }).then((res) => {
    //     return res.json();
    // }).then((data) => {
    //     if (data.status && data.text) {
    //         if (document.getElementById('remove_button')) {
    //             const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast'))
    //             if (data.status === "success") {
    //                 document.getElementById('toast-title').innerHTML = "Sucesso!"
    //                 document.getElementById('toast-text').innerHTML = data.text
    //                 document.getElementById('toast-img').src="./assets/check.svg"
    //             }
    //             else if (data.status === "error") {
    //                 document.getElementById('toast-title').innerHTML = "Erro."
    //                 document.getElementById('toast-text').innerHTML = data.text
    //                 document.getElementById('toast-img').src="./assets/wrong.svg"
    //             }
    //             toastBootstrap.show()
    //         }
    //     }
    // }).catch((err) => {
    //     console.log(err);
    // });

    var xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", `/api/delete/${id.value}`, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            var data = JSON.parse(this.responseText);
            if (data.status && data.text) {
                if (document.getElementById('remove_button')) {
                    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast'))
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
        }
    }
});
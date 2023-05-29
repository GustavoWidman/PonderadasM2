window.onload = function () {
    // METODO FETCH
    //
    // fetch("/api/list",{
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }).then((res) => {
    //     return res.json();
    // }).then((json) => {
    //     if (json.length > 0) {
    //         for (let i = 0; i < json.length; i++) {
    //             var list_group_item = document.createElement("li");
    //             list_group_item.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center text-bg-dark list-group-item-dark border-black";
    //             list_group_item.style = "--bs-border-opacity: .25"

    //             var badge = document.createElement("span");
    //             badge.className = "badge bg-primary rounded-pill";
    //             badge.innerHTML = "ID " + json[i].id_pessoa;
    //             list_group_item.append(badge);
    //             list_group_item.append(json[i].nome, " " + json[i].sobrenome)
    //             document.getElementById("list-group").append(list_group_item);
    //         }
    //     } else {
    //         var list_group_item = document.createElement("li");
    //         list_group_item.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center text-bg-dark list-group-item-dark border-black";
    //         list_group_item.style = "--bs-border-opacity: .25"

    //         document.getElementById("list-group").append(list_group_item);

    //         list_group_item.append(document.createElement("div"))
    //         list_group_item.append("Sua lista está vazia.")
    //         list_group_item.append(document.createElement("div"))
    //     }
    // })


    // METODO AJAX
    //
    // var xhttp = new XMLHttpRequest(); // cria um objeto XMLHttpRequest (AJAX)
    // xhttp.open("GET", "/api/list", true); // configura o método GET para a rota /api/list
    // xhttp.setRequestHeader("Content-Type", "application/json"); // configura o cabeçalho da requisição
    // xhttp.send(); // envia a requisição
    // xhttp.onreadystatechange = function () { // função que será executada quando o estado da requisição mudar
    //     if (this.readyState == 4) { // se o estado da requisição for 4 (DONE)
    //         var json = JSON.parse(this.responseText); // converte o texto da resposta para JSON
    //         if (json.length > 0) {
    //             for (let i = 0; i < json.length; i++) {
    //                 var list_group_item = document.createElement("li");
    //                 list_group_item.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center text-bg-dark list-group-item-dark border-black";
    //                 list_group_item.style = "--bs-border-opacity: .25"

    //                 var badge = document.createElement("span");
    //                 badge.className = "badge bg-primary rounded-pill";
    //                 badge.innerHTML = "ID " + json[i].id_pessoa;
    //                 list_group_item.append(badge);
    //                 list_group_item.append(json[i].nome, " " + json[i].sobrenome)
    //                 document.getElementById("list-group").append(list_group_item);
    //             }
    //         } else {
    //             var list_group_item = document.createElement("li");
    //             list_group_item.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center text-bg-dark list-group-item-dark border-black";
    //             list_group_item.style = "--bs-border-opacity: .25"

    //             document.getElementById("list-group").append(list_group_item);

    //             list_group_item.append(document.createElement("div"))
    //             list_group_item.append("Sua lista está vazia.")
    //             list_group_item.append(document.createElement("div"))
    //         }
    //     }
    // }

    // METODO JQUERY

    $.ajax({
        url: "/api/list",
        type: "GET",
        contentType: "application/json",
        success: function (json) {
            if (json.length > 0) {
                for (let i = 0; i < json.length; i++) {
                    var list_group_item = $("<li>").addClass("list-group-item list-group-item-action d-flex justify-content-between align-items-center text-bg-dark list-group-item-dark border-black").css("--bs-border-opacity", ".25");
                    var badge = $("<span>").addClass("badge bg-primary rounded-pill").html("ID " + json[i].id_pessoa);
                    list_group_item.append(badge);
                    list_group_item.append(json[i].nome, " " + json[i].sobrenome);
                    $("#list-group").append(list_group_item);
                }
            } else {
                var list_group_item = $("<li>").addClass("list-group-item list-group-item-action d-flex justify-content-between align-items-center text-bg-dark list-group-item-dark border-black").css("--bs-border-opacity", ".25");
                $("#list-group").append(list_group_item);
                list_group_item.append($("<div>"));
                list_group_item.append("Sua lista está vazia.");
                list_group_item.append($("<div>"));
            }
        }
    });
}
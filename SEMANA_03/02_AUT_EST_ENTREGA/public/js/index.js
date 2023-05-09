window.onload = function () {
    fetch("/api/list",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        return res.json();
    }).then((json) => {
        if (json.length > 0) {
            for (let i = 0; i < json.length; i++) {
                var list_group_item = document.createElement("li");
                list_group_item.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center text-bg-dark list-group-item-dark border-black";
                list_group_item.style = "--bs-border-opacity: .25"

                var badge = document.createElement("span");
                badge.className = "badge bg-primary rounded-pill";
                badge.innerHTML = "ID " + json[i].id_pessoa;
                list_group_item.append(badge);
                list_group_item.append(json[i].nome, " " + json[i].sobrenome)
                document.getElementById("list-group").append(list_group_item);
            }
        } else {
            var list_group_item = document.createElement("li");
            list_group_item.className = "list-group-item list-group-item-action d-flex justify-content-between align-items-center text-bg-dark list-group-item-dark border-black";
            list_group_item.style = "--bs-border-opacity: .25"

            document.getElementById("list-group").append(list_group_item);

            list_group_item.append(document.createElement("div"))
            list_group_item.append("Sua lista está vazia.")
            list_group_item.append(document.createElement("div"))
        }
    })
}
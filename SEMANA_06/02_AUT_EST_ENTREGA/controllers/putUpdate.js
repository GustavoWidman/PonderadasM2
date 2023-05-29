const db = require('../routes/db-config');
const express = require('express');

function putUpdate(req, res) {
    let body = Object.entries(req.body);
    db.serialize(() => {
        // iterates through each body element, updating the column with the same name as the element's key name and setting it to the element's value
        body.forEach(element => {
            db.run(`UPDATE pessoa SET ${element[0]} = "${element[1]}" WHERE id_pessoa = ${req.params.id}`, (err) => {
                if (err) throw err;
            });
            res.json({status: "success", text: `Informacao "${element[0]}" de ID ${req.params.id} atualizada para "${element[1]}" com sucesso!`});
        });
    });
}

module.exports = putUpdate;
const db = require('../routes/db-config');
const express = require('express');

function list(req, res) {
    db.serialize(() => {
        db.get(`SELECT * FROM pessoa WHERE id_pessoa = ${req.params.id}`, (err, result) => {
            if (err) throw err;
            if (result == undefined) res.json({status: "error", text: `ID ${req.params.id} não existe!`});
            else {
                result.status = "success";
                result.text = `Tabela com ID ${req.params.id} retornada com sucesso!`;
                res.json(result);
            };
        });
    });
}

module.exports = list;
const db = require('../routes/db-config');
const express = require('express');

function deleteModule(req, res) {
    db.serialize(() => {
        db.get(`SELECT * FROM pessoa WHERE id_pessoa = ${req.params.id}`, (err, result) => {
            if (err) throw err;
            if (result == undefined) res.json({status: "error", text: `ID ${req.params.id} não existe!`});
            else {
                db.run(`DELETE FROM pessoa WHERE id_pessoa = ${req.params.id}`, (err) => {
                    if (err) throw err;
                    return res.json({status: "success", text: `Tabela com ID ${req.params.id} apagada com sucesso!`});
                });
            }
        });
    });
}

module.exports = deleteModule;
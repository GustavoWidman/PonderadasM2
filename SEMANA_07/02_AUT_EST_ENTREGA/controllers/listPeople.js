const db = require('../routes/db-config');
const express = require('express');

function listPeople(req, res) {
    db.serialize(() => {
        db.all(`SELECT * FROM pessoa`, (err, result) => {
            if (err) throw err;
            if (result == undefined) res.json({status: "error", text: `Não há pessoas!`});
            else {
                result.status = "success";
                result.text = `Tabela retornada com sucesso!`;
                res.json(result);
            };
        });
    });
}

module.exports = listPeople;
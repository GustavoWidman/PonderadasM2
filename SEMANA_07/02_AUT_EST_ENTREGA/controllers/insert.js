const db = require('../routes/db-config');
const express = require('express');

function insert(req, res) {
    db.serialize(() => {
        db.get(`SELECT MAX(id_pessoa) AS id FROM pessoa`, (err, result) => {
            id = result.id + 1;
            db.get(`SELECT * FROM pessoa WHERE id_pessoa = ${id}`, (err, result) => {
                if (err) throw err;
                if (result == undefined) {
                    db.run(`INSERT INTO pessoa VALUES (
                        "${id}",
                        "${req.body.nome}",
                        "${req.body.sobrenome}",
                        "${req.body.cargo_aplicado}",
                        "${req.body.endereco}",
                        "${req.body.telefone}",
                        "${req.body.email}",
                        "${req.body.descricao}"
                        )`, (err) => {
                        if (err) throw err;
                        res.json({
                            status: "success",
                            text: `Tabela com ID ${id} inserida com sucesso!`
                        });
                    });
                } else res.send("ID ALREADY EXISTS");
            });
        });
    });
}

module.exports = insert;
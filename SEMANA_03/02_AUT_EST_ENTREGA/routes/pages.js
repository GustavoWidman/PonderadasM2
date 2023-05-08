const express = require('express'); // This is to load the express module
// const loggedIn = require("../controllers/loggedIn")
// const logout = require("../controllers/logout")
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const db = require('../routes/db-config');
const { parse } = require('path');
const router = express.Router(); // This is to create a router object

// Home Page Route
router.get("/", (req, res) => {
    res.sendFile('index.html', {root: './public'});
})

// FRONT

router.get("/list", (req, res) => {
    res.sendFile('listaPessoa.html', {root: './public'});
});

router.get("/insert", (req, res) => {
    res.sendFile('inserePessoa.html', {root: './public'});
});

router.get("/delete", (req, res) => {
    res.sendFile('deletePessoa.html', {root: './public'});
});

router.get("/update", (req, res) => {
    res.sendFile('updatePessoa.html', {root: './public'});
});

// BACK

router.get("/list/:id", urlencodedParser, (req, res) => {
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
});

router.post("/insert/submit", urlencodedParser, (req, res) => {
    console.log("PASSING THROUGH")
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
});

router.delete("/delete/:id", (req, res) => {
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
            console.log(result)
        });
    });
});

router.get("/update/:id", (req, res) => {
    db.serialize(() => {
        db.get(`SELECT * FROM pessoa WHERE id_pessoa = ${req.params.id}`, (err, result) => {
            if (err) throw err;
            if (result == undefined) res.json({status: "error", text: `ID ${req.params.id} não existe!`});
            else {
                // adds status and text to the result object
                result.status = "success";
                result.text = `Tabela com ID ${req.params.id} retornada com sucesso!`;
                res.json(result);
            }
        });
    });
});

router.put("/update/:id", urlencodedParser, (req, res) => {
    let body = Object.entries(req.body);
    db.serialize(() => {
        // iterates through each body element, updating the column with the same name as the element's key name and setting it to the element's value
        body.forEach(element => {
            db.run(`UPDATE pessoa SET ${element[0]} = "${element[1]}" WHERE id_pessoa = ${req.params.id}`, (err) => {
                if (err) throw err;
            });
            console.log("updated " + element[0] + " to " + element[1])
        });
    });
    res.send("UPDATED ID " + req.params.id + "'s INFO");
    res.json({status: "success", text: `Tabela com ID ${req.params.id} apagada com sucesso!`});
});

module.exports = router;
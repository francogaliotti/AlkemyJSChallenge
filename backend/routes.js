const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM record', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
})
routes.post('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('INSERT INTO record SET ?',[req.body], (err, rows) => {
            if (err) return res.send(err)
            res.send('record uploaded')
        })
    })
})
routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('DELETE FROM record WHERE idrecord = ?',[req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.send('record deleted')
        })
    })
})
routes.put('/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('UPDATE record SET ? WHERE idrecord = ?',[req.body, req.params.id], (err, rows) => {
            if (err) return res.send(err)
            res.send('record updated')
        })
    })
})
module.exports = routes;
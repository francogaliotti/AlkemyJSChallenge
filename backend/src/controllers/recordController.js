const getAllRecords = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM record', (err, rows) => {
            if (err) return res.send(err)
            res.json(rows)
        })
    })
}
const createRecord = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        if (req.body.amount < 0) {
            res.status(400).json({
                error: 'the amount cannot be negative'
            })
        } else {
            conn.query('INSERT INTO record SET ?', [req.body], (err, rows) => {
                if (err) return res.send(err)
                res.send('record uploaded')
            })
        }
    })
}
const deleteRecord = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM record WHERE idrecord = ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)
            if (rows == "") {
                res.status(404).json({
                    error: "record not found"
                })
            } else {
                conn.query('DELETE FROM record WHERE idrecord = ?', [req.params.id], (err, rows) => {
                    if (err) return res.send(err)
                    res.send('record deleted')
                })
            }
        })
    })
}
const updateRecord = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)
        conn.query('SELECT * FROM record WHERE idrecord = ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)
            if (rows == "") {
                res.status(404).json({
                    error: "record not found"
                })
            } 
            else if (req.body.amount < 0) {
                res.status(400).json({
                    error: 'the amount cannot be negative'
                })
            } else {
                conn.query('UPDATE record SET ? WHERE idrecord = ?', [req.body, req.params.id], (err, rows) => {
                    if (err) return res.send(err)
                    res.send('record updated')
                })
            }
        })
    })
}
module.exports = {
    getAllRecords,
    createRecord,
    updateRecord,
    deleteRecord
}
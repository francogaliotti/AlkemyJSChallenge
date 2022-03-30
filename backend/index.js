const express = require('express');
const mysql = require('mysql');
const myconnection = require('express-myconnection')
const app = express();
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'budget-app'
}

//settings
app.set('port', process.env.PORT || 3000);

//middleware
app.use(myconnection(mysql, dbOptions, 'single'))

//routes
app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

//start server
app.listen(app.get('port'),() => {
    console.log("Server on port", app.get('port'))
})
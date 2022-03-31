const express = require('express');
const mysql = require('mysql');
const myconnection = require('express-myconnection');
const routes = require('./routes')
const app = express();
const dbOptions = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '1234',
    database: 'budget-app'
}

//settings
app.set('port', process.env.PORT || 8080);

//middleware
app.use(myconnection(mysql, dbOptions, 'single'))
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('Welcome to my API')
})
app.use('/api',routes);

//start server
app.listen(app.get('port'),() => {
    console.log("Server on port", app.get('port'))
})
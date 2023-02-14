const express = require('express');
const app = express();
const mysql2 = require('mysql2')
const cors = require('cors')
const port = 5000;

app.use(express.json());
app.use(cors());

const db = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'superuser',
    database: 'Employee'
})
db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});


app.get('/api/getImp', (req, res) => {
    const sqlData = "SELECT * FROM EmployeeInfo "
    db.query(sqlData, (err, result) => {
        res.send(result)
    })

})

app.post('/api/getEmpDetail', (req, res) => {
    console.log(req.body)
    const { id } = req.body
    const sqlData = "SELECT * FROM EmployeeInfo where ID=?"
    db.query(sqlData, [id], (err, result) => {
        res.send(result)
    })
})

app.post('/api/editEmp', (req, res) => {
    console.log(req.body)
    const { id, name, mobile, email } = req.body
    const sqlUpdate = "UPDATE EmployeeInfo SET Name =  ?, MobileNo= ? ,Email=? WHERE Id = ?;"
    db.query(sqlUpdate, [name, mobile, email, id], (err, result) => {
        res.send(result)
    })
})

app.post('/api/deleteImp', (req, res) => {
    const { id } = req.body
    console.log(req.body)
    const sqlDelete = " DELETE FROM EmployeeInfo WHERE ID=?"
    db.query(sqlDelete, [id], (err, result) => {
        res.send(result)

    })
})
app.post('/api/addEmp', (req, res) => {
    console.log(req.body)

    const { name, mobile, email } = req.body;
    // if (id!=0) {
    //     const sqlInsert = "UPDATE EmployeeInfo SET Name =  ?, MobileNo= ? ,Email=? WHERE Id = ?;"
    //     db.query(sqlInsert, [name, mobile, email, id], (err, result) => {
    //         res.send(result)
    //     })
    // } else {
    const sqlInsert = " INSERT INTO EmployeeInfo (Name,MobileNo,Email) VALUES (?,?,?) "
    db.query(sqlInsert, [name, mobile, email], (err, result) => {
        res.send(result)
    })
    // }

})


app.get('/', (req, res) => {
    res.send('server is runnning')
})

app.listen(port, () => console.log(`server is running at http://localhost:${port}`))
const express = require('express');
const bodyParser = require('body-parser');
const StudentVue = require('./vue.js');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "StudentVUE API by Logandev_ and kachang"});
});

app.post('/getStudentInfo', (req, res) => {
  console.log("index.js: getStudentInfo requested, summoning vue.js")
    if(!req.body.id) {
        return res.status(400).send({
            message: "id content can not be empty"
        });
    }
    if(!req.body.password) {
        return res.status(400).send({
            message: "id content can not be empty"
        });
    }
    if(!req.body.url) {
        return res.status(400).send({
            message: "id content can not be empty"
        });
    }
    StudentVue.getStudentInfo(req.body.id, req.body.password, req.body.url).then(resp => res.send(resp))
})

app.post('/getSchoolInfo', (req, res) => {
    if(!req.body.id) {
        return res.status(400).send({
            message: "id content can not be empty"
        });
    }
    if(!req.body.password) {
        return res.status(400).send({
            message: "id content can not be empty"
        });
    }
    if(!req.body.url) {
        return res.status(400).send({
            message: "id content can not be empty"
        });
    }

    StudentVue.getSchoolInfo(req.body.id, req.body.password, req.body.url).then(resp => res.send(resp))
})

app.post('/getClasses', (req, res) => {
    if(!req.body.id) {
        return res.status(400).send({
            message: "id content can not be empty"
        });
    }
    if(!req.body.password) {
        return res.status(400).send({
            message: "id content can not be empty"
        });
    }
    if(!req.body.url) {
        return res.status(400).send({
            message: "id content can not be empty"
        });
    }

    StudentVue.getClasses(req.body.id, req.body.password, req.body.url).then(resp => res.send(resp))
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

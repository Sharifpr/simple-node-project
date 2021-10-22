const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!!!!! I am coming.My Name is Sharif Ahmed.')
})

users = [
    { id: 0, name: "SHraif ahmed", email: "sharif532@gmail.com" },
    { id: 1, name: "abdul kadir kodor", email: "abdulkadir@gmail.com" },
    { id: 2, name: "hujaifa hussain", email: "hujaifahusssain@gmail.com" },
    { id: 3, name: "Mahfuz", email: "mahfuz@gmail.com" },
    { id: 4, name: "fatch ahmed", email: "fatch545@gmail.com" }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }

});


app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log("hitting the post", req.body);
    res.json(newUser)
})


app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})


app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'banna', 'jam', 'katol'])
})

app.get('/fruits/mangoes/fazil', (req, res) => {
    res.send('this mangso is soo tok')
})


app.listen(port, () => {
    console.log("Hello", port);
})
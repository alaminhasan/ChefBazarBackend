const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;



const chef = require("./data/chef.json")

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is running')
});


//this is my own
app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedchef = chef.find(n => n.id === id);
    res.send(selectedchef)
})






app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})
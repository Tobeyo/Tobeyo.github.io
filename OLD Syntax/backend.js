const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let messages = [];

app.get('/chat', (req, res) => {
    res.json(messages);
});

app.post('/chat', (req, res) => {
    const { message } = req.body;
    if (message) {
        messages.push(message);
        res.status(201).send({ success: true });
    } else {
        res.status(400).send({ error: 'Nachricht fehlt!' });
    }
});

app.listen(3000, () => console.log('Server läuft auf Port 3000'));
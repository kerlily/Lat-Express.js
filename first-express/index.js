const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('Hello World');
//     res.send({ message : 'Hello mek,',
//         date : new Date()
//     });
// });

app.get('/', (req, res) => {
    res.send('Halaman home');
});

app.get('/cats', (req, res) => {
    res.send('Meow rawr galak');
});

app.post('/cats', (req, res) => {
    res.send('Purr');
});

app.get('/blog/:id', (req, res) => {
    const {id} = req.params;
    res.send(`Update blog ${id}`);
});

app.get('/blog/:category/:id/:name', (req, res) => {
    const {category, id, name} = req.params;
    res.send(`blod did category ${category} lalu ${id} dan ${name}`);
});

app.get('/about', (req, res) => {
    res.send('About page');
})

app.get('/search', (req, res) => {
    // console.log(req.query);
    const {q} = req.query;
    if (!q) {
        res.send('Masukkan kata kunci');
    }
    res.send(`Hasil pencarian ${q}`);
});

// jangan taro atas soalnya bakall ketimpa anjay
app.get('*', (req, res) => {
    res.send('404');
});

app.listen(8080, () => {
    console.log('Server running on port http://localhost:8080');
});


const express = require('express');
const app = express();

app.use(() => {
    console.log('Hello World');
});

app.listen(8080, () => {
    console.log('Server running on port http://localhost:8080');
});


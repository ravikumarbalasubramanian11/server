const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('Request to /log received.', req);
    res.send('Logged to console.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

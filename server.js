const express = require('express');
const app = express();

app.use(express.static('./')); // exposes all file in the project

app.listen(3000, () => {
    console.log('server is running')
})
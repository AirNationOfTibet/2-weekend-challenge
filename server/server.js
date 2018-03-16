let express = require('express');
let app = express();

const PORT = process.env.PORT ||  5000;

app.use (express.static('server/public'));

app.listen(PORT, () =>{
    console.log('port is working on ', PORT);
})


let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT ||  5000;

app.use(express.static('server/public'));

app.listen(PORT, () =>{
    console.log('port is working on ', PORT);
})


let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let questionArray = [];

app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT ||  5000;

app.use(express.static('server/public'));

app.post('/math', (req, res) =>{
    let mathFunction = req.body;
    console.log(req.body);
    operatorChange(mathFunction);
    console.log(questionArray);
    res.send(200);
});

app.post('/clearer', (req, res) =>{
    let shouldClear = req.body;
    console.log(req.body);
    if(shouldClear.clearData === true){
        questionArray = [];
    } else {
        questionArray = [];
    }
    console.log(questionArray);
    res.send(200);
});

app.get('/math', (req, res) => {
    res.send(questionArray);
});

function operatorChange(aFunction) {
    if (aFunction.third === "+"){
        let equationAnswer = parseInt(aFunction.first) + parseInt(aFunction.second);
        questionArray.push(aFunction.first + aFunction.third + aFunction.second + "=" + equationAnswer)
    } else if (aFunction.third === "-"){
        equationAnswer = parseInt(aFunction.first) - parseInt(aFunction.second);
        questionArray.push(aFunction.first + aFunction.third + aFunction.second + "=" + equationAnswer)
    } else if (aFunction.third === "*"){
        equationAnswer = parseInt(aFunction.first) * parseInt(aFunction.second);
        questionArray.push(aFunction.first + aFunction.third + aFunction.second + "=" + equationAnswer)
    } else if (aFunction.third === "/"){
        equationAnswer = parseInt(aFunction.first) / parseInt(aFunction.second);
        questionArray.push(aFunction.first + aFunction.third + aFunction.second + "=" + equationAnswer)
    }
}

app.listen(PORT, () =>{
    console.log('port is working on ', PORT);
})


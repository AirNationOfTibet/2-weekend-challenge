$( document ).ready( readyNow );


function readyNow(){
    console.log('document ready!');
    $('#buttonPlus').on('click', addPlus);
    $('#buttonMinus').on('click', addMinus);
    $('#buttonMult').on('click', addMult);
    $('#buttonDivd').on('click', addDivd);
    $('#clear').on('click', clearHistory);
}

function getAllMath(){
    $.ajax({
        type: 'GET',
        url: '/math',
    }).done(function(response){
        appendToDom(response);
        console.log('hello its working');
    })
}


function appendToDom(questionArray) {
    $('#container').empty();
    console.log(questionArray);
    for(let math of questionArray) {
        let tr = $('<tr></tr>');
            tr.append('<td>' + math + '</td>');
        $('#container').append(tr);
        console.log(math);
    }
 }

 function clearHistory(){
     let clearSend = {clearData: true};
    $.ajax({
        type: 'POST',
        data: clearSend,
        url: '/clearer'
    }).done(function(response){
        console.log('success!');
        getAllMath();
    }).fail(function(response){
        alert('somehting went wrong..');
    })
}

function addPlus(){
    let inputOne = $("#inputOne").val();
    let inputTwo = $("#inputTwo").val();
    let inputToSend = {first: inputOne, second: inputTwo, third: "+"};
    $.ajax({
        type: 'POST',
        data: inputToSend,
        url: '/math'
    }).done(function(response){
        console.log('success!');
        getAllMath();
    }).fail(function(response){
        alert('somehting went wrong..');
    })

}

function addMinus(){
    let inputOne = $("#inputOne").val();
    let inputTwo = $("#inputTwo").val();
    let inputToSend = {first: inputOne, second: inputTwo, third: "-"};
    $.ajax({
        type: 'POST',
        data: inputToSend,
        url: '/math'
    }).done(function(response){
        console.log('success!');
        getAllMath();
    }).fail(function(response){
        alert('somehting went wrong..');
    })
}

function addMult(){
    let inputOne = $("#inputOne").val();
    let inputTwo = $("#inputTwo").val();
    let inputToSend = {first: inputOne, second: inputTwo, third: "*"};
    $.ajax({
        type: 'POST',
        data: inputToSend,
        url: '/math'
    }).done(function(response){
        console.log('success!');
        getAllMath();
    }).fail(function(response){
        alert('somehting went wrong..');
    })

}

function addDivd(){
    let inputOne = $("#inputOne").val();
    let inputTwo = $("#inputTwo").val();
    let inputToSend = {first: inputOne, second: inputTwo, third: "/"};
    $.ajax({
        type: 'POST',
        data: inputToSend,
        url: '/math'
    }).done(function(response){
        console.log('success!');
        getAllMath();
    }).fail(function(response){
        alert('somehting went wrong..');
    })

}

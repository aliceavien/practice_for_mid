function processMark(){
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;

    var mark = parseInt(document.getElementById('markBox').value);
    
    if(mark >= 50){
        var newDiv = document.getElementById('markContainer')
        newDiv.innerHTML = `
        <h1>Congratulation! you have passed the exam ${firstName} ${lastName}.</h1>
        `
    }
    else if(mark <= 50 && mark >= 20){
        var newDiv = document.getElementById('markContainer')
        newDiv.innerHTML = `
        <h1>You have failed the exam ${firstName} ${lastName}. But try again next time.</h1>
        `
    }
    else{
        var newDiv = document.getElementById('markContainer')
        newDiv.innerHTML = `
        <h1>Fuck off ${firstName} ${lastName}. You have no future.</h1>
        `
    }
}
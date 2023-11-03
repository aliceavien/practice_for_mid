
function processMark(){
  var firstName = document.getElementById('fname').value;
  var lastName = document.getElementById('lname').value;

  var mark = Number(document.getElementById('markBox').value);

  if(mark >= 50){
    var newDiv = document.getElementById('markContainer')
    newDiv.innerHTML = `
      <h1><span class = 'textStyle'>Congratulation!</span> you have passed the exam ${firstName} ${lastName}.</h1>
    `
  } else if(mark <= 50 && mark >= 20){
    var newDiv = document.getElementById('markContainer')
    newDiv.innerHTML = `
      <h1>You have failed the exam ${firstName} ${lastName}. But try again next time.</h1>
    `
  } else{
    var newDiv = document.getElementById('markContainer')
    newDiv.innerHTMLt = `
      <h1>You have no future.</h1>
    `
  }

  document.getElementById('fname').value = ""
  document.getElementById('lname').value = ""
  document.getElementById('markBox').value = ""
}

function disappear(){
  document.getElementById('markContainer').textContent = ""
}

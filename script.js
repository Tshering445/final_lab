deleteButton = document.getElementById('deleteStudentButton');
// add an event listener to delete the last row/student on double clicking the deleteButton
document.addEventListener("dbclick", validateForm())

button = document.getElementById('addStudentButton' );
// add an event listener to style the button on click
document.addEventListener("click", validateForm())

function showNewStudentForm(){

}

function validateForm(){
    // validate your form
    //regex for name: /^[A-Za-z]+(?: [A-Za-z]+)*$/  allows names habving one or more words with one white spaces in between
    // regex for email:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    // regex for student id: /^[a-zA-Z0-9]{7}$/  accepts alphanumeric values of 7 characters
var name = document.getElementById('name').value;
var email = document.getElementById('email').value;
var StudentID = document.getElementById('student ID')
var age = document.getElementById('age')

var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var namepattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/
var StudentIDpattern = /^[a-zA-Z0-9]{7}$/
var agepattern=/^[0-9]+>100[-(0-9)]$/

if (!emailPattern.test(email)) {
    alert('invalid email address.')
        return false;
}

if(!namepattern.test(name)) {
    alert('invalid person name');
        return false;
}


if(!StudentIDpattern.test(StudentID)) {
    alert('invaild student Id');
        return false;
}

if(!agepattern.test(age)) {
    alert('invaild Age');
        return false;
}
return false;
}
        
    







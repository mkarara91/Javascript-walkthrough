//run in browser
//different contexts of this

var firstName = "Peter",
    lastName = "Ally";

function showFullName () {
    console.log (this.firstName + " " + this.lastName);
}

var person = {
    firstName   :"Penelope",
    lastName    :"Barrymore",
    showFullName:function () {
        console.log (this.firstName + " " + this.lastName);
    }
}

showFullName (); 

window.showFullName ();

person.showFullName (); 
//applying this in a different object

var person = {
    firstName   :"Penelope",
    lastName    :"Barrymore",
    showFullName:function () {
        console.log (this.firstName + " " + this.lastName);
  }
 }

 person.showFullName ();
 
 var anotherPerson = {
 firstName   :"Rohit",
 lastName    :"Khan"
 };
 
// not reccomended just to clarify this context
 person.showFullName.apply (anotherPerson);
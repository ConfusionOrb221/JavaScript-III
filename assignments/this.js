/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window
* 2. object parent
* 3. function key definition
* 4. refence constructor
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
//this will log the entire window object of the browser;
// Principle 2
const name = "bro";

const hero = {
    name: "Nathan",
    sayName : function(){console.log(this.name);} 
    //this this will look into the name of the object, so this would print Nathan not bro
}
// code example for Implicit Binding

// Principle 3
function ImAConstructor(attr){
    this.name = attr.name;
    this.child = arr.child; //this this tells the object that the name is a key value of the function.
}
// code example for New Binding

// Principle 4
function IAmAConstructorBeingPassed(attr){
    ImAConstructor.call(this, attr); //this passes the function into the previous constructor
}
// code example for Explicit Binding
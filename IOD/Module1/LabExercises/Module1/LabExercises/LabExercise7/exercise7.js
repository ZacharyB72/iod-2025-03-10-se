//This function adds two numbers
function sum(a, b) {
  console.log(a + b);

  return a + b;
}

sum(5, 1);

//test1
if (sum(5, 1) != 6) {
  error;
}

//This function subtracts numbers
function sub(a, b) {
  console.log(a - b);

  return a - b;
}

sub(5, 1);

//test 2
if (sub(5, 1) <= 0) {
  error;
}

//This function multiplies numbers
function mult(a, b) {
  console.log(a * b);

  return a * b;
}

mult(5, 2);

//test3 compare value of two functions
if (mult(5, 1) <= sub(5, 1)) {
  error;
}

//This function divides numbers
function div(a, b) {
  console.log(a / b);

  return a / b;
}

div(6, 3);

function sayHello(Name) {
  return "Hello " + Name;
}

const message = sayHello("Zachary");
console.log(message);

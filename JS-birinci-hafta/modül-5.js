function greet(name) {
  console.log(`Welcome ${name}!`);
}
function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}
registerGuest("Negin", greet);

function deliverPizza() {
  return `Delivering ${pizzaName} pizza.`;
}

function pizzaName() {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

//__________________________________________________________

const numbers = [2, 5, 7, 4];
numbers.forEach(function (number) {
  console.log(number);
});

function filterArray(numbers, value) {
  const filteredNumbers = [];

  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
}

console.log(filterArray([12, 24, 8, 41, 76], 20));

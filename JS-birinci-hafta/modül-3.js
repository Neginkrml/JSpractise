const fruits = ["apple", "plum", "pear", "orange", "pineapple"];
console.log(fruits);

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElementIndex = fruits.length - 1;
console.log(firstElement);
console.log(secondElement);
console.log(lastElementIndex);
console.log(fruits[lastElementIndex]);

const fruitsLength = fruits.length;
console.log(fruitsLength);

if (fruits.length <= 4) {
  console.log("Bu array max 4 elemandan ibaretdir");
} else {
  console.log("Bu array 5 veya daha çok elemana sahip");
}

function getOrdery(order) {
  return order.length;
}

console.log(getOrdery(["apple", "plum", "pear", "orange", "pineapple"]));
console.log(getOrdery(["Earth", "Mars", "Venus"]));

const kizlar = ["Negin", "Yeşim", "Dilara", "Sümeyye"];
const erkekler = ["Gündüz", "Alper", "Ertuğrul", "Altinay"];

const ortalama = (kizlar.length + erkekler.length) / 2;
console.log(ortalama);

const gumball = ["Guball's", "amazing", "world"];
console.log(gumball.join(" "));
console.log(gumball.join(" - "));

const message = "JavaScript-essentials";
console.log(message.split(""));
console.log(message.split("-"));

function calculateEngravingPrice(message, pricePerWord) {
  const wordCount = message.split(" ").length;
  const totalPrice = wordCount * pricePerWord;
  return totalPrice;
}

console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

console.log(fruits.slice(1, 3));
console.log(fruits.slice(-2));

const planets1 = ["Earth", "Mercury", "Venus"];
const planets2 = ["JUpiter", "Mars"];
const result = planets1.concat(planets2);
const result2 = planets1.concat(planets1);
console.log(result);
console.log(result2);

console.log(result.indexOf("Venus"));

const books = [];
const newBooks = [
  "Sanatçının yolu",
  "Milyoner aklın sırları",
  "Deyimler ve Atasözleri",
  "Kuran",
  "Zambaklar ülkesinde",
  "Simyacı",
];

if (books.length + newBooks.length <= 5) {
  books.push(...newBooks);
} else {
  console.log("Rafta yeterli yer yok");
}

console.log(books);

function getEvenNumbers(start, end) {
  const evenNumbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}
console.log(getEvenNumbers(3, 11));

console.log(fruits.includes("appleberry"));
console.log(fruits.includes("pineapple"));

for (const fruit of fruits) {
  console.log(fruit);
}

console.log("________________________");

for (const planet of result) {
  console.log(planet);
}

function sum(a, b) {
  console.log(arguments);
  return a + b;
}
console.log(sum(2, 5));

function foo() {
  const args = Array.from(arguments);
  return args.join("-");
}

console.log(foo(1, 2, 3));

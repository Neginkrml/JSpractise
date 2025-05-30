let productName = "Droid";
productName = "Repair droid";
let pricePerItem = 2000;
pricePerItem = 3500;
let orderedQuantity = 4;
const totalPrice = pricePerItem * orderedQuantity;
console.log(totalPrice);

console.log(productName);
console.log(pricePerItem);

const topSpeed = 160;
const login = "mango935";
const isOnline = true;

console.log(typeof topSpeed);
console.log(typeof login);
console.log(typeof isOnline);

const yas = 30;
const isim = "Yeşim";
console.log(`${isim}, ${yas}.cu yaş günün kutlu olsun`);

const message = `You picked ${productName}, price per item is ${pricePerItem} $`;
console.log(message);
console.log(message.length); //! Karakter sayısın verir
console.log(message[6]); //! Köşeli parantez sayısı içindeki indeksi verir

const lastindex = message.length - 1;
console.log(lastindex); //! Sonunncu index kaçsa onun sıra sayısını verir yani çıktı bir rakam

const lastindexP = message[message.length - 1];
console.log(lastindexP); //! Sonuncu indexe denk gelen harfi verir yani sıra numarası vermez deger verir

const age = 25;
const isAdult = age >= 18;
console.log(isAdult);

const correctPassword = "jqueryismyjam";
const userPassword = "mangodab3st";
const isValid = userPassword === correctPassword;
console.log(isValid);

console.log(Number.parseInt("26hdjs45")); //! 26
console.log(Number.parseFloat("12.46qwe79")); //! 12.46

console.log(Math.floor(2.7)); //! 2
console.log(Math.ceil(4.5)); //! 5
console.log(Math.round(5.8)); //! 6
console.log(Math.max(20, 10, 50, 40)); //! 50
console.log(Math.min(20, 10, 50, 40)); //! 10

function lale() {
  console.log("Seni Lale Lale , düştük ne haale haaale");
}
lale();

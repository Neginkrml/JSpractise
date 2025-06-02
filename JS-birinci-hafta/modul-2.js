avilable = 500;
ordered = 260;

function checkStorage(avilable, ordered) {
  if (ordered > avilable) {
    return "Not enough goods in stock!";
  } else {
    return "Order is processed, our manager will contact you.";
  }
}

console.log(checkStorage(avilable, ordered));

const grade = 85;
if (grade >= 90) {
  console.log("Perfectly");
} else if (grade >= 80) {
  console.log("Good");
} else if (grade >= 70) {
  console.log("Satisfactorily");
} else {
  console.log("Unsatisfactorily");
}

// function checkPassword(password) {
//   const correctPassword = "elmarmut";

//   return password === correctPassword
//     ? "Access granted"
//     : "Access denied, wrong password !";
// }

// console.log(checkPassword("laleleyla"));

const fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("Apple selected");
    break;
  case "banana":
    console.log("Banana selected");
    break;
  case "orange":
    console.log("Orange selected");
    break;
  default:
    console.log("The fruit is unknown");
}

const message = "  Kirpi yavrusunun severken yumuşağım dermiş";

console.log(message.length);
console.log(message.toLowerCase());
console.log(message.toUpperCase());
console.log(message.slice(6, 16));
console.log(message.includes("Kirpi"));
console.log(message.startsWith("Ağaç"));
console.log(message.endsWith("dermiş"));
console.log(message.indexOf("sev"));
console.log(message.trim());

function checkPasswordStrength(password) {
  const longEnough = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUpper = /[A-Z]/.test(password);

  if (longEnough && hasNumber && hasUpper) {
    return "Güçlü şifre ";
  } else if (longEnough && (hasNumber || hasUpper)) {
    return "Orta seviye şifre ";
  } else {
    return "Zayıf şifre ";
  }
}
console.log(checkPasswordStrength("Elmar123"));

function remindMe(task, date) {
  return `${new Date(date).toLocaleDateString()} tarihinde yapılacak: ${task}`;
}
console.log(remindMe("Sunum hazırla", "2025-06-05"));

function generateEmail(firstName, lastName) {
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
  return email;
}
console.log(generateEmail("Dilara", "Aydemir"));

//__________________________________________

let count = 0;
while (count < 10) {
  console.log(`Count: ${count}`);
  count += 1;
}

let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

count = 0;
do {
  console.log(`Count: ${count}`);
  count += 1;
} while (count < 5);

for (let i = 20; i >= 0; i -= 5) {
  console.log(i);
}

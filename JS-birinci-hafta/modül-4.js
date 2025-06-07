const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
console.log(apartment);
console.log(apartment.descr);

console.log(apartment["owner"]);

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
console.log(user.location.country);

const firstTags = apartment.tags[0];
const lastTags = apartment.tags.length - 1;
console.log(firstTags);
console.log(lastTags);

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");
apartment.color = "pink";

console.log(apartment);

const isim = "Negin";
const soyisim = "Kerimli";
const yaş = 21;
const bizimKiz = {
  isim,
  soyisim,
  yaş,
};
console.log(bizimKiz);

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};
console.log(credentials); // bu daha dinamik bir nesnedir

for (ozellik in apartment) {
  console.log(ozellik);
}

console.log(
  "___________________________________________________________________________"
);

const kitap = {
  başlık: "Yüzüklerin Efendisi",
  yazar: "J.R.R. Tolkien",
  yayınevi: "Metis",
  sayfaSayısı: 1137,
  tür: "Fantastik",
};

const keys = Object.keys(kitap);
for (const key of keys) {
  console.log(key);
  console.log(kitap[key]);
}

const values = Object.values(kitap);
console.log(values);

for (const value of values) {
  console.log(value);
}

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
];

for (const book of books) {
  //   console.log(book);
  console.log(book.title);
  //   console.log(book.author);
  //   console.log(book.rating);
}

let totalRating = 0;
for (const book of books) {
  totalRating += book.rating;
}
const averageRating = totalRating / books.length;
console.log(averageRating);

const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];

for (const color of colors) {
  hexColors.push(color.hex);
  console.log(hexColors);
  rgbColors.push(color.rgb);
  console.log(rgbColors);
}

const televizyonlar = {
  Samsung: {
    model: "QLED Q80A",
    boyut: 55,
    smartTV: true,
    özellikler: {
      çözünürlük: "4K",
      HDMIport: 4,
      sesSistemi: "Dolby Atmos",
    },
  },
  LG: {
    model: "OLED C1",
    boyut: 65,
    smartTV: true,
    özellikler: {
      çözünürlük: "4K",
      HDMIport: 3,
      sesSistemi: "AI Sound Pro",
    },
  },
  Philips: {
    model: "Ambilight 7000",
    boyut: 50,
    smartTV: true,
    özellikler: {
      çözünürlük: "Full HD",
      HDMIport: 2,
      sesSistemi: "DTS Sound",
    },
  },
};

const makyajÜrünleri = {
  ürünler: ["Ruj", "Rimel", "Gloss"],
  getUrunler() {
    // console.log(this);
    return this.ürünler;
  },
};
// makyajÜrünleri.getUrunler();
console.log(makyajÜrünleri.getUrunler());

const atTheOldToad = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return "List of all available potions";
  },
};
console.log(atTheOldToad.getPotions());

const atTheOldToadd = {
  potions: ["Speed potion", "Stone skin"],
  getPotions() {
    return this.potions;
  },
};
atTheOldToadd.getPotions();

const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  },
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]

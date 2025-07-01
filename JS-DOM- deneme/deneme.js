const listWithId = document.querySelector("#menu");
listWithId.style.textTransform = "uppercase";
listWithId.style.fontSize = "24px";
const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName);
// console.log(listWithId);

//______________________________________________________________

const link = document.querySelector(".link");
console.log(link.href);

// textContet - eleman metin içeriğini görmeye ve ya  değiştirmeye güncellemeye destek oluyo
const el = document.querySelector(".text");
const nested = document.querySelector(".sub-text");
console.log(el.textContent);
console.log(nested.textContent);
nested.textContent = "Poly";

// classList - CSS sınıflarını okumak, eklemek, silmek veya varlığını kontrol etmek için

console.log(link.classList);

// classList.contains(className)- sınıfının elemanda varsa true yoksa false
const menuLi = document.querySelector("li");
const hasCls = menuLi.classList.contains("elma");
const hasCls1 = menuLi.classList.contains("meysu");
const hasCls2 = menuLi.classList.contains("menu-item");
console.log(hasCls);
console.log(hasCls1);
console.log(hasCls2);

//classList.add(className)- sınıf adını elemanın sınıf listesine ekler
link.classList.add("ayşegül");
console.log(link.classList);

//classList.remove(className)- verilen sınıf adını öğenin sınıf listesinden kaldırır
//classList.toggle(className) - yoksa, onu sınıf listesine ekler varsa kaldırır
//classList.replace(oldClassName, newClassName)-mevcut oldClassName sınıfını belirtilen newClassName ile değiştirir.

//?hasAttribute(): Bir HTML özniteliği var mı diye kontrol eder (true/false döner).
//?getAttribute(): Belirtilen özniteliğin değerini alır.
//?setAttribute(): Belirtilen özniteliğe yeni bir değer atar veya mevcutsa değiştirir.
//?removeAttribute(): Belirtilen özniteliği siler/kaldırır

//? DATASET
//?Veriyi okuma: element.dataset.action → Butondaki data-action değerini alır.
//?Veriyi değiştirme: element.dataset.action = "update" → Mevcut data-action değerini değiştirir.
//?Yeni veri ekleme: element.dataset.role = "admin" → Yeni bir data-role özelliği ekler.
//?Veriyi silme: delete element.dataset.action → data-action özelliğini kaldırır.

//_____________________________________________________________________________________________________________

const heading = document.createElement("h1");
heading.classList.add("title");
heading.textContent = "This is a heading";
console.log(heading); // <h1 class="title">This is a heading</h1>

const image = document.createElement("img");
image.src = "<https://picsum.photos/id/11/320/240>";
image.alt = "Nature";
console.log(image); // <img src="<https://picsum.photos/id/11/320/240>" alt="Nature" />

//elem.append(el1) → el1 öğesini elem'in en sonuna ekler.
//elem.prepend(el1) → el1 öğesini elem'in en başına ekler.
//elem.after(el1) → el1 öğesini elem’in hemen sonrasına ekler (elem’in dışına).
//elem.before(el1) → el1 öğesini elem’in hemen öncesine ekler (elem’in dışına).

//element.remove() → Seçilen öğeyi tamamen siler, sayfadan kaldırır.
const text = document.querySelector(".text");
text.remove();

//element.innerHTML (okuma): Elementin içeriğini HTML kodu olarak alır.
//element.innerHTML = "..." (yazma): Elementin içeriğini tamamen değiştirir.
//innerHTML = "" → İçeriği tamamen temizler.
//insertAdjacentHTML("position", html) → Belirtilen yere yeni HTML ekler, eski içerik kalır.
//innerHTML hızlı ama tüm içeriği değiştirir, insertAdjacentHTML() daha verimli ve güvenlidir.

//Özellik	Açıklama
//addEventListener	Bir öğeye olay dinleyicisi ekler.
//removeEventListener	Daha önce eklenen dinleyiciyi kaldırır.
//event nesnesi	Olay hakkında bilgi verir.
//event.type	Olayın türünü verir (örneğin "click").
//event.currentTarget	Olayın gerçekleştiği öğeyi verir.
//keydown, keyup	Klavyede tuşa basıldığında/çekildiğinde tetiklenir.
//event.key, event.code	Basılan tuşun değeri ve fiziksel konumu hakkında bilgi verir.
//ctrlKey, shiftKey vb.	Kısayol tuşlarına basılı mı kontrol eder.

//submit	Form gönderilince
//preventDefault()	Sayfanın yenilenmesini engeller
//change	Değer değişir ve odak kaybedilirse olur
//input	Her tuş basımında anında olur
//focus	Bir öğeye odaklanıldığında
//blur	Odaktan çıkıldığında

form.addEventListener("submit", function (event) {
  event.preventDefault(); // sayfa yenilenmez
});

//event.target.elements["kullanici_adi"].value; //Eğer form içindeki verilere ulaşmak istiyorsan:

input.addEventListener("input", function (event) {
  console.log(event.target.value);
});

input.addEventListener("focus", () => console.log("odaklandı"));
input.addEventListener("blur", () => console.log("odaktan çıktı"));

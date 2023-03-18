let a = document.createElement("a");
a.href = "http://hackertyper.com/";
a.textContent = "Hack!";

document.body.appendChild(a);

let list = document.getElementById("my-favorite-books");
let newBook = document.createElement("li");

newBook.innerText = "The Great Gatsby";
let second = list.children[2];
list.insertBefore(newBook, second);

let newList =  document.getElementById("my-closet");
let newClothes = document.createElement("li");

newClothes.innerText = "Air Jordan 1";
let seconditem = newList.children[1];
newList.insertBefore(newClothes, seconditem);

let dinnerSection = document.createElement('ul');
dinnerSection.textContent = 'Dinner:';
let dinnerSectionArray = [...dinnerSection.children];
document.body.appendChild(dinnerSection);


let tacos = document.createElement('li');
tacos.textContent = 'Tacos';
dinnerSection.append(tacos);

let rice = document.createElement('li');
rice.textContent = 'Rice';
dinnerSection.insertBefore(rice, tacos);

let salmon = document.createElement('li');
salmon.textContent = 'Salmon';
dinnerSection.insertBefore(salmon, tacos);

let cake = document.createElement('li');
cake.textContent = 'Cake';
dinnerSection.append(cake);
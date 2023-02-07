const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

let newCats;
function appendCat(name) {
   return newCats = [...cats, name];
}
appendCat('Broom');

function prependCat(name) {
    return newCats = [name, ...cats];
}
prependCat("Arnold");

function removeLastCat() {
    return newCats = cats.slice(0, -1)
}
removeLastCat();

function removeFirstCat() {
    return newCats = cats.slice(1)
}
removeFirstCat

var fruits = ["pomme","banane","orange"];
console.log(fruits);
fruits.push ("proie");
console.log(fruits);
fruits.shift()
console.log(fruits);
for(var i of fruits){
    console.log(i);
}
console.log("2eme methode :")
for(var i in fruits){
    console.log(fruits[i]);
}
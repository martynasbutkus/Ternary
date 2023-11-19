// Ternary 1 Uzduotis
var fname = 'Marty'
fname.length < 5 ? alert("Short name") : alert("Long name")


// Ternary 2 Uzduotis
var clientAge = prompt("Iveskite savo amziu")
var legalAge = 18
clientAge > legalAge ? alert("Can drive") : alert("Can't drive")


// Ternary 3 Uzduotis
var age = prompt("Iveskite savo amziu: ")
age < 0 || age > 120 ? alert("Invalid Age") : age < 5 ? alert("Child") : alert("Adult")


// Ternary 4 Uzduotis
var phone = 'iphone'
phone = phone.toLowerCase();
var isIphoneUser = Boolean

isIphoneUser = phone == 'iphone'
alert(isIphoneUser)
// app.js file content
console.log("Hello World")

// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // return the Dollar value
    return Math.floor(valueInDollar * 100) / 100;
}

// We declare the function with the exact name "fromDollarToYen"
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to dollars
    let euros = valueInDollar / oneEuroIs.USD;
    let valueInYen = euros * oneEuroIs.JPY;
    // return the Yen value
    return Math.floor(valueInYen * 100) / 100;
}

// We declare the function with the exact name "fromYenToPound"
const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to dollars
    let euros = valueInYen / oneEuroIs.JPY;
    let valueInPound = euros * oneEuroIs.GBP;
    // return the Pound value
    return Math.floor(valueInPound * 100) / 100;
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
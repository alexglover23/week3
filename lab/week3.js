// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

let numberOfProducts        // expects a Number
let products                // expects an Array of product data
let promotion1Description   // expects a String describing the promotion
let promotion2Description   // expects a String describing the promotion
let promotion3Description   // expects a String describing the promotion
let promotion1Icon          // expects a String (emoji)
let promotion2Icon          // expects a String (emoji)
let promotion3Icon          // expects a String (emoji)

// The `database` variable is an existing object that contains our products database.
// The variables at the top of this code will be used to create the UI for the page.
// Fill in their values; e.g. set a value to `numberOfProducts` and it will appear on the page.

// promotion1-3 are variables representing randomized promotions at the top of the page.
// These promotions should change with every page load – assume we don't know the number
// of promotions in the database. Duplicates are ok.
// Promotions should be displayed with a corresponding icon.
// - 🚛 for shipping
// - 🤑 for discount
// - 🎰 for contest

// HINTS
// - Use Array.length to determine the total number of products/promotions in the database
// - To generate a random number between 0 and x in Javascript, use our
//   getRandomInt() function and pass it x (note that it's inclusive of both 0 and x).

function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇


console.log(database)
numberOfProducts = database.products.length
console.log(numberOfProducts)
products = database.products
console.log(products)

let a = getRandomInt(database.promotions.length)
promotion1Description = database.promotions[a-1].description
promotion1Type = database.promotions[a-1].type

if(promotion1Type == 'shipping') {
  promotion1Icon = '🚛'
  } else if(promotion1Type == 'discount') {
  promotion1Icon = '🤑'
  } else {
    promotion1Icon = '🎰'
  }

console.log(promotion1Description)

a = getRandomInt(database.promotions.length)
promotion2Description = database.promotions[a-1].description
promotion2Type = database.promotions[a-1].type

if(promotion2Type == 'shipping') {
  promotion2Icon = '🚛'
  } else if(promotion2Type == 'discount') {
  promotion2Icon = '🤑'
  } else {
    promotion2Icon = '🎰'
  }

a = getRandomInt(database.promotions.length)
promotion3Description = database.promotions[a-1].description
promotion3Type = database.promotions[a-1].type


if(promotion3Type == 'shipping') {
promotion3Icon = '🚛'
} else if(promotion3Type == 'discount') {
promotion3Icon = '🤑'
} else {
  promotion3Icon = '🎰'
}
 


  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥


  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}
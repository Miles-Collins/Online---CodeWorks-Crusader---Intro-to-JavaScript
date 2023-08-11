// SECTION VARIABLES USING VAR< LET OR CONST (HOISTING)

// console.log("Hello World")

// let dolphin = "Dolphin"

// const elephant = "Elephant"

// const fifty = 50

// console.log(bear, dolphin, elephant)

// SECTION LET

// for (let index = 0; index <= 10; index++) {
//   console.log(index)
// }

// console.log("LET", index)

// console.log('[IM A DOLPHIN]', dolphin)

// dolphin = "Whale"

// console.log('[AM I A DOLPHIN]', dolphin)

// SECTION CONST

// console.log('IM AN ELEPHANT', elephant)

// fifty += 50
// console.log(fifty)

// !SECTION


// SECTION PRIMITIVE/VALUES TYPES

// STRINGS

""; // DOUBLE QUOTES
let doubleQuotes = "Double Quotes"
// console.log(doubleQuotes);
''; // SINGLE QUOTES
let singleQuotes = 'Single Quotes';
// console.log(singleQuotes);
``; // BACKTICKS
let backTicks = `Backticks`
// console.log(backTicks);
// console.log("Let's go play basketball.")
// console.log('${singleQuotes}, ${doubleQuotes}')

// NUMBERS

-1 // NEGATIVE
let negative = -1
0 // ZERO
let zero = 0
1 // POSITIVE
let positive = 1
0.5 // DECIMALS
let decimal = 0.5


// BOOLEAN

true // TRUE
false // FALSE
let thisIsTrue = true
let thisIsFalse = false
let formPassword = false

// THE WEIRD ONES

null // NULL - NULL HAS NO VALUE
let imNull = null
// console.log("I'm null:", imNull)
undefined // UNDEFINED - UNDEFINED HAS NEVER BEEN GIVEN A VALUE
let imUndefined
// console.log("I'm undefined:", imUndefined)
NaN // NOT A NUMBER
let notANumber = 100 / "something"
// console.log("Not a number:", notANumber)

// OBJECTS

let newObject = {
  firstName: "First",
  lastName: "Last",
  age: 77,
  isObject: true,
  oldObject: {
    olderObject: {
      oldestObject: {
        firstName: null,
        lastName: undefined,
        age: NaN,
      }
    }
  }
}

// We can create variables
const oldestObject = newObject.oldObject.olderObject.oldestObject

console.log(newObject.oldObject.olderObject.oldestObject.firstName, newObject.oldObject.olderObject.oldestObject.lastName) 
// Output => null undefined

console.log(oldestObject.firstName, oldestObject.lastName) // Output => First Last

// ARRAYS

// ARRAYS ARE A COLLECTION OF DATA, AND THEY ARE ALSO STORED BY THEIR INDEXES

let animals = ["bear", "lion", "tiger", "elephant"]
//               0        1       2         3

console.log(animals[2]) // Expected output => "tiger"

let lion = animals[1]

let myTypesArray = ["First", "Last", 77, true, null, undefined, NaN]

// Output => ^^^^^^
console.log('[MY TYPES ARRAY]', myTypesArray)

let alphaObject = {
  animals: ["bear", "bird", "bee", "bunny"],
  canItFly: false,
  canItSwim: "no",
  canItBear: 0
}

myTypesArray.push(alphaObject)

console.log('MY TYPES ARRAY, WITH ALPHA OBJECT', myTypesArray)

// PEMDAS (Parenthesis, exponents, multiplication, division, addition, subtraction)

if((5 / (4 * 3)) + 3 > 2) {
  console.log(5 / (4 * 3) + 3);
}

if(5 / 4 * 3 + 3 > 2) {
  console.log(5 / 4 * 3 + 3);
}


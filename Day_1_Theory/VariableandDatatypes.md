TOPIC: VARIABLES AND DATA TYPES

WHAT IS A VARIABLE?

A variable is a container used to store data in memory.

Real-life example:
Just like you store water in a bottle, JavaScript stores data in variables.

Example:
let age = 20;

Here:
age = variable name
20 = value stored

Behind the scenes:
Memory:
age → 20

Variables are just labels pointing to stored data.

WHAT IS A DATA TYPE?

A data type defines what kind of value is stored in a variable.

Example:
let name = "Anant"; // string
let age = 20; // number
let isStudent = true; // boolean

DECLARING VARIABLES

JavaScript provides 3 ways:

var a = 10;
let b = 20;
const c = 30;

VAR vs LET vs CONST

VAR:

Old method
Can re-declare
Function/global scope
Not recommended

Example:
var x = 10;
var x = 20; // allowed (bad practice)

LET:

Cannot re-declare
Can update
Block scoped

Example:
let age = 20;
age = 25; // allowed

CONST:

Cannot re-declare
Cannot update
Block scoped

Example:
const pi = 3.14;

IMPORTANT:
const objects can still be modified internally

Example:
const obj = { name: "Anant" };
obj.name = "Rahul"; // allowed

VARIABLE NAMING RULES

Allowed:

Letters (a-z, A-Z)
Numbers (0-9)
Underscore _
Dollar $

Not Allowed:

Spaces
Special characters
Starting with number

Examples:
let userName = "Anant"; // valid
let 1name = "Anant"; // invalid

Important:

Case sensitive (a ≠ A)
Cannot use reserved keywords
TYPES OF DATA

Two main categories:

Primitive Data Types
Non-Primitive (Objects)
PRIMITIVE DATA TYPES
NUMBER
Used for numeric values

Example:
let age = 21;
let price = 99.99;

Special values:
Infinity
-Infinity
NaN (Not a Number)

Example:
console.log("abc" * 2); // NaN

STRING
Used for text

Example:
let name = "Anant";

Strings are immutable (cannot be changed)

Example:
let str = "hello";
str[0] = "H"; // will not change

BOOLEAN
Represents true or false

Example:
let isLoggedIn = true;

UNDEFINED
Variable declared but not assigned

Example:
let x;
console.log(x); // undefined

NULL
Intentional empty value

Example:
let y = null;

Difference:
undefined = no value assigned
null = intentionally empty

BIGINT
Used for very large numbers

Example:
let big = 12345678901234567890n;

SYMBOL
Used for unique identifiers

Example:
let id = Symbol("id");

NON-PRIMITIVE (OBJECTS)

Objects store multiple values in key-value pairs

Example:
const student = {
name: "Anant",
age: 20,
isStudent: true
};

Real-life example:
A product in a shopping app:

name
price
availability
TYPEOF OPERATOR

Used to check data type

Example:
typeof 10 // number
typeof "hello" // string
typeof true // boolean

Important:
typeof null returns "object" (JavaScript bug)

DYNAMIC TYPING

JavaScript is dynamically typed

Example:
let x = 10;
x = "hello";

Same variable can store different types

TYPE COERCION

JavaScript automatically converts types

Examples:
"5" + 2 = "52"
"5" - 2 = 3

MEMORY CONCEPT

Primitive types:
Stored directly

Example:
let a = 10;
let b = a;

b = 20;

Result:
a = 10
b = 20

Objects:
Stored by reference

Example:
let obj1 = { name: "Anant" };
let obj2 = obj1;

obj2.name = "Rahul";

Result:
Both obj1 and obj2 change

COMMON MISTAKES
Using var instead of let/const
Confusing null and undefined
Thinking const makes objects immutable
Using == instead of ===
COMPARISON

let vs const vs var

var:

re-declare allowed
update allowed
global scope

let:

re-declare not allowed
update allowed
block scope

const:

re-declare not allowed
update not allowed
block scope

null vs undefined

null:

intentional empty value

undefined:

value not assigned
INTERVIEW QUESTIONS
Difference between let, const, var
What is dynamic typing?
Primitive vs non-primitive types
Why typeof null is object?
CODING QUESTIONS

Swap variables:

let a = 10;
let b = 20;

[a, b] = [b, a];

Check data type:

let x = "Hello";
console.log(typeof x);

Object modification:

const user = { name: "A" };
user.name = "B";

MINI PROJECT (USER PROFILE)

Goal: Store and update user data

Step 1:
const user = {
name: "Anant",
age: 20,
isLoggedIn: true
};

Step 2:
console.log(user.name);

Step 3:
user.age = 21;

Step 4:
user.city = "Delhi";

Final Output:
{
name: "Anant",
age: 21,
isLoggedIn: true,
city: "Delhi"
}
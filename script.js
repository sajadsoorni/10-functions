'use strict';
/*

// Default Parameters

const bookings = [];

const createBooking = function (flighNum, numPassengers = 1, price = 199 * numPassengers) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flighNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

*/

/*

//  How Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const sajad = {
  name: 'Sajad Soornisofla',
  paspport: 24739479284,
};

const checkIn = function (flighNum, passenger) {
  flighNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.paspport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, sajad);
// console.log(flight);
// console.log(sajad);

// Is the same as doing...
// const flighNum = flight;
// const passenger = sajad;

const newPassport = function (person) {
  person.paspport = Math.trunc(Math.random() * 100000000000);
};

newPassport(sajad);
checkIn(flight, sajad);

*/

/*

//  First-Class and Higher-Order Functions
//  Functions Accepting Callback Functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

// Higher-order function

const transformer = function (str, fn) {
  console.log(`Orginal string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);

transformer('JavaScript is the best!', oneWord);

// JS callbacks all the time
const high5 = function () {
  console.log('✌️');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

*/

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey');

// this inner function remembers the value of
// greeting (i.e., 'hey') because of closure.

// const greeterHey = function(name) {
//   console.log(`hey ${name}`);
// };

greeterHey('Sajad');
greeterHey('Steven');

greet('Hello')('Sajad');

// Challenge
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr('Hi')('team');

*/
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`.padStart(60, ' '));
    this.bookings.push([{ flight: `${this.iataCode}${flightNum}`, name }]);
  },
};

lufthansa.book(39, 'Sajad Soornisofla');
lufthansa.book(39, 'John Smith');
// console.log(lufthansa);

//-----------------------------------------
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sara Williams');
// console.log(eurowings);

book.call(lufthansa, 33, 'Maryy Copper');
// console.log(lufthansa);

//-----------------------------------------

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 18, 'Alice tabol');
// console.log(swiss);

//-----------------------------------------

// Apply method
const flightData = [53, 'George Cooper'];
book.apply(swiss, flightData);
// console.log(swiss);

book.call(swiss, ...flightData);

// Bind method

// book.call(eurowings, 23, 'Sara Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');
bookLX(18, 'Victoria Sebati');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Sajad Soornisofla');
bookEW23('Martha Cooper');

// With Event Listener

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVat = value => value + value * 0.23;
console.log(addVAT);
console.log(addVAT(100));
console.log(addVAT(23));

// Challenge

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * 0.23;
  };
};

const addVat2 = addTaxRate(0.23);
console.log(addVat2(100));
console.log(addVat2(23));

// Challenge

const addTaxRateArr = (rate) => (value) => value + value * rate;
const addVat3 = addTaxRateArr(0.23);
console.log(addVat2(100));
console.log(addVat2(23));

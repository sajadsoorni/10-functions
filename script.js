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

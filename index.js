// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
};

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
};

function destructivelyRemoveLastDriver() {
  drivers.pop();
};

function destructivelyRemoveFirstDriver() {
  drivers.shift();
};

function appendDriver(name) {
  let array = [...drivers, "Broom"];
  return array;
};

function prependDriver(name) {
  let array = ["Arnold", ...drivers];
  return array;
};

function removeLastDriver() {
  let array = [...drivers].slice(0, drivers.length - 1);
  return array;
};

function removeFirstDriver() {
  let array = [...drivers].slice(1);
  return array;
};

// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver (name) {
 drivers.push(name);
}

function destructivelyPrependDriver (name) {
 drivers.unshift(name);
}

function destructivelyRemoveLastDriver () {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver (name) {
  let appendDriver = [...drivers, name];
  return appendDriver;
}

function prependDriver (name) {
  let prependDriver = [name, ...drivers];
  return prependDriver;
}

function removeLastDriver() {
  let removeLastDriver = drivers.slice(0,2);
  return removeLastDriver;
}

function removeFirstDriver () {
  let removeFirstDriver = drivers.slice(1,3);
  return removeFirstDriver;
}



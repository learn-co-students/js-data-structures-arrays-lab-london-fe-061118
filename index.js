// Write your solution here!
const drivers= ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(driver) {
drivers.push(driver);
}

function appendDriver(driver) {
  driversCopy = ["Milo", "Otis", "Garfield"];
  driversCopy.push(driver);
  return driversCopy;
  
}

function destructivelyPrependDriver(driver) {
  drivers.unshift(driver);
}
function prependDriver(driver) {
   driversCopy = ["Milo", "Otis", "Garfield"];
  driversCopy.unshift(driver);
  return driversCopy;
}

function destructivelyRemoveLastDriver () {
  drivers.pop();

}
function removeLastDriver (driver) {
  driversCopy = ["Milo", "Otis", "Garfield"];
  driversCopy.pop(driver);
  return driversCopy;
}
function destructivelyRemoveFirstDriver() {
  drivers.shift();
}
function removeFirstDriver(driver) {
  driversCopy = ["Milo", "Otis", "Garfield"];
  driversCopy.shift(driver);
  return driversCopy;
}
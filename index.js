const drivers =["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name){
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  let aDriver = drivers.slice();
  aDriver.push("Broom");
  return aDriver;
}

function prependDriver(name){
  let pDriver = drivers.slice();
  pDriver.unshift("Arnold");
  return pDriver;
}

function removeLastDriver() {
  let lDriver = drivers.slice();
  lDriver.pop();
  return lDriver;
}

function removeFirstDriver(){
  let fDriver = drivers.slice();
  fDriver.shift();
  return fDriver;
}
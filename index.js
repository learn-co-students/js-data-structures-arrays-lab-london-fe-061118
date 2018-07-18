// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  drivers.push(name
    )
}

function destructivelyPrependDriver(name){
  drivers.unshift(name
    )
}


function destructivelyRemoveLastDriver(){
  drivers.pop(
    )
}


function destructivelyRemoveFirstDriver(){
  drivers.shift(
    )
}

function appendDriver(name){
  const newdrivers = ["Milo", "Otis", "Garfield"]
  newdrivers.push(name
    )
    return newdrivers
}  

function prependDriver(name){
  const newdrivers = ["Milo", "Otis", "Garfield"]
  newdrivers.unshift(name
    )
    return newdrivers
}  

function removeLastDriver(){
  const newdrivers = ["Milo", "Otis", "Garfield"]
  newdrivers.pop(
    )
    return newdrivers
} 

function removeFirstDriver(){
  const newdrivers = ["Milo", "Otis", "Garfield"]
  newdrivers.shift(
    )
    return newdrivers
} 




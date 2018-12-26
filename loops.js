
function forLoop(name){
 for (let i = 0; i < 25; i++) {
  if (i === 1) {
 
  name.push("I am 1 strange loop.")
 
  } else {
  
  name.push(`I am ${i} strange loops.`)
  }
}
  return name
}

function whileLoop(number){
  while (number > 0) {
  console.log(--number);
  }
  return "done"
}

var i = 0;
 
function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(name){
  
  do {
  name.pop;
  incrementVariable();
  
} while (name.length > 0 && incrementVariable());
  return name
}





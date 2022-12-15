// 1.
function sum(array) {
  
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try {
  let res = sum(null);
  console.log(res);
} catch (e) {
  if (e instanceof TypeError) {
    console.log(e.message);
  }
}


// 2.
// tests
try{
  sayName("Alex");
  sayName(1);
} catch (e) {
  console.log(e.message);
}

// Your code here
function sayName(name) {
  if(typeof name !== 'string') {
    throw TypeError('Invalid name! Must be a string!')
  }

  console.log(name);
}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try{
  greet()
} catch {
  console.log('Hello World!')
}
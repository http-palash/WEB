alert('Hello');


function sum(a,b){
    return a+b;
}

function hello(name) {
    let phrase = `Hello, ${name}!`;
  
    debugger;  // <-- the debugger stops here
  
    alert(phrase);
  }

hello('palash')


// open console to see
for (let i = 0; i < 5; i++) {
    console.log("value,", i);
  }
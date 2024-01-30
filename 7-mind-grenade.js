const num1 = 5;
const num2 = 10;

// When you import a module, you are also invoking it!
function addValues(){
    console.log(`the sum is: ${num1 + num2}`);
}

addValues();
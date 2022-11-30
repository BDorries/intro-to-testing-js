// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(str){
    if (typeof str !== "string"){
        return "Hello, World!"
    }
    return `Hello, ${str}`;
}

function isFive(num){
    if(typeof num !== 'number')
    return false;
    return parseInt(num) === 5;
}

function isEven(input){
    return parseFloat(input) % 2 === 0;
}

function isVowel(char){
    let vowels = ['a','e','i','o','u'];
    return vowels.includes(char.toLowerCase());
}
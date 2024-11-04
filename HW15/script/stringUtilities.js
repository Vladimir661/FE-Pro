//Task 3
function uppercaseFn (str) {
    let stringItem = str.toUpperCase();
    return stringItem;
}

function reverseFn (str){
    let reverseItem = str.split('').reverse().join('');
    return reverseItem;
}

export {uppercaseFn, reverseFn};
// Code your solutions in this file
function writeCards(array, typeOfGift){
    let newArray = [];
    for (let counter = 0; counter < array.length; counter++) {
        newArray.push(`Thank you, ${array[counter]}, for the wonderful ${typeOfGift} gift!`);
    }
    return newArray;
}

function countDown(number){
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
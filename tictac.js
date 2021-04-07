
const messageTicTac = num => {

    if( typeof num !== "number" ){

        return "Ey, you should pass a number";
    }

    const isDivisible = (num, divisor) => num % divisor === 0;

    if(num === 0){
        return num;
    }

    if( isDivisible(num, 3) && isDivisible(num, 5) ){
        return "tictac";
    }

    if (isDivisible(num, 3)) {
      return "tic";
    }

    if (isDivisible(num, 5)) {
      return "tac";
    }

    return num;
}


const printNumber = (num) => {

    for(let i = 0; i <= num; i++){
        console.log(`${i}: ${messageTicTac(i)}`);
    }
}

printNumber(25);

module.exports = messageTicTac;


//funkcja do obliczania nowej ceny
// var priceNew = function newPrice(price, counter) {
//   priceNew = price + counter * 0.1 * price;
//   return priceNew;
// }
let cookieVal = 0,
    cursorCounter = 0,
    grandmaCounter = 0,
    farmCounter = 0,
    mineCounter = 0,
    factoryCounter = 0,
    priceNew = (price,counter) => price + counter * 0.1 * price, //funkcja do obliczania nowej ceny
    production = (prodVal, counter) => prodVal * counter;//oblicznie produkcji jednego producenta w 1 sec

let cursorProdVal = production(0.1, cursorCounter),
 grandmaProdVal = production(1, grandmaCounter),
 farmProdVal = production(8, farmCounter),
 mineProdVal = production(47, mineCounter),
 factoryProdVal = production(260, factoryCounter),
 cookieProdSec = cursorProdVal + grandmaProdVal + farmProdVal + mineProdVal + factoryProdVal;//oblicznie produkcji na sec
setInterval(()=> console.log (Math.floor(cookieVal+=cookieProdSec)), 1000);

console.log ();

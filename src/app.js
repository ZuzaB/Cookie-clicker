let cookieVal = 0,
  cursorCounter = 0,
  grandmaCounter = 0,
  farmCounter = 0,
  mineCounter = 0,
  factoryCounter = 0,
  priceNew = (price, counter) => price + counter * 0.1 * price, //funkcja do obliczania nowej ceny
  production = (prodVal, counter) => prodVal * counter, //oblicznie produkcji jednego producenta w 1 sec
  cursorProdVal = production(0.1, cursorCounter),
  grandmaProdVal = production(1, grandmaCounter),
  farmProdVal = production(8, farmCounter),
  mineProdVal = production(47, mineCounter),
  factoryProdVal = production(260, factoryCounter),
  cookieProdSec = cursorProdVal + grandmaProdVal + farmProdVal + mineProdVal + factoryProdVal; //oblicznie produkcji na sec

const cookieValDiv = document.querySelector('.cookie-quantity'),
  cookieValDivSec = document.querySelector('.cookie-quantity-sec');

setInterval(function() {

  let currCookieVal = Math.floor(cookieVal += cookieProdSec); //obecny stan ciasteczek

  cookieValDiv.innerText = currCookieVal + ' cookies';
}, 1000);

cookieValDivSec.innerText = 'per second: ' + cookieProdSec;

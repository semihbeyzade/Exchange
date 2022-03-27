const amountElement = document.getElementById("amount")
const firstSelect = document.getElementById("firstSelect")
const secondSelect = document.getElementById("secondSelect")

const currency = new Currency("USD","TRY")

// https://api.exchangerate.host/latest

eventListeners();

function eventListeners(){

    amountElement.addEventListener("input", exchangeCurrency);
    firstSelect.onchange = function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent)

    };
    secondSelect.onchange = function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent)

    };
}

function exchangeCurrency(){
  currency.changeAmount(amountElement.value)
  currency.exchange()
  .then(result => {
    const show = document.getElementById("show")
    show.value = result.toFixed(2);
  })
  .catch(err => console.log(err))
    
}















let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let exchangeRateElement = document.querySelector(".js-exchangeRate");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.51;
let rateUSD = 3.95;
exchangeRateElement.value = rateEUR;

currencyElement.addEventListener("input", () => {
    if (currencyElement.value === "eur") {
      exchangeRateElement.value = rateEUR;
    }
    if (currencyElement.value === "usd") {
      exchangeRateElement.value = rateUSD;
    }
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let exchangeRate = exchangeRateElement.value;
    let amount = amountElement.value;

    let result = exchangeRate * amount;
    resultElement.innerText = result.toFixed(2);
});

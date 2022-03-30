{

    const setExchangeRate = (rateEUR, rateUSD) => {
        const currencyElement = document.querySelector(".js-currency");
        const exchangeRateElement = document.querySelector(".js-exchangeRate");

        if (currencyElement.value === "eur") {
            exchangeRateElement.value = rateEUR;
        }
        if (currencyElement.value === "usd") {
            exchangeRateElement.value = rateUSD;
        }
    }

    const calculateResult = (event) => {
        event.preventDefault();

        const exchangeRateElement = document.querySelector(".js-exchangeRate");
        const amountElement = document.querySelector(".js-amount");
        const resultElement = document.querySelector(".js-result");

        const exchangeRate = exchangeRateElement.value;
        const amount = amountElement.value;
        const result = exchangeRate * amount;

        resultElement.innerText = result.toFixed(2);
    }

    const init = () => {
        const exchangeRateElement = document.querySelector(".js-exchangeRate");
        const currencyElement = document.querySelector(".js-currency");
        const formElement = document.querySelector(".js-form");

        const rateEUR = 4.51;
        const rateUSD = 3.95;
        exchangeRateElement.value = rateEUR;

        currencyElement.addEventListener("input", () => {
            setExchangeRate(rateEUR, rateUSD);
        });
        formElement.addEventListener("submit", calculateResult);
    }

    init();
}
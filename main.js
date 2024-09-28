// currency-converter.ts
var exchangeRates = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 145.25, // Japanese Yen
    // Add more currencies and rates as needed
};
function convertCurrency(amount, fromCurrency, toCurrency) {
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
        throw new Error('Invalid currency code provided.');
    }
    // Convert to base currency (USD) first
    var amountInUSD = amount / exchangeRates[fromCurrency];
    // Convert from USD to target currency
    var convertedAmount = amountInUSD * exchangeRates[toCurrency];
    return convertedAmount;
}
function convert() {
    var amountToConvert = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;
    try {
        var convertedAmount = convertCurrency(amountToConvert, fromCurrency, toCurrency);
        document.getElementById('result').innerText = "".concat(amountToConvert, " ").concat(fromCurrency, " is equal to ").concat(convertedAmount.toFixed(2), " ").concat(toCurrency);
    }
    catch (error) {
        console.error(error.message);
    }
}
// Agrega un event listener al botón "Convert"
var convertButton = document.getElementById('convertButton');
convertButton === null || convertButton === void 0 ? void 0 : convertButton.addEventListener('click', convert);

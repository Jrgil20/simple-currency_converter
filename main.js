// currency-converter.ts
var exchangeRates = {
    USD: 1, // US Dollar (base currency)
    EUR: 0.85, // Euro
    GBP: 0.73, // British Pound
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
// Example usage
var amountToConvert = 100;
var fromCurrency = 'USD';
var toCurrency = 'EUR';
try {
    var convertedAmount = convertCurrency(amountToConvert, fromCurrency, toCurrency);
    console.log("".concat(amountToConvert, " ").concat(fromCurrency, " is equal to ").concat(convertedAmount.toFixed(2), " ").concat(toCurrency));
}
catch (error) {
    console.error(error.message);
}

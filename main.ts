// currency-converter.ts

interface CurrencyRates {
    [currency: string]: number; 
  }
  
  const exchangeRates: CurrencyRates = {
    USD: 1,      // US Dollar (base currency)
    EUR: 0.85,   // Euro
    GBP: 0.73,   // British Pound
    JPY: 145.25, // Japanese Yen
    // Add more currencies and rates as needed
  };
  
  function convertCurrency(amount: number, fromCurrency: string, toCurrency: string): number {
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
      throw new Error('Invalid currency code provided.');
    }
  
    // Convert to base currency (USD) first
    const amountInUSD = amount / exchangeRates[fromCurrency]; 
  
    // Convert from USD to target currency
    const convertedAmount = amountInUSD * exchangeRates[toCurrency];
  
    return convertedAmount;
  }
  

function convert() {  // Nueva función para manejar la conversión
  const amountToConvert = parseFloat((document.getElementById('amount') as HTMLInputElement).value);
  const fromCurrency = (document.getElementById('fromCurrency') as HTMLSelectElement).value;
  const toCurrency = (document.getElementById('toCurrency') as HTMLSelectElement).value;

  try {
    const convertedAmount = convertCurrency(amountToConvert, fromCurrency, toCurrency);
    (document.getElementById('result') as HTMLDivElement).innerText = `${amountToConvert} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
  } catch (error: any) {
    console.error(error.message);
  }
}

// Agrega un event listener al botón "Convert"
const convertButton = document.getElementById('convertButton'); 
convertButton?.addEventListener('click', convert); 


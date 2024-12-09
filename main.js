const addressApi = 'http://api.exchangeratesapi.io/v1/latest?access_key=d3ca3bfb37a08a1355510bf54114cc7b&symbols=USD'

async function ExchangeRates(){
    const resp = await fetch(addressApi);

    if (resp.status === 200){
        const obj = await resp.json();

        console.log(obj);
    }
}

ExchangeRates();



const form = document.querySelector('form')
const amount = document.getElementById('amount')
const currency = document.getElementById('currency') // opcoes de moedas
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

const USD = 4.87
const EUR = 5.32 
const GBP = 6.08

// evento para o input receber somente valores numéricos
amount.addEventListener('input', () =>{
    
    const hasCharacterRegex = /\D+/g

    amount.value = amount.value.replace(hasCharacterRegex, "")
})

// capturando o evento de submit do furmulario
form.onsubmit = (event) => {
    event.preventDefault();

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£")
            break;
    }
}

// funcao para converter a moeda;

function convertCurrency(amount, price, symbol){
    // const result = parseFloat(amount * price)
    // return result + symbol
    
    description.textContent = `${symbol} 1 = ${price} `
    result.textContent = `R$ ${(amount * price).toFixed(2)}`
    footer.classList.add('show-result')
}








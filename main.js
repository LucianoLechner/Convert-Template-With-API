
const form = document.getElementById('form') 
const amount = document.getElementById('amount')
const currency = document.getElementById('currency') // opcoes de moedas (select)
const footer = document.querySelector('main footer')
const description = document.getElementById('description')
const result = document.getElementById('result')

const url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL'


async function getApi(){ // FUNÇÃO ASSINCRONA PARA A CHAMADA DA API 
    const resp = await fetch(url); // GUARDA A RESPOSTA DA API DENTRO DA VAR RESP, APOS AGUARDAR O CARREGAMENTO (AWAIT);

    if (resp.status === 200){ // SE A RESPOSTA FOR OK, TRANSFORMA EM OBJETO JSON.
        const obj = await resp.json();

        const dolar = obj["USDBRL"]; // seleciona o objeto USDBRL
        const euro = obj["EURBRL"];
        const libra = obj["GBPBRL"];

        form.addEventListener('submit', (e) =>{
            e.preventDefault();
        
            switch (currency.value){
                case "USD":
                    description.textContent = `US$ 1 = ${Number(dolar.bid).toFixed(2)}`
                    result.textContent = 'R$ ' + (amount.value * dolar.bid).toFixed(2);
                    footer.classList.add('show-result')
                    break;

                case "EUR":
                    description.textContent = `€ 1 = ${Number(euro.bid).toFixed(2)}`
                    result.textContent = 'R$ ' + (amount.value * euro.bid).toFixed(2);
                    footer.classList.add('show-result')
                    break;

                case "GBP":
                    description.textContent = `£ 1 = ${Number(libra.bid).toFixed(2)}`
                    result.textContent = 'R$ ' + (amount.value * libra.bid).toFixed(2);
                    footer.classList.add('show-result')
                    break;
            }
        } )
    } else {
        alert('Ops, estamos com problemas, tente novamente mais tarde.')
        
    }
}

getApi();

// evento para o input receber somente valores numéricoss
amount.addEventListener('input', () =>{
    
    const hasCharacterRegex = /\D+/g

    amount.value = amount.value.replace(hasCharacterRegex, "")
})









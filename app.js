const BaseURL = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_lU7wkvchh4LsOlPm3sUAGa9sEGPupzJNDFRLUuS4';

const dropdown = document.querySelectorAll('.dropdown select');

const fromCurrency = document.querySelector('.from select');
const toCurrency = document.querySelector('.to select');

for(let select of dropdown){
    for(let code in countryList){
        let option = document.createElement('option');
        option.innerText = code;
        option.value = code;
        select.append(option);
        if(select.name === 'from' && code === 'USD'){
            option.selected = true;
        }
        else if(select.name === 'to' && code === 'NPR'){
            option.selected = true;
        }
    }

    select.addEventListener('change', (e) => {
        updateFlag(e.target);
    });

}

const updateFlag = (element) => {
     let curr_code = element.value;
     let countryCode = countryList[curr_code];
     let newSrc = `https://flagcdn.com/${countryCode.toLowerCase()}.svg`;
    let img = element.parentElement.querySelector('img');
    img.src = newSrc;
}

const btn = document.querySelector('button');
const final = document.querySelector('.finalValue');

btn.onclick = async (e) => {
     e.preventDefault();
     let amount = document.querySelector('.amount input');
if(amount.value === ''  || amount.value <=0){
    amount.value = 1;
}

const url = `${BaseURL}&base_currency=${fromCurrency.value}&currencies=${toCurrency.value}`;
let response =  await fetch(url);
let data = await response.json();
let rate = data.data[toCurrency.value].value;
console.log(data.data);

final.innerText = `${input.value} ${fromCurrency.value} = ${(rate.toFixed(2)*amount.value).toLocaleString()} ${toCurrency.value}`;

}

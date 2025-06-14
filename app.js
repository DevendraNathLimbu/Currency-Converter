const BaseURL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json';

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

btn.onclick = async (e) => {
     e.preventDefault();
     let amount = document.querySelector('.amount input');
if(amount.value === ''  || amount.value <=0){
    amount.value = 1;
}

const url = `${BaseURL}/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`;
 let response =  await fetch(url);
 let data = await response.json();
 console.log(response);
}

https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@1/latest/v1/currencies/eur/jpy.json
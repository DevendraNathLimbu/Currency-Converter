const BaseURL = 'https://api.example.comhttps://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json';

const dropdown = document.querySelectorAll('.dropdown select');

for(let select of dropdown){
    for(let code in countryList){
        let option = document.createElement('option');
        option.innerText = code;
        option.value = code;
        select.append(option);
    }
}
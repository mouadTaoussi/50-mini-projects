const email = document.querySelector('.email'),
      card_types = document.querySelectorAll('.card-logo'),
      card_number = document.querySelector('.identity-number'),
      exp_date = document.querySelector('.exp-date'),
      cvc = document.querySelector('.cvc'),
      name_on_card = document.querySelector('.name'),
      country = document.querySelector('.country'),
      postal = document.querySelector('.postal');

// Card numbers patterns to validate
const visa = new RegExp("^4");
const master_card = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;
const discover = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
const amex = new RegExp("^3[47]");
const diners = new RegExp("^36");
const diners_carte_blanche = new RegExp("^30[0-5]");
const jcb = new RegExp("^35(2[89]|[3-8][0-9])");
const visa_electron =  new RegExp("^(4026|417500|4508|4844|491(3|7))");
const email_regex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
const text_regex = /^[a-zA-Z ]*$/;
const exp_date_regex = /^(1[0-2]|0[1-9]|\d)\/(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)$/; // MM/YY

let  validation_status = {
    email : false,
    card_number : false,
    exp_date : false,
    cvc : false,
    name_on_card : false,
    country : false,
    postal : false,
}

// Input patterns
email.setAttribute('maxlength', '30');
// card_number.setAttribute('oninput', "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');");
card_number.setAttribute('maxlength', '16');
exp_date.setAttribute('maxlength', '5');
// cvc.setAttribute('oninput', "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');");
cvc.setAttribute('maxlength', '3');
// name_on_card.setAttribute('oninput', "this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');");
name_on_card.setAttribute('maxlength', '20');

// Validation events
email.addEventListener('keyup',()=>{
    if (!email_regex.test(email.value)) {
        email.classList.add('not-valid');
    }else {
        email.classList.remove('not-valid');
        // Mark as validated
        // validation_status.email = true;
    }
})
card_number.addEventListener('keyup', getCardType);
exp_date.addEventListener('keyup', (event)=>{
    if (event.path[0].value.length == 2) {
        const date = event.path[0].value.toString()
        event.path[0].value += '/'
    }
});
exp_date.addEventListener('keyup',()=>{
    if (!exp_date_regex.test(exp_date.value)) {
        exp_date.classList.add('not-valid');
    }else {
        exp_date.classList.remove('not-valid');
        // Mark as validated
        // validation_status.exp_date = true;
    }
});
cvc.addEventListener('keypress',()=>{
    if (cvc.value.length == 2) {
        // Mark as validated
        // validation_status.cvc = true;
    }
});
name_on_card.addEventListener('keypress',()=>{
    if (name_on_card.value.length > 4) {
        // Mark as validated
        // validation_status.name_on_card = true;
    }
});
country.addEventListener('keypress',()=>{
    if (countries.contains(country.value)) {
        // Mark as validated
        // validation_status.postal = true;
    }
});
postal.addEventListener('keypress',()=>{
    if (postal.value.length == 4) {
        // Mark as validated
        // validation_status.postal = true;
    }
});

function getCardType()
{
    const number = document.querySelector('.identity-number').value;
    // visa
    if (number.match(visa) != null){
        card_types.forEach((type)=>{
            type.classList.remove('visible');
        });
        document.querySelector('.visa').classList.add('visible');
        // return "Visa";
    }
    // Mastercard 
    // Updated for Mastercard 2017 BINs expansion
    else if (master_card.test(number)){ 
        card_types.forEach((type)=>{
            type.classList.remove('visible');
        });
        document.querySelector('.master_card').classList.add('visible');
        // return "Mastercard";
    }
    // AMEX
    else if (number.match(amex) != null){
        card_types.forEach((type)=>{
            type.classList.remove('visible');
        });
        document.querySelector('.amex').classList.add('visible');
        // return "AMEX";
    }

    // Discover
    else if (number.match(discover) != null){
        card_types.forEach((type)=>{
            type.classList.remove('visible');
        });
        document.querySelector('.discover').classList.add('visible');
        // return "Discover";
    }
    // Diners
    else if (number.match(diners) != null){
        card_types.forEach((type)=>{
            type.classList.remove('visible');
        });
        document.querySelector('.diners').classList.add('visible');
        // return "Diners";
    }
    // Diners - Carte Blanche
    else if (number.match(diners_carte_blanche) != null){
        card_types.forEach((type)=>{
            type.classList.remove('visible');
        });
        document.querySelector('.diners').classList.add('visible');
        // return "Diners - Carte Blanche";
    }
    // JCB
    else if (number.match(jcb) != null){
        card_types.forEach((type)=>{
            type.classList.remove('visible');
        });
        document.querySelector('.jcb').classList.add('visible');
        return "JCB";
    }
    // Visa Electron
    else if (number.match(visa_electron) != null){
        card_types.forEach((type)=>{
            type.classList.remove('visible');
        });
        document.querySelector('.visa_electron').classList.add('visible');
        return "Visa Electron";
    }
    else {
    // ^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$

    console.log('not')
    // // Mark as validated
    // validation_status.card_number = true;
    // return "";
    }
}


// Strict validation and submit
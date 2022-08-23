const email = document.querySelector('.email');
const card_types = document.querySelectorAll('.card-logo');
const card_number = document.querySelector('.identity-number');
const exp_date = document.querySelector('.exp-date');
const cvc = document.querySelector('.cvc');
const name_on_card = document.querySelector('.name');
const country = document.querySelector('.country');
const postal = document.querySelector('.postal');
const button = document.querySelector('.pay-btn');
const message = document.querySelector('.error-message');

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
const only_text_regex = /^[a-zA-Z ]*$/;
const only_numbers_regex = /[0-9]/;
const exp_date_regex = /^(1[0-2]|0[1-9]|\d)\/(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)$/; // MM/YY

// Input conditions
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
    if (!email_regex.test(email.value) || email.value.length < 5 || email.value.length > 30) {
        email.classList.add('not-valid');
    }else {
        email.classList.remove('not-valid');
    }
})
card_number.addEventListener('keyup', getCardType);
exp_date.addEventListener('keyup', (event)=>{
    /* Format exp date*/
    if (event.path[0].value.length == 2) {
        const date = event.path[0].value.toString()
        event.path[0].value += '/'
    }
});
exp_date.addEventListener('keyup',()=>{
    if (!exp_date_regex.test(exp_date.value) || exp_date.value.length != 5) {
        exp_date.classList.add('not-valid');
    }else {
        exp_date.classList.remove('not-valid');
    }
});
cvc.addEventListener('keypress',()=>{
    if (cvc.value.length == 2 || !only_numbers_regex.test(parseInt(cvc.value))) {
        cvc.classList.remove('not-valid');
    }else {
        cvc.classList.add('not-valid');
    }
});
name_on_card.addEventListener('keypress',()=>{
    if (name_on_card.value.length < 4 || name_on_card.value.length > 20 || !only_text_regex.test(name_on_card.value) ) {
        name_on_card.classList.add('not-valid');
    }else {
        name_on_card.classList.remove('not-valid');
    }
});
country.addEventListener('keypress',()=>{
    if (!countries.includes(country.value)) {
        country.classList.remove('not-valid')
    }else {
        country.classList.add('not-valid')
    }
});
postal.addEventListener('keypress',()=>{
    if (postal.value.length != 4 || !only_numbers_regex.test(parseInt(postal.value))) {
        postal.classList.add('not-valid');
    }else {
        postal.classList.remove('not-valid');
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
        // return "JCB";
    }
    // Visa Electron
    else if (number.match(visa_electron) != null){
        card_types.forEach((type)=>{
            type.classList.remove('visible');
        });
        document.querySelector('.visa_electron').classList.add('visible');
        // return "Visa Electron";
    }
    else {
    // ^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$

    console.log('card is not valid')
    // // Mark as validated
    // validation_status.card_number = true;
    // return "";
    }
}


// Strict validation and submit
button.onclick = () => {
    if (email.value == "" || card_number.value == "" || exp_date.value == "" || cvc.value == "" || name_on_card.value == "" || country == "" || postal.value == "") {
        message.innerText = 'Fill all of the inputs';
        return;
    }
    if (!email_regex.test(email.value)) {
        email.classList.add('not-valid');
        message.innerText = 'Email is not valid';
        return;
    }
    if (email.value.length < 5 || email.value.length > 30) {
        email.classList.add('not-valid');
        message.innerText = 'Email is longer than expected';
        return;
    }
    if(!exp_date_regex.test(exp_date.value) || exp_date.value.length != 5) {
        exp_date.classList.add('not-valid');
        message.innerText = 'Expiration date is not valid, or is from the past, or it is longer than expected'; 
        return;   
    }
    if (cvc.value.length != 3 || !only_numbers_regex.test(parseInt(cvc.value))) {
        cvc.classList.add('not-valid');
        message.innerText = 'CVC is not valid';
        return;
    }
    if (name_on_card.value.length < 4 || name_on_card.value.length > 20 || !only_text_regex.test(name_on_card.value)) {
        name_on_card.classList.add('not-valid')
        message.innerText = 'Name on card is not valid';
        return;
    }
    if (!countries.includes(country.value)) {
        country.classList.add('not-valid');
        message.innerText = 'The selected country is not even Exist!';
        return;
    }
    if (postal.value.length != 5 || !only_numbers_regex.test(parseInt(postal.value)) ) {
        postal.classList.add('not-valid');
        message.innerText = 'Postal number is not valid';
        return;
    }

    button.innerText = "Loading...";

}
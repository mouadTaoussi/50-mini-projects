const cardType = document.querySelector('.card-logo');

const visa = new RegExp("^4");
const master_card = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;
const amex = new RegExp("^3[47]");
const discover = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
const diners = new RegExp("^36");
const diners_carte_blanche = new RegExp("^30[0-5]");
const jcb = new RegExp("^35(2[89]|[3-8][0-9])");
const visa_electron =  new RegExp("^(4026|417500|4508|4844|491(3|7))");

function validateExpDate()
{
    if (event.path[0].value.length == 2) {
        const date = event.path[0].value.toString()
        event.path[0].value += '/'
    }
}

function getCardType()
{
    const number = document.querySelector('.identity-number').value;
    // visa
    if (number.match(visa) != null){
        cardType.style.backgroundImage = "url('./images/cardlogo/visa.png')";
        return "Visa";
    }
    // Mastercard 
    // Updated for Mastercard 2017 BINs expansion
    else if (master_card.test(number)){ 
        cardType.style.backgroundImage = "url('./images/cardlogo/master_card.png')";
        console.log('master_card')
        return "Mastercard";
    }
    // AMEX
    else if (number.match(amex) != null){
        cardType.style.backgroundImage = "url('./images/cardlogo/amex.png')";
        return "AMEX";
    }

    // Discover
    else if (number.match(discover) != null){
        cardType.style.backgroundImage = "url('./images/cardlogo/discover.png')";
        return "Discover";
    }
    // Diners
    else if (number.match(diners) != null){
        cardType.style.backgroundImage = "url('./images/cardlogo/diners_club_int.png')";
        return "Diners";
    }
    // Diners - Carte Blanche
    else if (number.match(diners_carte_blanche) != null){
        cardType.style.backgroundImage = "url('./images/cardlogo/diners_club_int.png')";
        return "Diners - Carte Blanche";
    }
    // JCB
    else if (number.match(jcb) != null){
        cardType.style.backgroundImage = "url('./images/cardlogo/jcb.png')";
        return "JCB";
    }
    // Visa Electron
    else if (number.match(visa_electron) != null){
        cardType.style.backgroundImage = "url('./images/cardlogo/visa_electron.png')";
        return "Visa Electron";
    }
    else {
    // ^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$
    // cardType.style.backgroundImage = "url('')";
    console.log('not')
    return "";
    }
}

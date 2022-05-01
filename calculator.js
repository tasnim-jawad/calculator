function getHistory() {
    return document.getElementById("history-value").innerText; //ekhane history theke nuber niye joma kore rekheche
}

function printHistory(num) {
    document.getElementById("history-value").innerText = num; //ekhane history te nuber print kore display-te dekhachche
}

function getOutput() {
    return document.getElementById("output-value").innerText; //ekhane output theke nuber niye joma kore rekheche
}

function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerText = num;
    }else{
        document.getElementById("output-value").innerText = getFormattedNumber(num);  //ekhane output-e nuber print kore display-te dekhachche
    }                                                            // ^^^^ei function er maddhome number coma diye alada hoy
    
}

function getFormattedNumber(num){ //jokhon koma dewar proyojon hobe tokhon ei function er vitor diye number nite hobe
    let n = Number(num);  //string-ke number formet-e niye ashe
    let value =n.toLocaleString("en");  //number-ke coma diye alada korar jonno toLocalString bebohar hoy
    return value; //jekhane ei function call kora hobe shekhane ei vaue return korbe
}
printOutput("5435435345")

function reverseNumberFormet(num) {  //jokhon koma uthay nite hobe tokhon ei function er vitor diye number nite hobe
    return Number(num.replace(/,/g,'')); 
}


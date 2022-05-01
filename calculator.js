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
    if (num == "") {  //number na thakle jate 0 na dekhay.khalithakle jate khali dekhay
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

let operator = document.getElementsByClassName("operator")
for (let i = 0; i < operator.length; i++) {
    const element = operator[i];
    element.addEventListener('click' , function() {
        if(this.id == "clear"){
            printHistory("");
            printOutput("")
        }else if(this.id == "backspace"){
            let output =  reverseNumberFormet(getOutput()).toString(); //output niye koma uthano hoyeche ebong number ke  string banano hochche
            
            if(output){                                   //jodi etar man thake
                output = output.slice(0,output.length-1);      //output jeta peyechi setar 0 index theke shuru kore shesher agerta porjonto kete nibe
                printOutput(output)                                 //notun output print koredibe
            }
        }
    });
}


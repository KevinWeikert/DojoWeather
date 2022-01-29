var temperatureHighC = [24,27,21,26];
var temperatureHighF = [75,80,69,78];
var temperatureLowC = [18,19,16,21];
var temperatureLowF = [65,66,61,70];

function loading(){
    alert("Loading weather report...")
}

// Show High Temperatures in Celcius
function showHighTempC(){
    for(x=0; x<temperatureHighC.length; x++){
        document.querySelector(`#high-${x}`).innerText = temperatureHighC[x]+"°";
    }
}

//Show High Temperatures in Fahrenheit
function showHighTempF(){
    for(x=0; x<temperatureHighF.length; x++){
        document.querySelector(`#high-${x}`).innerText = temperatureHighF[x]+"°";
    }
}


// Show Low Temperatures in Celcius
function showLowTempC(){
    for(x=0; x<temperatureLowC.length; x++){
        document.querySelector(`#low-${x}`).innerText = temperatureLowC[x]+"°";
    }
}

//Show Low Temperatures in Fahrenheit
function showLowTempF(){
    for(x=0; x<temperatureLowF.length; x++){
        document.querySelector(`#low-${x}`).innerText = temperatureLowF[x]+"°";
    }
}

function changeUnits(element){
    if(element.value == "Fahrenheit"){
        showHighTempF();
        showLowTempF();
    }else{
        showHighTempC();
        showLowTempC();
    }
}

function acceptCookies(){
    document.getElementById('cookie').remove();
}

showHighTempC()
showLowTempC()
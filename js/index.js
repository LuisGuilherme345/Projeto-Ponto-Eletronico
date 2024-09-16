

const diaSemana = document.getElementById("diadasemana");
const dataAtual = document.getElementById("dataatual");
const horaAtual = document.getElementById("horaatual");
const botaoregistro = document.getElementById("botaoregistrar");

botaoregistro.addEventListener("click", register);

dataAtual.textContent = getCurrentDate();
diaSemana.textContent = getWeekDay();

const dialogP = document.getElementById("dialog-p");

const dialogData = document.getElementById("dialog-data");
dialogData.textContent = getCurrentDate();

const dialogHora = document.getElementById("dialog-hora");
dialogHora.textContent = getCurrentTime();

const selectRegisterType = document.getElementById("register-type");

const botaoDialogRegister = document.getElementById("botao-dialog-registrar");
botaoDialogRegister.addEventListener("click", () => {

    let register = dialogRegister(selectRegisterType.value);
   
    localStorage.setItem("lastRegisterType", selectRegisterType.value);
});
const botaoDialogFechar = document.getElementById("dialog-fechar");

//cria um objeto correspondente a um registro de ponto com data/hora/localização atualizados, parâmetro é o tipo de ponto
function dialogRegister(typeInOut){

    let currentDate = getCurrentDate();
    let currentTime = getCurrentTime();

    ponto = {
        "date": currentDate,
        "time": currentTime,
        "location": locationUser,
        "id": 1,
        "type": typeInOut
    }
    return ponto;
}

let registerLocalStorage = getRegisterLocalStorage("register");

function saveRegisterLocalstorage(register){
    registerLocalStorage.push(register);

    localStorage.setItem("register", JSON.stringify(registerLocalStorage));
}

function getRegisterLocalStorage(key) {

    let register = localStorage.getItem(key);

    if(!register) {
        return [];
    }

    return JSON.parse(register);

}

botaoDialogFechar.addEventListener("click", () =>{
    dialogP.close();
});


localStorage.setItem("aula", "programação web");


let locationUser = {};


function getUserLocation(){
    navigator.geolocation.getCurrentPosition((position) =>{
        let userLocation = {
            "lat": position.coords.latitude,
            "long": position.coords.longitude
        }
        locationUser = userLocation;
        console.log(locationUser);
    });
}




function register(){
    dialogP.showModal();
}


//atualiza a hora em tempo real
function updateContentHour(){
    horaAtual.textContent = getCurrentTime();
    dialogHora.textContent = getCurrentTime();
}

//retorna a hora atual por: hora:minutos:segundos (ifs servem para deixar sempre um 0 ao lado do número, porém é recomendado usar a função padstart para isso se for necessário fazer novamente)
function getCurrentTime(){
    const date = new Date();    
    
    if ( ((date.getHours()) < 10) && ((date.getMinutes()) < 10) && ((date.getSeconds()) < 10) ){
        return "0" + date.getHours() + ":" + "0" + date.getMinutes() + ":" + "0" + date.getSeconds();
    } else if ( ((date.getHours()) < 10) && ((date.getMinutes()) < 10) ){
        return "0" + date.getHours() + ":" + "0" + date.getMinutes() + ":" + date.getSeconds();
    } else if ( ((date.getHours()) < 10) && ((date.getSeconds()) < 10) ){
        return "0" + date.getHours() + ":" + date.getMinutes() + ":" + "0" + date.getSeconds();
    } else if ( ((date.getMinutes()) < 10) && ((date.getSeconds()) < 10) ){
        return  date.getHours() + ":" + "0" + date.getMinutes() + ":" + "0" + date.getSeconds();
    } else if ( ((date.getHours()) < 10) ){
        return  "0" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    } else if ( ((date.getMinutes()) < 10) ){
        return  date.getHours() + ":" + "0" + date.getMinutes() + ":" + date.getSeconds();
    } else if ( ((date.getSeconds()) < 10) ){
        return  date.getHours() + ":" + date.getMinutes() + ":" + "0" + date.getSeconds();
    } else {    
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

}

//retorna a data atual por: dd/mm/yyyy (ifs servem para deixar sempre um 0 ao lado do número, porém é recomendado usar a função padstart para isso se for necessário fazer novamente)
function getCurrentDate(){
    const date = new Date();
    if ( ((date.getDate()) < 10) && ((date.getMonth()) < 10) ){
        return "0" + date.getDate() + "/" + "0" + (date.getMonth()+1) + "/" + date.getFullYear();
    } else if ( ((date.getDate()) < 10) ){
        return "0" + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
    } else if ( ((date.getMonth()) < 10) ){
        return date.getDate() + "/" + "0" + (date.getMonth()+1) + "/" + date.getFullYear();
    } else {
        return date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
    }
}

//retorna o dia da semana por extenso
function getWeekDay(){
    const date = new Date();
    const dia = date.getDay();
    const diassemana = ["Domingo", "Segunda-Feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    return diassemana[dia];
}

setInterval(updateContentHour, 1000);

console.log(getCurrentTime());
console.log(getCurrentDate());
console.log(getWeekDay());
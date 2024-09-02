navigator.geolocation.getCurrentPosition((position) =>{
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
});


const diaSemana = document.getElementById("diadasemana");
const dataAtual = document.getElementById("dataatual");
const horaAtual = document.getElementById("horaatual");
const botaoregistro = document.getElementById("botaoregistrar");

botaoregistro.addEventListener("click", register);

dataAtual.textContent = getCurrentDate();
diaSemana.textContent = getWeekDay();

const dialogP = document.getElementById("dialog-p");

const dialogData = document.getElementById("dialog-data")
dialogData.textContent = getCurrentDate();

const dialogHora = document.getElementById("dialog-hora")
dialogHora.textContent = getCurrentTime();

const botaoDialogEntrada = document.getElementById("dialog-entrada")
botaoDialogEntrada.addEventListener("click", () =>{
    //continuar em casa a partir deste
})

const botaodialogFechar = document.getElementById("dialog-fechar");
botaodialogFechar.addEventListener("click", () =>{
    dialogP.close();
});

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
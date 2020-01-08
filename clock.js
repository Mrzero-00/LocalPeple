const clocktext = document.querySelector("#clockID");



function init(){
    const timeget = new Date();
    //CurrentTime.year = timeget.getFullYear;
    const date = timeget.getDate();
    const day  = timeget.getDay();
    
    const hour = timeget.getHours();
    const minuit =timeget.getMinutes();

    clocktext.innerText= `${hour<10 ? `0${hour}` : hour }:${minuit<10 ? `0${minuit}`:minuit} ${date}/${day}`;
    //console.loge(timeget);
}
setInterval(init,1000);

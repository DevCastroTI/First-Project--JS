const onOff = document.getElementById('onOff');
const brokenReset = document.getElementById('brokenReset')
const lamp = document.getElementById('lampada')

function isLampBroken () {
    return lamp.src.indexOf('quebrada') > - 1
}

function lampOn(){
    if(!isLampBroken()){
        lamp.src = './statesLamp/ligada.png';
    }
}

function lampOff(){
    if(!isLampBroken()){
        lamp.src = './statesLamp/desligada.png';
        
    }
}

function lampBroken (){
    lamp.src = './statesLamp/quebrada.png';
}

function resetLamp (){
    if(isLampBroken()) {
     return lamp.src = './statesLamp/desligada.png';
}    
}


function turnOnOff () {
    if(onOff.textContent == 'ON'){
        lampOn();
        onOff.textContent = 'OFF';

    } else { onOff.textContent == 'OFF'
lampOff();
onOff.textContent = 'ON'} 
}
 function repairLamp (){
    if(brokenReset.textContent == 'BROKEN'){
        lampBroken();
        brokenReset.textContent = 'REPAIR'

    } else { brokenReset.textContent == 'REPAIR'
    resetLamp();
    brokenReset.textContent = 'BROKEN' 
    

} 

 
}


 








    

   




brokenReset.addEventListener("click",repairLamp)
onOff.addEventListener("click", turnOnOff);
lamp.addEventListener("mouseover", lampOn);
lamp.addEventListener("mouseleave", lampOff);

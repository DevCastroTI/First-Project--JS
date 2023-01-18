const onOff = document.getElementById('onOff');
const brokenReset = document.getElementById('brokenReset')
const lamp = document.getElementById('lamp')

function isLampBroken () {
    return lamp.src.indexOf('broken') > - 1
}

function lampOn(){
    if(!isLampBroken()){
        lamp.src = './statesLamp/on.png';
    }
}

function lampOff(){
    if(!isLampBroken()){
        lamp.src = './statesLamp/off.png';
        
    }
}

function lampBroken (){
    lamp.src = './statesLamp/broken.png';
}

function resetLamp (){
    if(isLampBroken()) {
     return lamp.src = './statesLamp/off.png';
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

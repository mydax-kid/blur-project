let background= document.querySelector('.body');
let text= document.getElementById('counter');
let counter= 0;


let int= setInterval(blurImage, 50);

function blurImage(){ 
  counter++;
  
  if(counter > 100) { 
    clearInterval(int)  
  }
  else{
    text.innerText= `${counter}%`;
    background.style.filter= `blur(${scale (counter, 0, 100, 0, 10)}px)`
  }
}


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}


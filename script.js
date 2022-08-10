const btnAdd = document.getElementById('add');
const btnSubtract = document.getElementById('subtract');
const currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber++;
    if(currentNumber>0){
        currentNumberWrapper.classList.remove("red");
        currentNumberWrapper.classList.add("green");
    }
    else if(currentNumber===0){
        currentNumberWrapper.classList.remove("red");
        currentNumberWrapper.classList.remove("green");
    }
    currentNumberWrapper.innerHTML = currentNumber; 
}

function decrement(){
    currentNumber--;
    if(currentNumber<0){
        currentNumberWrapper.classList.remove("green");
        currentNumberWrapper.classList.add("red");
    }
    else if(currentNumber===0){
        currentNumberWrapper.classList.remove("red");
        currentNumberWrapper.classList.remove("green");
    }
    currentNumberWrapper.innerHTML = currentNumber; 
}

btnAdd.addEventListener('click', increment);
btnSubtract.addEventListener('click', decrement);


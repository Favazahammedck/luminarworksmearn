function displayNum(num){
    result.value+=num

}
function clearBox(){
    result.value=""
}

function evalexp(){
    result.value=eval(result.value)
}

function backspace(){
    result.value = result.value.substr(0, result.value.length-1)   

}


function pantalla(valor){
    document.getElementById('pantallita').value += valor;
    return
}

function borrarTodo(){
    document.getElementById('pantallita').value = null
    return
}

function borrar(){
    document.getElementById('pantallita').value = document.getElementById('pantallita').value.slice(-1)
}

function calcular(){
    const valorPantalla= document.getElementById('pantallita').value
    const resultado= eval(valorPantalla)
    document.getElementById('pantallita').value = resultado
    return
}

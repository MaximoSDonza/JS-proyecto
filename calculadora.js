function pantalla(valor){
    document.getElementById('pantallita').value += valor;

    return
}

function borrarTodo(){
    document.getElementById('pantallita').value = ''
    return
}

function calcular(){
    const valorPantalla = documment.getElementById('pantallita').value
    const resultado = eval(valorPantalla)
    documment.getElementById('pantallita').value = resultado
    return
}
